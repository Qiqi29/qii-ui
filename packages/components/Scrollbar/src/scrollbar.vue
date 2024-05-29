<template>
  <div :class="scrollbarClass" :style="{'height': height}">

    <!-- 默认插槽，放置滚动内容 -->
    <div ref="wrap" :class="ns.n('wrapper')" :style="{'max-height': maxHeight}">
      <slot></slot>
    </div>

    <!-- native 为真，隐藏自定义滚动条  -->
    <template v-if="!native">
      <!-- Y轴滚动条 -->
      <div 
        ref="barY" 
        :class="[
          ns.n('bar'), 
          ns.is(true, 'vertical'), 
          ns.is(activeThumb == 'thumbY', 'active')
        ]">
        <div ref="thumbY" :class="ns.n('thumb')" :style="thumbYStyle"></div>
      </div>
      <!-- X轴滚动条 -->
      <div 
        ref="barX" 
        :class="[
          ns.n('bar'), 
          ns.is(true, 'horizontal'), 
          ns.is(activeThumb == 'thumbX', 'active')
        ]">
        <div ref="thumbX" :class="ns.n('thumb')" :style="thumbXStyle"></div>
      </div>
    </template>

  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, onBeforeUnmount, ref } from 'vue'
import { scrollbarProps, scrollbarEmits } from './scrollbar'
import { useNS } from '@qii-ui/hooks'

// 组件配置
defineOptions({ 
  name: 'q-scrollbar',
  inheritAttrs: true
})

// 组件属性
const props = defineProps({ ...scrollbarProps })
const emits = defineEmits({ ...scrollbarEmits })

// 组件类名
const ns = useNS('scrollbar')
const scrollbarClass = computed(() => [
  ns.nameSpace,
  ns.is(props.always, 'always-show'),
  ns.is(props.native, 'native'),
])


// 绑定滚动条的dom节点
const wrap = ref<HTMLElement | undefined>(undefined)
const barY = ref<HTMLElement | undefined>(undefined)
const thumbY = ref<HTMLElement | undefined>(undefined)
const barX = ref<HTMLElement | undefined>(undefined)
const thumbX = ref<HTMLElement | undefined>(undefined)

// 当前活跃的滚动条
const activeThumb = ref<'thumbX'|'thumbY'|'none'>('none')
// 当前操作的滚动条
let flag: 'thumbX'|'thumbY'

// 滑块的位置和大小
const thumbYStyle = ref({ top: '0', right: '0', height: '0' })
const thumbXStyle = ref({ bottom: '0', left: '0', width: '0' })

const offset = { x: 0, y: 0 }       // 记录滑块移动的偏移量
const down = { x: 0, y: 0 }         // 记录点击的坐标
const move = { x: 0, y: 0 }         // 记录移动距离
const origin = { x: 0, y: 0 }       // 记录滑块原本位置


/**
 * 事件：点击滚动条轨道
 * 控制内容区域滚动到相应位置
 * 阻止事件冒泡，点击内部滑块不会执行
 */
const headleClick = (e: MouseEvent) => {
  if (e.target !== e.currentTarget) return;
  e.stopPropagation()

  // 获取滚动条数据
  const wrapHeight = wrap.value!.scrollHeight
  const wrapWidth = wrap.value!.scrollWidth
  const barHeight = barY.value!.offsetHeight
  const barWidth = barX.value!.offsetWidth

  // 计算偏移量
  offset.y = e.clientY - barY.value!.getBoundingClientRect().top - thumbY.value!.offsetHeight / 2;
  offset.x = e.clientX - barX.value!.getBoundingClientRect().left - thumbX.value!.offsetWidth / 2;

  // 限制偏移量
  offset.y = Math.min(Math.max(0, offset.y), barY.value!.offsetHeight - thumbY.value!.offsetHeight)
  offset.x = Math.min(Math.max(0, offset.x), barX.value!.offsetWidth - thumbX.value!.offsetWidth)

  // 移动内容区域
  if (flag === 'thumbY') {
    wrap.value!.scrollTo({ top: wrapHeight * offset.y / barHeight, behavior: 'smooth' })
  }
  if (flag === 'thumbX') {
    wrap.value!.scrollTo({ left: wrapWidth * offset.x / barWidth, behavior: 'smooth' })
  }
}

/**
 * 滚动条移动事件
 */
const handleMove = (e: MouseEvent) => {
  // 获取移动的坐标
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
    wrap.value!.scrollTop = wrapHeight * offset.y / barHeight + origin.y
  }
  if (flag === 'thumbX') {
    wrap.value!.scrollLeft = wrapWidth * offset.x / barWidth + origin.x
  }
}

/**
 * 计算滑块大小
 */
const calcThumbSize = () => {
  if (props.native) return;

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
  thumbYStyle.value.height = `${thumbHeight}px`
  thumbXStyle.value.width = `${thumbWidth}px`
}


/**
 * 计算滑块位置
 */
const calcThumbPosition = () => {
  if (props.native) return;

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

// 事件，滑动内容区域
const headleScroll = () => {
  calcThumbPosition()
  emits('scroll', wrap.value!.scrollTop, wrap.value!.scrollLeft)
}

// 事件，点击滚动条轨道
const headleClickBarY = (e: MouseEvent) => {
  flag = 'thumbY'
  headleClick(e)
}
const headleClickBarX = (e: MouseEvent) => {
  flag = 'thumbX'
  headleClick(e)
}

// 使用 ResizeObserver 监听元素大小变化 
const observer = new ResizeObserver(() => {
  calcThumbSize()
  calcThumbPosition()
})

// 使用 MutationObserver 监听元素变化 
const mutationObserver = new MutationObserver(() => {
  calcThumbSize()
  calcThumbPosition()
})

// 事件，点击滚动条
const headleClickThumbY = (e: MouseEvent) => {
  down.y = e.clientY
  origin.y = wrap.value!.scrollTop
  activeThumb.value = 'thumbY'
  flag = 'thumbY'
  document.body.addEventListener('mousemove', handleMove)
}
const headleClickThumbX = (e: MouseEvent) => {
  down.x = e.clientX
  origin.x = wrap.value!.scrollLeft
  activeThumb.value = 'thumbX'
  flag = 'thumbX'
  document.body.addEventListener('mousemove', handleMove)
}

// 事件，鼠标抬起
const headleMouseup = () => {
  activeThumb.value = 'none'
  document.body.removeEventListener('mousemove', handleMove)
}


// 注册事件，添加监听器
onMounted(() => {
  wrap.value!.addEventListener('scroll', headleScroll)
  if (!props.native) {
    barY.value!.addEventListener('click', headleClickBarY)
    barX.value!.addEventListener('click', headleClickBarX)
    observer.observe(wrap.value!)
    mutationObserver.observe(wrap.value!, { attributes: true, childList: true, subtree: true })
    thumbY.value!.addEventListener('mousedown', headleClickThumbY)
    thumbX.value!.addEventListener('mousedown', headleClickThumbX)
    document.body.addEventListener('mouseup', headleMouseup)
  }
})


// 卸载监听器
onBeforeUnmount(() => {
  wrap.value!.removeEventListener('scroll', headleScroll)
  if (!props.native) {
    barY.value!.removeEventListener('click', headleClickBarY)
    barX.value!.removeEventListener('click', headleClickBarX)
    observer.unobserve(wrap.value!)
    mutationObserver.disconnect()
    thumbY.value!.removeEventListener('mousedown', headleClickThumbY)
    thumbX.value!.removeEventListener('mousedown', headleClickThumbX)
    document.body.removeEventListener('mouseup', headleMouseup)
  }
})

</script>