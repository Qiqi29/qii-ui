/**
 * 组件库入口
 * 注册并导出每个组件，提供按需引入和完整引入
 */

import { App } from 'vue'

// 引入所有组件
import QIcon from './components/Icon/index'
import QSpace from './components/Space/index'
import QAvatar from './components/Avatar/index'
import QAvatarGroup from './components/Avatar-group/index'
import QButton from './components/Button/index'
import QButtonGroup from './components/Button-group/index'
import QLink from './components/Link/index'

// 单独导出组件，提供按需引入
export {
  QIcon,
  QSpace,
  QAvatar,
  QAvatarGroup,
  QButton,
  QButtonGroup,
  QLink,
}

// 组件列表
const components = [
  QIcon,
  QSpace,
  QAvatar,
  QAvatarGroup,
  QButton,
  QButtonGroup,
  QLink,
]

/**
 * 遍历组件列表，注册为 Vue 组件，
 * 可以通过 app.use(QiiUI) 完整安装组件库
 */
const install = (app: App) => {
  components.forEach(component => {
    app.component(component.name as string, component)
  })
}
export default install