<!-- 间距组件 -->
<script lang="ts">
import { defineComponent, computed, h, CSSProperties } from 'vue'
import { useNS } from '../../../hooks/useNS'
import { SpaceProps } from './space'

export default defineComponent({
  name: 'q-space',
  props: { ...SpaceProps },
  setup(props, { slots }) {

    // 类名生成
    const ns = useNS('space')
    const classList = computed(() => {
      return [  
        ns.nameSpace,
        ns.t(props.size, 'string'),
        ns.is(props.fill, 'fill'),
        ns.is(props.vertical, 'vertical'),
      ]
    })

    // 计算属性，样式
    const spaceStyle = computed<CSSProperties>(() => {
      return {
        "--q-space-size": typeof props.size === 'number' ? props.size + 'px' : '',
        "flex-direction": props.vertical ? 'column' : 'row',
        "align-items": props.direction,
        // "width": props.fill ? '100%' : '',
      }
    })

    // 计算属性，子项样式
    const itemStyle = computed<CSSProperties>(() => {
      return {
        // "width": props.fill ? '100%' : '',
      }
    })

    return () => {
      // 获取默认插槽中的内容
      const children = slots.default?.()

      // 渲染 space 子节点
      const renderChildren = () => {
        // 遍历子节点，使用 h 函数渲染
        return children?.map((child) => {
          return h(
            'div', 
            {
              class: `q-space__item`,
              style: itemStyle.value
            },
            child
          )
        })
      }

      // 渲染 sapce 组件
      return h(
        'div', 
        {
          class: classList.value,
          style: spaceStyle.value,
        },
        renderChildren()
      )
    }
  }
})
</script>