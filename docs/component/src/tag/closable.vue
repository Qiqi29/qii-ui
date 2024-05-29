<template>
  <q-space size="small">
    
    <q-tag 
      v-for="(item, index) in tagList" 
      :key="item.index" 
      :type="item.type"
      closable
      @close="onClose(index)"
      >
      {{ item.text }}
    </q-tag>

  </q-space>
</template>

<script lang="ts" setup>
import { ref, nextTick } from 'vue'

const tagList = ref([
  { text: 'Tag 1', type: 'default' },
  { text: 'Tag 2', type: 'primary' },
])

const onClose = (index: number) => {
  tagList.value.splice(index, 1)
}
</script>