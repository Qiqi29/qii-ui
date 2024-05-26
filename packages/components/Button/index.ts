// 引入组件和安装方法
import Button from './src/button.vue'
import { withInstall } from '@qii-ui/utils'

// 导出已全局注册的组件
export const QButton = withInstall(Button)
export default QButton