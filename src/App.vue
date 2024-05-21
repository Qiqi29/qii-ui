<script setup lang="ts">
import { ref, watch } from 'vue'

// 声明 API，这让TS可以识别，这个 api 会给内部元素自动加上过渡动画
interface Doc extends Document {
  startViewTransition: (arg: unknown) => Tran;
}

type Tran = {
  ready: Promise<void>;
}

const darkTheme = ref(false)

const setTheme = (event: MouseEvent) => {
  // 使用 startViewTransition
  const transition = (document as Doc).startViewTransition(() => {
    if (darkTheme.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  })
  // 调用 ready 方法，等待动画准备完成
  transition.ready.then(() => {
    const { clientX, clientY } = event;
    // 计算半径
    const radius = Math.hypot(
      Math.max(clientX, innerWidth - clientX),
      Math.max(clientY, innerHeight - clientY),
    );

    // 判断当前是否为深色模式
    const isDark = document.documentElement.classList.contains('dark');

    // 设置 clip-path，根据圆心和半径，画一个圆
    let clipPath = [
      `circle(0px at ${clientX}px ${clientY}px)`,
      `circle(${radius}px at ${clientX}px ${clientY}px)`
    ]
    // 绘制动画
    document.documentElement.animate(
      { clipPath: isDark ? clipPath.reverse() : clipPath }, 
      { 
        duration: 600, 
        easing: 'ease-in',
        pseudoElement: 
          isDark ? 
          '::view-transition-old(root)' : 
          '::view-transition-new(root)' 
      }
    )

  })
}

</script>

<template>
  <div class="layout">
    <h2>主题切换过渡动画</h2>

    <q-switch v-model="darkTheme" @click="setTheme"/>

    <div class="content">
      这是一段文本<br/><br>
      <q-button>按钮</q-button>
    </div>

  </div>
</template>

<style lang="scss">
// 禁用默认动画
::view-transition-new(root),
::view-transition-old(root) {
  animation: none;
}
// 修改动画层级
.dark::view-transition-old(root) {
  z-index: 999;
}


* {
  box-sizing: border-box;
}
:root {
  font-size: 14px;
}
body {
  margin: 0;
}

.layout {
  padding: 40px;
}

.content {
  margin-top: 100px;
}
</style>
