<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { confetti } from '@tsparticles/confetti'

const logoRef = ref<HTMLDivElement>()
const speed = 5

const handleMove = (event: MouseEvent) => {
  window.requestAnimationFrame(() => {
    let box = logoRef.value!.getBoundingClientRect()
    let calcX = (event.clientY - box.y - (box.height / 2)) / speed
    let calcY = (event.clientX - box.x - (box.width / 2)) / speed * -1
    logoRef.value!.style.transform = `rotateX(${calcX}deg) rotateY(${calcY}deg)`
  })
}

const handleMoveLeave = () => {
  window.requestAnimationFrame(() => {
    logoRef.value!.style.transform = "rotateX(0) rotateY(0)"
  })
}

const showConfetti = () => {
  // 计算logo相对于屏幕的坐标
  const rect = logoRef.value!.getBoundingClientRect()
  const elementCenterX = rect.left + rect.width / 2;
  const elementCenterY = rect.top + rect.height / 2;
  const mappedX = elementCenterX / window.innerWidth;
  const mappedY = elementCenterY / window.innerHeight;
  // 释放纸屑特效
  confetti({
    particleCount: 200,
    angle: 100,
    startVelocity: 80,
    spread: 120,
    origin: { x: mappedX, y: mappedY },
    ticks: 20,
    gravity: 1.5,
    colors: ['#FF8C06','#DD2A2A','#73FFB1','#15BE59','#F48AC3','#FFDC22','#06C3FF'],
  })
}

</script>

<template>
  <div class="qii-logo image-src" @mousemove="handleMove" @mouseleave="handleMoveLeave">
    <img ref="logoRef" src="/favicon.svg" draggable="false" alt="" @click="showConfetti">
  </div>
</template>

<style lang="scss" scoped>
.qii-logo {
  transform-style: preserve-3d;
  perspective: 400px;
  transition: all 0.2s;

  &:active {
    transform: translate(-50%, -50%) scale(0.95);
  }

  img {
    transition: all 0.4s;
    cursor: pointer;
    &:hover {
      transition: all 0.1s;
    }
  }
}
</style>