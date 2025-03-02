<script lang="ts" setup>
import { ref } from 'vue'

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

</script>

<template>
  <div class="qii-logo image-src" @mousemove="handleMove" @mouseleave="handleMoveLeave">
    <img ref="logoRef" src="/favicon.svg" alt="">
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