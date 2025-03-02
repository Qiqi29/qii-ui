<script lang="ts">
import { defineComponent, h, computed, provide, readonly } from 'vue'
import { useNameSpace, useFilterNodes } from '@qii-ui/hooks'
import { avatarGroupProps } from './avatar-group'
import { QAvatar } from '../../Avatar'

export default defineComponent({
  name: 'q-avatar-group',
  props: { ...avatarGroupProps },
  setup(props, { slots }) {

    // 组件类名
    const ns = useNameSpace('avatar-group')
    const avatarGroupClass = computed(() => [
      ns.nameSpace,
      ns.type(props.size, 'string')
    ])

    // 传值到子组件
    provide('avatarGroup', {
      size: readonly(computed(() => props.size)),
      shape: readonly(computed(() => props.shape)),
    })

    // 获取默认插槽内容
    const children = useFilterNodes(slots.default?.())
    // 遍历插槽内容，返回 max 属性限制的节点
    const avatarNodes = children.filter((_, index) => index < props.max)
  
    // 判断是否添加显示超出数量提示
    if (children.length > props.max) {
      avatarNodes.push(
        h(QAvatar, {style: {padding: '0 3px 0 2px'}}, () => `+${children.length - props.max}`)
      )
    }

    // 渲染头像组件
    return () => h('div', { class: avatarGroupClass.value }, avatarNodes)
  }
})
</script>