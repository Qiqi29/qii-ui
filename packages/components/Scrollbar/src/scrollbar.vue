<template>
  <div :class="scrollbarClass">

    <!-- 默认插槽 -->
    <div ref="wrap" :class="ns.n('wrapper')">
      <slot></slot>
    </div>

    <!-- Y轴滚动条 -->
    <div 
      ref="barY" 
      :class="[
        ns.n('bar'), 
        ns.is(true, 'vertical'), 
        ns.is(props.outside, 'outside'),
        ns.is(activeThumb == 'Y', 'active')
      ]">
      <div ref="thumbY" :class="ns.n('thumb')" :style="thumbYStyle"></div>
    </div>

    <!-- X轴滚动条 -->
    <div 
      ref="barX" 
      :class="[
        ns.n('bar'), 
        ns.is(true, 'horizontal'), 
        ns.is(props.outside, 'outside'),
        ns.is(activeThumb == 'X', 'active')
      ]">
      <div ref="thumbX" :class="ns.n('thumb')" :style="thumbXStyle"></div>
    </div>
    
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, onBeforeUnmount, ref } from 'vue'
import { useNS } from '../../../hooks/useNS'
import { scrollbarProps } from './scrollbar'

defineOptions({ 
  name: 'q-scrollbar',
  inheritAttrs: true
})

const props = defineProps({ ...scrollbarProps })

// 组件命名空间
const ns = useNS('scrollbar')
const scrollbarClass = computed(() => [
  ns.nameSpace,
  ns.is(props.always, 'always-show'),
])

// 绑定dom节点
const wrap = ref<HTMLElement>()
const barY = ref<HTMLElement>()
const thumbY = ref<HTMLElement>()
const barX = ref<HTMLElement>()
const thumbX = ref<HTMLElement>()

// 滚动条状态
let flag: 'thumbX' | 'thumbY'
// 点击滚动条
const activeThumb = ref('none')

// 垂直滑块的大小位置
const thumbYStyle = ref({ top: '0', right: '0', height: '0' })
// 水平滑块的大小位置
const thumbXStyle = ref({ bottom: '0', left: '0', width: '0' })
// 记录滑块移动的偏移量
const offset = { x: 0, y: 0 }
// 记录点击的坐标
const down = { x: 0, y: 0 }
// 记录移动距离
const move = { x: 0, y: 0 }
// 记录滑块原本位置
const origin = { x: 0, y: 0 }

/**
 * 滚动条移动事件
 */
const handleMove = (e: MouseEvent) => {
  // 记录点击坐标
  move.x = e.clientX
  move.y = e.clientY

  // 计算偏移量
  offset.x = move.x - down.x
	offset.y = move.y - down.y

  // 获取滚动条数据
  const wrapHeight = wrap.value!.scrollHeight
  const wrapWidth = wrap.value!.scrollWidth
  const barHeight = barY.value!.offsetHeight
  const barWidth = barX.value!.offsetWidth

  // 移动内容区域
  if (flag === 'thumbY') {
    wrap.value!.scrollTop = wrapHeight * offset.y / barHeight + origin.y;
  }
  if (flag === 'thumbX') {
    wrap.value!.scrollLeft = wrapWidth * offset.x / barWidth + origin.x;
  }
}


/**
 * 滚动条点击事件
 */
const headleClick = (e: MouseEvent) => {
  // 阻止事件冒泡
  if (e.target !== e.currentTarget) return;
  e.stopPropagation()

  // 获取滚动条数据
  const wrapHeight = wrap.value!.scrollHeight
  const wrapWidth = wrap.value!.scrollWidth
  const barHeight = barY.value!.offsetHeight
  const barWidth = barX.value!.offsetWidth

  // 记录点击坐标
  offset.y = e.clientY - barY.value!.getBoundingClientRect().top - thumbY.value!.offsetHeight / 2;
  offset.x = e.clientX - barX.value!.getBoundingClientRect().left - thumbX.value!.offsetWidth / 2;

  // 限制偏移量
  offset.y = Math.min(Math.max(0, offset.y), barY.value!.offsetHeight - thumbY.value!.offsetHeight)
  offset.x = Math.min(Math.max(0, offset.x), barX.value!.offsetWidth - thumbX.value!.offsetWidth)

  // 移动内容区域
  if (flag === 'thumbY') {
    wrap.value!.scrollTo({
      top: wrapHeight * offset.y / barHeight,
      behavior: 'smooth'
    })
  }
  if (flag === 'thumbX') {
    wrap.value!.scrollTo({
      left: wrapWidth * offset.x / barWidth,
      behavior: 'smooth'
    })
  }
}


/**
 * 计算滑块大小
 */
const calcThumbSize = () => {

  // 获取滚动条数据
  const barHeight = barY.value!.offsetHeight
  const barWidth = barX.value!.offsetWidth
  const {
    scrollHeight: wrapHeight,
		scrollWidth: wrapWidth,
		offsetHeight: viewHeight,
		offsetWidth: viewWidth
  } = wrap.value!;

  // 计算滑块大小
  const thumbHeight = viewHeight * barHeight / wrapHeight;
	const thumbWidth = viewWidth * barWidth / wrapWidth;

  // 当滑块大小与滚动条高度相等，隐藏滚动条
  if (thumbHeight === barHeight) {
    barY.value!.style.opacity = '0'
  } else {
    barY.value!.style.opacity = ''
  }
  if (thumbWidth === barWidth) {
    barX.value!.style.opacity = '0'
  } else {
    barX.value!.style.opacity = ''
  }

  // 设置滑块大小
  thumbYStyle.value.height = `${Math.max(30, thumbHeight)}px`
  thumbXStyle.value.width = `${Math.max(30, thumbWidth)}px`
}


/**
 * 计算滑块位置
 */
const calcThumbPosition = () => {
  
  // 获取滚动条数据
  const barHeight = barY.value!.offsetHeight
  const barWidth = barX.value!.offsetWidth
  const {
    scrollHeight: wrapHeight, 
		scrollWidth: wrapWidth, 
		scrollTop: viewOffsetY, 
		scrollLeft: viewOffsetX
  } = wrap.value!;

  // 计算滑块位置
  const thumbOffsetY = viewOffsetY * barHeight / wrapHeight;
	const thumbOffsetX = viewOffsetX * barWidth / wrapWidth;

  // 设置滑块位置
  thumbYStyle.value.top = `${thumbOffsetY}px`;
	thumbXStyle.value.left = `${thumbOffsetX}px`;
}


/**
 * 添加监听器
 */

// 创建一个 ResizeObserver 实例并传入处理函数
const observer = new ResizeObserver(() => {
  calcThumbSize()
  calcThumbPosition()
})
// 创建一个 MutationObserver 观察器实例并传入处理函数
const mutationObserver = new MutationObserver(() => {
  calcThumbSize()
  calcThumbPosition()
})

onMounted(() => {
  // 滑动内容区域
  wrap.value!.addEventListener('scroll', () => {
    calcThumbPosition()
  })

  // 点击滚动条轨道
  barY.value!.addEventListener('click', (e: MouseEvent) => {
    flag = 'thumbY'
    headleClick(e)
  })
  barX.value!.addEventListener('click', (e: MouseEvent) => {
    flag = 'thumbX'
    headleClick(e)
  })
  
  // 监听元素大小变化
  observer.observe(wrap.value!)

  // 监听元素变化
  mutationObserver.observe(wrap.value!, { attributes: true, childList: true, subtree: true })

  // 点击Y轴滚动条
  thumbY.value!.addEventListener('mousedown', (e: MouseEvent) => {
    down.y = e.clientY
    origin.y = wrap.value!.scrollTop
    flag = 'thumbY'
    activeThumb.value = 'Y'
    document.body.addEventListener('mousemove', handleMove)
  })

  // 点击X轴滚动条
  thumbX.value!.addEventListener('mousedown', (e: MouseEvent) => {
    down.x = e.clientX
    origin.x = wrap.value!.scrollLeft
    flag = 'thumbX'
    activeThumb.value = 'X'
    document.body.addEventListener('mousemove', handleMove)
  })

  // 鼠标抬起
  document.body.addEventListener('mouseup', () => {
    document.body.removeEventListener('mousemove', handleMove)
    activeThumb.value = 'none'
  })
})


/**
 * 卸载监听器
 */
onBeforeUnmount(() => {
  thumbY.value!.removeEventListener('mousedown', () => {})
  thumbX.value!.removeEventListener('mousedown', () => {})
  document.body.removeEventListener('mouseup', () => {})
  observer.unobserve(wrap.value!)
  mutationObserver.disconnect()
})

</script>