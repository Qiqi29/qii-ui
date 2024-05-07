// 将组件注册为 Vue 插件

import { App, Component, Plugin } from "vue"

/**
 * 定义一个泛型类型，它扩展自给定的泛型参数 T（代表一个单文件组件），
 * 并合并 Plugin 接口。这样定义的类型既具有单文件组件的功能，又具备 Vue 插件的能力。
 */
type SFCWithInstall<T> = T & Plugin

/**
 * 将单文件组件注册到 Vue 应用中
 * 
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
  // 返回已添加 install 方法的 SFCWithInstall 类型组件，在 Vue 应用中可以直接使用
  return comp as SFCWithInstall<T>;
}