<template>
  <q-space size="small">
    
    <q-tag 
      v-for="(item, index) in tagList" :key="index"
      @close="onClose(index)"
      closable
      >
      {{ item }}
    </q-tag>

    <q-input 
      v-if="inputVisible" 
      v-model="inputValue"
      ref="inputRef" 
      size="small" 
      width="80px" 
      autofocus
      @blur="onBlur"
      @keyup.enter="onBlur"
    />
    
    <q-tag v-else type="default" @click="showInput" style="cursor: pointer;">
      <template #icon>
        <q-icon name="add" size="1.1em"/>
      </template>
      <span>添加</span>
    </q-tag>
  
  </q-space>
</template>

<script lang="ts" setup>
import { ref, nextTick } from 'vue'

const tagList = ref(['你不要', '过来', '啊 !!!'])
const inputValue = ref('')
const inputVisible = ref(false)
const inputRef = ref<HTMLInputElement | null>(null)

const onClose = (index: number) => {
  tagList.value.splice(index, 1)
}

const showInput = () => {
  inputVisible.value = true
}

const onBlur = () => {
  if (inputValue.value) {
    tagList.value.push(inputValue.value)
    inputValue.value = ''
  }
  inputVisible.value = false
}
</script>