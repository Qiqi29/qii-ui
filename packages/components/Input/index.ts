// 引入组件与安装函数
import _Input from './src/input.vue'
import { withInstall } from '../../utils/install'

// 导出已全局注册的组件
const Input = withInstall(_Input)
export default Input;

// 导出组件的类型
export * from './src/input'

// 添加组件到Vue的全局组件
declare module 'vue' {
  export interface GlobalComponents {
    QInput: typeof Input
  }
}