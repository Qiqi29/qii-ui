<template>
  <q-space size="large" direction="start" vertical>
    <q-radio-group v-model="radioValue" :options="radioOptions" button/>
    <div class="block">
      <q-space :direction="radioValue">
        <span>direction: </span>
        <q-button type="primary">对齐</q-button>
        <q-avatar size="large" shape="square"/>
      </q-space>
    </div>
  </q-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const radioValue = ref('start')
const radioOptions = [
  { label: 'start', value: 'start' },
  { label: 'center', value: 'center' },
  { label: 'end', value: 'end' },
]
</script>

<style scoped lang="scss">
.block {
  padding: 16px;
  border-radius: 6px;
  background: var(--q-color-default);
}
</style>