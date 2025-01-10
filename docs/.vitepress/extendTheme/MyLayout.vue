<script setup lang="ts">
import { nextTick, provide } from 'vue'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
const { isDark } = useData()


// 兼容性检查，部分浏览器不支持新的过渡API
const enableTransitions = () =>
    'startViewTransition' in document &&
    window.matchMedia('(prefers-reduced-motion: no-preference)').matches

// 发送事件，触发过渡
provide('toggle-appearance', async () => {
    // 如果不支持API，直接切换主题
    if (!enableTransitions()) isDark.value = !isDark.value;

    // 定义过渡元素的关键帧
    const clipPath = [
        `polygon(-6% 0%, 100% 0%, 100% 100%, 0% 100%)`,
        `polygon(106% 0%, 100% 0%, 100% 100%, 100% 100%)`,
    ]

    // 等待过渡元素准备完毕再执行过渡（忽略这个报错）
    await document.startViewTransition(async () => {
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
    <Layout></Layout>
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