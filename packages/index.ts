/**
 * 组件库的入口文件，用于注册并导出每个组件，以便在 Vue 应用中使用。
 */

import { App } from 'vue'

// 引入所有组件
import QAvatar from './components/Avatar/index'
import QAvatarGroup from './components/Avatar-group/index'
import QBadge from './components/Badge/index'
import QButton from './components/Button/index'
import QButtonGroup from './components/Button-group/index'
import QIcon from './components/Icon/index'
import QInput from './components/Input/index'
import QSpace from './components/Space/index'
import QSwitch from './components/Switch/index'
import QScrollbar from './components/Scrollbar/index'
import QRadio from './components/Radio/index'
import QRadioGroup from './components/Radio-group/index'
import QLink from './components/Link/index'
import QEmpty from './components/Empty/index'

// 单独导出组件，提供按需引入
export {
  QAvatar,
  QAvatarGroup,
  QBadge,
  QButton,
  QButtonGroup,
  QIcon,
  QInput,
  QSpace,
  QSwitch,
  QScrollbar,
  QRadio,
  QRadioGroup,
  QLink,
  QEmpty,
}


// 配置组件列表
const components = [
  QAvatar,
  QAvatarGroup,
  QBadge,
  QButton,
  QButtonGroup,
  QIcon,
  QInput,
  QSpace,
  QSwitch,
  QScrollbar,
  QRadio,
  QRadioGroup,
  QLink,
  QEmpty,
]

// 批量注册组件
const install = function (app: App) {
  components.forEach(component => {
    app.component(component.name as string, component)
  })
}


// 导出完整安装的方法，调用后，会安装所有组件
export default { install }