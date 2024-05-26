<script lang="ts">
import { defineComponent, h, computed, provide, readonly } from 'vue'
import { avatarGroupProps } from './avatar-group'
import { useNS, useFilterNodes } from '@qii-ui/hooks'
import { QAvatar } from '../../Avatar'

export default defineComponent({
  name: 'q-avatar-group',
  props: { ...avatarGroupProps },
  setup(props, { slots }) {
    
    // 组件命名空间
    const ns = useNS('avatar-group')
    const avatarGroupClass = computed(() => [
      ns.nameSpace,
      ns.t(props.size, 'string')
    ])
    
    // 传值到子组件
    provide('avatarGroup', {
      size: readonly(computed(() => props.size)),
      shape: readonly(computed(() => props.shape)),
    })

    // 获取默认插槽内容
    const children = useFilterNodes(slots.default?.())

    return () => {
      // 遍历插槽内容，返回 max 属性限制数量的节点
      const avatarArray = children.filter((_, index) => {
        return index < props.max;
      })
      // 判断是否超出最大数量，超出添加显示超出数量的组件
      if (children.length > props.max) {
        avatarArray.push(h(QAvatar, {}, () => `+${children.length - props.max}`))
      }

      // 渲染组件
      return h('div', {class: avatarGroupClass.value}, avatarArray)
    }
  }
})


</script>