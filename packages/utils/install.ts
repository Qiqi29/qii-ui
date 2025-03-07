import { App, Component, Plugin } from "vue"

type SFCWithInstall<T> = T & Plugin

/**
 * 把组件注册到 Vue 实例中
 * @param comp 需要注册的组件
 * @returns 注册完成的组件，可以直接导入使用
 */
export const withInstall = <T extends Component>(comp: T) => {
  (comp as SFCWithInstall<T>).install = (app: App) => {
    app.component(comp.name!, comp)
  }
  return comp as SFCWithInstall<T>
}