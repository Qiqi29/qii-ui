import { App, Component, Plugin } from "vue"

// 定义 SFCWithInstall 类型，合并 Component 和 Plugin
type SFCWithInstall<T> = T & Plugin

/**
 * 把组件注册到 Vue 实例中
 * 
 * @param comp - 待注册的组件
 * @returns 注册完成的组件，可以使用 Vue.use() 在 Vue 中使用
 */
export const withInstall = function <T extends Component>(comp: T) {
    // 把组件转换为 SFCWithInstall 类型，并添加 install 方法
    (comp as SFCWithInstall<T>).install = (app: App) => {
        // 如果组件已注册，不会再次注册
        if (app.component(comp.name!)) return;
        app.component(comp.name!, comp)
    }

    return comp as SFCWithInstall<T>
}
