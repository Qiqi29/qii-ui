import { App } from 'vue'

// 引入所有组件
import QAvatar from './components/Avatar/index'
import QButton from './components/Button/index'
import QButtonGroup from './components/Button-group/index'
import QIcon from './components/Icon/index'
import QSpace from './components/Space/index'
import QLink from './components/Link/index'

// 单独导出组件，提供按需引入
export {
  QAvatar,
  QButton,
  QButtonGroup,
  QIcon,
  QSpace,
  QLink,
}

// 配置组件列表
const components = [
  QAvatar,
  QButton,
  QButtonGroup,
  QIcon,
  QSpace,
  QLink,
]
// 全局调用后，批量注册组件
const install = function (app: App) {
  components.forEach(component => {
    app.component(component.name as string, component)
  })
}

// 完整导出组件库
export default { install }