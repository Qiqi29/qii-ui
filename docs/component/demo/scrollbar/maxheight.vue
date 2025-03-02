<template>
  <q-space vertical fill>
    
    <q-space direction="center">
      <q-button-group type="default">
        <q-button @click="deleteCount">减少 item</q-button>
        <q-button @click="addCount">增加 item</q-button>
      </q-button-group>
      <span>滚动距离: {{ scrollNumber }}</span>
    </q-space>

    <q-scrollbar max-height="300px" always-show @scroll="handleScroll">
      <div class="content">
        <div class="item" v-for="i in count" :key="i">
          {{ i }}
        </div>
      </div>
    </q-scrollbar>

  </q-space>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(2)
const addCount = () => {
  count.value++
}
const deleteCount = () => {
  if (count.value <= 1) return
  count.value--
}

const scrollNumber = ref(null)
const handleScroll = (top, left) => {
  scrollNumber.value = Math.round(top) + 'px'
}
</script>

<style scoped>
.content {
  width: 100%;
  padding: 12px;
  background: #00002008;
}
.item {
  width: 100%;
  height: 80px;
  line-height: 80px;
  border-radius: 10px;
  background: var(--q-color-primary-l-a);
  color: var(--q-color-primary);
  font-size: 20px;
  text-align: center;
}
.item:not(:last-child) {
  margin-bottom: 12px;
}
</style>