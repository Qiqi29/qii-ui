/**
 * 组件库入口
 * 注册并导出每个组件，提供按需引入和完整引入
 */

import { App } from 'vue'

// 引入所有组件
import QIcon from './components/Icon/index'
import QSpace from './components/Space/index'
import { QAvatar, QAvatarGroup } from './components/Avatar/index'
import { QButton, QButtonGroup } from './components/Button/index'
import QLink from './components/Link/index'
import QBadge from './components/Badge/index'

// 单独导出组件，提供按需引入
export {
  QIcon,
  QSpace,
  QAvatar,
  QAvatarGroup,
  QButton,
  QButtonGroup,
  QLink,
  QBadge,
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
  QBadge,
]

/**
 * 组件库的 install 方法
 * 
 * @example
 * ```ts
 * import QiiUI from 'qii-ui'
 * app.use(QiiUI)
 * ```
 */
const install = (app: App) => {
  components.forEach(component => {
    app.component(component.name as string, component)
  })
}
export default install;