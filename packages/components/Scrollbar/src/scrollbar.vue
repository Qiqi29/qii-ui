<template>
  <div :class="scrollbarClass" :style="{'height': height}">

    <!-- 默认插槽，放置滚动内容 -->
    <div ref="content" :class="ns.name('content')" :style="{'max-height': maxHeight}" @scroll="headleScroll">
      <slot></slot>
    </div>

    <!-- 滚动条 -->
    <template v-if="!native">
      <div ref="barY" 
        :class="[ns.name('bar'), 'vertical']"
        @click="(e) => headleClickBar(e, 'Y')"
        >
        <div ref="thumbY" 
          :class="ns.name('thumb')" 
          :style="thumbYStyle" 
          @mousedown="(e) => headleClickThumb(e, 'thumbY')">
        </div>
      </div>
      
      <div ref="barX" 
        :class="[ns.name('bar'), 'horizontal']"
        @click="(e) => headleClickBar(e, 'X')"
        >
        <div ref="thumbX" 
          :class="ns.name('thumb')" 
          :style="thumbXStyle" 
          @mousedown="(e) => headleClickThumb(e, 'thumbX')">
        </div>
      </div>
    </template>

  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { scrollbarProps, scrollbarEmits } from './scrollbar'
import { useNameSpace } from '@qii-ui/hooks'

// 组件配置
defineOptions({ 
  name: 'q-scrollbar',
  inheritAttrs: true,
})

// 组件属性
const props = defineProps({ ...scrollbarProps })
const emits = defineEmits({ ...scrollbarEmits })

// 组件类名
const ns = useNameSpace('scrollbar')
const scrollbarClass = computed(() => [
  ns.nameSpace,
  ns.is(props.alwaysShow, 'always-show'),
  ns.is(props.native, 'native'),
])


// 绑定滚动条的dom节点
const content = ref<HTMLDivElement|null>(null)
const barY = ref<HTMLDivElement|null>(null)
const barX = ref<HTMLDivElement|null>(null)
const thumbY = ref<HTMLDivElement|null>(null)
const thumbX = ref<HTMLDivElement|null>(null)

const activeThumb = ref<'thumbY'|'thumbX'|''>('') // 活跃的滚动条
const down = { x: 0, y: 0 }   // 记录点击的坐标
const origin = { x: 0, y: 0 } // 记录滑块原始位置
// 滑块样式
const thumbYStyle = ref({ top: '0', right: '0', height: '0' })
const thumbXStyle = ref({ bottom: '0', left: '0', width: '0' })


/**
 * 事件：点击滚动条轨道，滚动到对应位置
 */
function headleClickBar(event: MouseEvent, bar: string) {
  // 阻止事件冒泡
  if (event.target !== event.currentTarget) return
  event.stopPropagation()

  // 获取滚动条数据
  const { scrollHeight, scrollWidth } = content.value!
  const barYHeight = barY.value!.offsetHeight
  const barXWidth = barX.value!.offsetWidth
  const barYTop = barY.value!.getBoundingClientRect().top
  const barXLeft = barX.value!.getBoundingClientRect().left
  const thumbYHeight = thumbY.value!.offsetHeight
  const thumbXWidth = thumbX.value!.offsetWidth

  // 计算偏移量
  const offset = {
    y: event.clientY - barYTop - thumbYHeight / 2,
    x: event.clientX - barXLeft - thumbXWidth / 2,
  }
  // 限制偏移量
  offset.y = Math.min(Math.max(0, offset.y), barYHeight - thumbYHeight)
  offset.x = Math.min(Math.max(0, offset.x), barXWidth - thumbXWidth)

  // 滚动内容
  if (bar === 'Y') {
    content.value!.scrollTo({top: scrollHeight * offset.y / barYHeight, behavior: 'smooth'})
  }
  if (bar === 'X') {
    content.value!.scrollTo({left: scrollWidth * offset.x / barXWidth, behavior: 'smooth'})
  }
}


/**
 * 事件：点击滚动条滑块，记录初始数据
 */
function headleClickThumb(event: MouseEvent, thumb: 'thumbY'|'thumbX') {
  activeThumb.value = thumb
  down.y = event.clientY
  down.x = event.clientX
  origin.y = content.value!.scrollTop
  origin.x = content.value!.scrollLeft
  document.body.addEventListener('mousemove', handleMoveBar)
}


/**
 * 事件：鼠标抬起，清除滚动条拖动事件
 */
function headleMouseup() {
  document.body.removeEventListener('mousemove', handleMoveBar)
}


/**
 * 事件：拖动滚动条，移动内容区域
 */
function handleMoveBar(event: MouseEvent) {
  // 获取滚动条数据
  const { scrollHeight, scrollWidth } = content.value!
  const barYHeight = barY.value!.offsetHeight
  const barXWidth = barX.value!.offsetWidth
  
  // 计算偏移量
  const offset = {
    y: event.clientY - down.y,
    x: event.clientX - down.x,
  }

  // 移动内容区域
  if (activeThumb.value === 'thumbY') {
    content.value!.scrollTop = scrollHeight * offset.y / barYHeight + origin.y
  }
  if (activeThumb.value === 'thumbX') {
    content.value!.scrollLeft = scrollWidth * offset.x / barXWidth + origin.x
  }
}


/**
 * 事件：滚动内容区域时，更新滑块样式
 */
function headleScroll() {
  calcThumbStyle()
  emits('scroll', content.value!.scrollTop, content.value!.scrollLeft)
}


/**
 * 计算滑块的样式
 */
function calcThumbStyle() {
  if (props.native) return
  // 获取滚动条数据
  const { 
    scrollHeight, 
    scrollWidth, 
    scrollTop,
    scrollLeft,
    offsetHeight,
    offsetWidth
  } = content.value!
  const barYHeight = barY.value!.offsetHeight
  const barXWidth = barX.value!.offsetWidth
  
  // 计算滑块位置
  thumbYStyle.value.top = `${scrollTop * barYHeight / scrollHeight}px`
	thumbXStyle.value.left = `${scrollLeft * barXWidth / scrollWidth}px`
  
  // 计算滑块大小
  const thumbYHeight = offsetHeight * barYHeight / scrollHeight
  const thumbXWidth = offsetWidth * barXWidth / scrollWidth
  thumbYStyle.value.height = `${thumbYHeight}px`
  thumbXStyle.value.width = `${thumbXWidth}px`

  // 如果滑块大小和滚动条高度相同，隐藏滑块
  barY.value!.style.opacity = thumbYHeight === barYHeight ? '0' : ''
  barX.value!.style.opacity = thumbXWidth === barXWidth ? '0' : ''
}


// 使用 ResizeObserver 监听元素大小变化 
const resize = new ResizeObserver(() => {
  calcThumbStyle()
})

// 使用 MutationObserver 监听元素变化 
const mutation = new MutationObserver(() => {
  calcThumbStyle()
})


// 注册监听器
onMounted(() => {
  if (!props.native) {
    resize.observe(content.value!)
    mutation.observe(content.value!, { attributes: true, childList: true, subtree: true })
    document.body.addEventListener('mouseup', headleMouseup)
  }
})

// 移除监听器
onBeforeUnmount(() => {
  if (!props.native) {
    resize.unobserve(content.value!)
    mutation.disconnect()
    document.body.removeEventListener('mouseup', headleMouseup)
  }
})

</script>