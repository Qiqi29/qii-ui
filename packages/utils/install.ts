import { App, Component, Plugin } from "vue"

/**
 * 组件泛型
 * @param T 待注册的单文件组件
 * 合并 Plugin 接口。让类型具有单文件组件的功能和Vue插件的能力
 */
type SFCWithInstall<T> = T & Plugin

/**
 * 将单文件组件注册到 Vue 应用中
 * @param comp - 待注册安装方法的单文件组件
 * @returns 已注册安装方法的 SFCWithInstall 类型的组件
 */
export const withInstall = function <T extends Component>(comp: T) {

  // 将传入的组件 comp 转换为 SFCWithInstall 类型，并为其添加 install 方法
  (comp as SFCWithInstall<T>).install = function (app: App) {
    // 检查当前应用实例中是否已经注册了该组件，若未注册则进行注册
    if (!app.component(comp.name!)) {
      app.component(comp.name!, comp)
    }
  }
  
  // 返回已添加 install 方法的 SFCWithInstall 类型组件
  return comp as SFCWithInstall<T>;
}