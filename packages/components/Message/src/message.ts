import {App, createApp} from "vue"
import { IndexManager, LayoutManager } from '../../../utils'
import { messageBox, MsgBoxInstance } from '../../MessageBox'


// Message 组件配置
interface options {
  /**
   * @description 消息类型
   */
  type: string,
  /**
   * @description 消息图标
   */
  icon: string,
  /**
   * @description 消息文本
   */
  text: string,
  /**
   * @description 消息显示时间
   */
  duration: number,
  /**
   * @description 是否显示关闭按钮
   */
  showClose: boolean,
}

// 设置消息的显示位置
const autoLayoutDown = new LayoutManager('down')

// 初始化消息挂载节点
const initMountTo = function (el: HTMLElement) {
  el.classList.add('pos-top-center')
  el.classList.add('q-message-container')
  el.style.top = `${autoLayoutDown.nextPos()}px`
  el.style.zIndex = new IndexManager().nextIndex().toString()
}


export default async function (options: Partial<options>) {
  const { duration = 3000 } = options;

  const app: App<Element> = createApp(messageBox, {
    type: options.type,
    icon: options.icon,
    title: options.text,
    showClose: options.showClose,
    onClose() {
      // autoLayoutDown.delete(app.getRootElement())
    }
  })

  // 创建挂载点
  const mountTo: HTMLElement = document.createElement('div')
  const appendTo = document.body
  const vm = app.mount(mountTo) as MsgBoxInstance

  // 设置挂载点
  initMountTo(mountTo)
  appendTo.appendChild(mountTo)

  // 打开消息
  vm.open()
  autoLayoutDown.push(mountTo)

  // 如果时间为0，不会自动关闭
  if (duration === 0) return;

  // 延迟关闭
  await new Promise(resolve => setTimeout(resolve, duration))
  vm.close()
}