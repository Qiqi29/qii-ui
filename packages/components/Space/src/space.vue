<script lang="ts">
import { defineComponent, computed, h, CSSProperties } from 'vue'
import { SpaceProps } from './space'
import { useNS, useFilterNodes } from '@qii-ui/hooks'

export default defineComponent({
  name: 'q-space',
  props: { ...SpaceProps },
  setup(props, { slots }) {

    // 组件类名
    const ns = useNS('space')
    const classList = computed(() => [
      ns.nameSpace,
      ns.t(props.size, 'string'),
      // ns.is(props.fill, 'fill'),
      ns.is(props.vertical, 'vertical'),
    ])

    // 组件样式
    const spaceStyle = computed<CSSProperties>(() => {
      return {
        "gap": typeof props.size === 'number' ? props.size + 'px' : '',
        "flex-direction": props.vertical ? 'column' : 'row',
        "align-items": props.direction,
        "justify-content": props.justify,
      }
    })

    return () => {
      // 获取默认插槽中的内容
      const children = useFilterNodes(slots.default?.())

      // 遍历子节点，使用 h 包裹渲染
      const renderChildren = () => {
        return children?.map((child) => {
          return h(
            'div', { class: `q-space__item` }, child
          )
        })
      }

      // 渲染 sapce 组件
      return h(
        'div', {
        class: classList.value,
        style: spaceStyle.value,
      },
        renderChildren()
      )
    }
  }
})
</script>