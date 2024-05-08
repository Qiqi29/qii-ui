/**
 * 组件结构 demo
 */

// 引入组件
import __Demo from './src/__demo.vue'
// 引入安装插件
import { withInstall } from '../../utils/install'

// 导出已全局注册的组件
export default withInstall(__Demo)