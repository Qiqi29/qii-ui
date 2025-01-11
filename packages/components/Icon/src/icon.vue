<template>
    <span :class="iconClass" :style="iconStyle">

        <slot>
            <svg><use :xlink:href="`#icon-${name}`"></use></svg>
        </slot>

    </span>
</template>

<script lang="ts" setup>
import { computed, CSSProperties } from 'vue'
import { iconProps } from './icon'
// 这个报错不用管
import { useNS } from '@qii-ui/hooks'

// 组件配置
defineOptions({
    name: 'q-icon',
    inheritAttrs: true
})

// 组件属性
const props = defineProps({ ...iconProps })

// 组件类名
const ns = useNS('icon')
const iconClass = computed(() => [
    ns.nameSpace,
    ns.is(props.spin, 'spin'),
])

// 组件样式
const iconStyle = computed<CSSProperties>(() => ({
    color: props.color,
    fontSize: props.size,
    transform: props.rotate ? `rotate(${props.rotate}deg)` : '',
}))
</script>