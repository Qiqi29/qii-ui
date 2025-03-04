<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { confetti } from '@tsparticles/confetti'

const logoRef = ref<HTMLDivElement>()
const angle = ref(0)
const speed = 5

const handleMove = (event: MouseEvent) => {
  window.requestAnimationFrame(() => {
    if (logoRef.value) {
      let box = logoRef.value.getBoundingClientRect()

      // 计算粒子角度
      const deltaX = event.clientX - (box.left + box.width / 2)
      const deltaY = (box.top + box.height / 2) - event.clientY;
      angle.value = (Math.atan2(deltaY, deltaX) * 180) / Math.PI;
      if (angle.value < 0) {
        angle.value += 360;
      }
      
      // 旋转 Logo
      const calcX = (event.clientY - box.y - (box.height / 2)) / speed * -1;
      const calcY = (event.clientX - box.x - (box.width / 2)) / speed;
      logoRef.value.style.transform = `rotateX(${calcX}deg) rotateY(${calcY}deg)`
      logoRef.value!.style.transform = `rotateX(${calcX}deg) rotateY(${calcY}deg)`
    }
  })
}

const handleMoveLeave = () => {
  window.requestAnimationFrame(() => {
    logoRef.value!.style.transform = "rotateX(0) rotateY(0)"
  })
}

const showConfetti = () => {
  const rect = logoRef.value!.getBoundingClientRect()
  const mappedX = (rect.left + rect.width / 2) / window.innerWidth;
  const mappedY = (rect.top + rect.height / 2) / window.innerHeight;
  // 释放纸屑特效
  confetti({
    particleCount: 200,
    origin: { x: mappedX, y: mappedY },
    angle: angle.value,
    startVelocity: 80,
    spread: 120,
    ticks: 20,
    gravity: 1.5,
    colors: ['#FF8C06','#DD2A2A','#73FFB1','#15BE59','#F48AC3','#FFDC22','#06C3FF'],
  })
}

</script>

<template>
  <div class="qii-logo image-src" 
    @mousemove="handleMove" 
    @mouseleave="handleMoveLeave" 
    @click="showConfetti">
    <img ref="logoRef" src="/favicon.svg" draggable="false" alt="">
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
    user-select: none;
    cursor: pointer;
    &:hover {
      transition: all 0.1s;
    }
  }
}
</style>