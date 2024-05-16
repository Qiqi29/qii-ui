/**
 * 组件库的入口文件，用于注册并导出每个组件，以便在 Vue 应用中使用。
 */

import { App } from 'vue'

// 引入所有组件
import QAvatar from './components/Avatar/index'
import QButton from './components/Button/index'
import QButtonGroup from './components/Button-group/index'
import QIcon from './components/Icon/index'
import QInput from './components/Input/index'
import QSpace from './components/Space/index'
import QSwitch from './components/Switch/index'
import QLink from './components/Link/index'

// 单独导出组件，提供按需引入
export {
  QAvatar,
  QButton,
  QButtonGroup,
  QIcon,
  QInput,
  QSpace,
  QSwitch,
  QLink,
}

// 配置组件列表
const components = [
  QAvatar,
  QButton,
  QButtonGroup,
  QIcon,
  QInput,
  QSpace,
  QSwitch,
  QLink,
]
// 批量注册组件
const install = function (app: App) {
  components.forEach(component => {
    app.component(component.name as string, component)
  })
}

// 导出完整安装的方法，调用后，会安装所有组件
export default { install }