<script lang="ts">
import { defineComponent, computed, h, CSSProperties } from 'vue'
import { useNameSpace, useFilterNodes } from '@qii-ui/hooks'
import { SpaceProps } from './space'

export default defineComponent({
  name: 'q-space',
  props: { ...SpaceProps },
  setup(props, { slots }) {

    // 组件类名
    const ns = useNameSpace('space')
    const spaceClass = computed(() => [
      ns.nameSpace,
      ns.type(props.size, 'string'),
      ns.is(props.fill, 'fill'),
    ])

    // 组件样式
    const spaceStyle = computed<CSSProperties>(() => ({
      gap: typeof props.size === 'number' ? props.size + 'px' : '',
      flexDirection: props.vertical ? 'column' : 'row',
      alignItems: props.direction,
      justifyContent: props.justify,
    }))

    // 渲染子节点（在外部添加一个 div 进行包裹，防止样式冲突）
    const renderChildren = () => {
      const children = useFilterNodes(slots.default?.())
      return children?.map((child) => h('div', {class: ns.name('item')}, child))
    }

    // 返回 Space 组件
    return () => h('div', {class: spaceClass.value, style: spaceStyle.value},
      renderChildren()
    )
  }
})
</script>