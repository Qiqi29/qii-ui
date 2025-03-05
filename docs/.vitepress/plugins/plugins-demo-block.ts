import { baseParse, ElementNode, AttributeNode } from '@vue/compiler-core'
import type { MarkdownRenderer } from 'vitepress'
import { dirname, resolve, sep } from 'path'
import fs from 'fs'

let nameIndex = 1

// 创建 demo 块插件
function createDemoBlock(md: MarkdownRenderer) {
  const addRenderRule = (type: string) => {
    const defaultRenderRule = md.renderer.rules[type]
    md.renderer.rules[type] = (tokens, idx, options, env, self) => {
      // 获取当前 token 内容
      const content = tokens[idx].content.trim()

      // 如果标签不匹配，使用默认渲染规则
      if (!content.match(/^<qii-demo\s/)) {
        return defaultRenderRule!(tokens, idx, options, env, self)
      }
      
      // 解析内容中的属性
      const props = parseProps(content)

      // 如果缺少 src 属性，使用默认渲染规则
      if (!props.src) {
        console.error(`demo 块中缺少 src 属性（${env.path}）`)
        return defaultRenderRule!(tokens, idx, options, env, self)
      }

      // 获取 markdown 文件的目录，解析为完整路径，然后读取文件中的代码
      const mdDir = dirname(env.frontmatter.realPath ?? env.path)
      const srcPath = resolve(mdDir, props.src)
      const code = fs.readFileSync(srcPath, 'utf-8')
      // 把路径转换为标准路径
      const normalizePath = srcPath.split(sep).join('/')
      // 创建组件名称，使用索引确保唯一性
      const componentName = `QiiDemoComponent${nameIndex++}`

      // 注入 impoet 语句
      injectImportStatement(env, componentName, props.src)

      // 渲染为高亮代码
      const highlightedCode = md.options.highlight!(code, 'vue', '')

      return `
        <qii-demo 
          src="${normalizePath}"
          code="${encodeURIComponent(code)}"
          highlightedCode="${encodeURIComponent(highlightedCode)}">
          <${componentName}></${componentName}>
        </qii-demo>
      `.trim()
    }
  }
  // 添加渲染规则
  addRenderRule('html_inline')
  addRenderRule('html_block')
}

// 工具函数：解析属性
function parseProps(content: string) {
  const ast = baseParse(content)
  const demoElement = ast.children[0] as ElementNode
  const props: Record<string, string | undefined> = {}
  for (const {name, value} of demoElement.props as AttributeNode[]) {
    props[name] = value?.content
  }
  return props
}


const scriptRE = /<\/script>/
const scriptSetupRE = /<\s*script[^>]*\bsetup\b[^>]*/
const scriptLangTsRE = /<\s*script[^>]*\blang=['"]ts['"][^>]*/


// 工具函数：注入 import 语句，用来导入 src 属性对应的示例组件
function injectImportStatement(env: any, componentName: string, srcPath: string) {
  // 配置 import 语句
  const importStatement = `import ${componentName} from '${srcPath}'`
  
  // 如果没有脚本块，创建一个空的数组
  if (!env.sfcBlocks.scripts) {
    env.sfcBlocks.scripts = []
  }

  const tags = env.sfcBlocks.scripts as { content: string }[]
  const isUsingTS = tags.some(tag => scriptLangTsRE.test(tag.content))

  // 查找 setup 脚本块
  const existingSetupScriptIndex = tags.findIndex((tag) => 
    scriptRE.test(tag.content) && scriptSetupRE.test(tag.content)
  )

  // 如果存在 setup 脚本块，在它之前插入 import 语句，否则创建新的
  if (existingSetupScriptIndex > -1) {
    const tagSrc = tags[existingSetupScriptIndex]
    tags[existingSetupScriptIndex].content = tagSrc.content.replace(
      '</script>', `${importStatement}\n</script>`
    )
  } else {
    tags.unshift({
      content: `
        <script ${isUsingTS ? 'lang="ts"' : ''} setup>
          ${importStatement}
        </script>
      `.trim()
    })
  }
}


// 导出插件
export function qiiDemoPlugins(md: MarkdownRenderer) {
  md.use(createDemoBlock)
}