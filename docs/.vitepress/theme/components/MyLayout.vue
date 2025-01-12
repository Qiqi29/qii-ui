<script setup lang="ts">
import { nextTick, provide } from 'vue'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
const { isDark } = useData()

import QiiUiLogo from './QiiUiLogo.vue'


// 兼容性检查，部分浏览器不支持新的过渡API
const enableTransitions = () => 'startViewTransition' in document && window.matchMedia('(prefers-reduced-motion: no-preference)').matches

// 发送事件，触发过渡
provide('toggle-appearance', async () => {
    if (!enableTransitions()) isDark.value = !isDark.value

    // 过渡的关键帧
    const clipPath = [
        `polygon(-14% 0%, 100% 0%, 100% 100%, 0% 100%)`,
        `polygon(114% 0%, 100% 0%, 100% 100%, 100% 100%)`,
    ]

    // 等待过渡元素准备完毕再执行过渡
    await (document as any).startViewTransition(async () => {
        isDark.value = !isDark.value
        await nextTick()
    }).ready

    // 使用过渡API执行过渡
    document.documentElement.animate(
        { clipPath: isDark.value ? clipPath : clipPath.reverse() },
        {
            duration: 600,
            easing: 'cubic-bezier(.60,.1,.6,1)',
            pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`
        }
    )
})
</script>

<template>
    <DefaultTheme.Layout>
        <template #home-hero-image>
            <QiiUiLogo />
        </template>
    </DefaultTheme.Layout>
</template>

<style>
::view-transition-old(root),
::view-transition-new(root) {
    animation: none;
    mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
    z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
    z-index: 9999;
}
</style>