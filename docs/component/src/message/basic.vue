<template>
  <q-button @click="onClick">发消息</q-button>
  <br><br>
  <q-message-box type="info" title="这是一个默认消息"/>
  <br>
  <q-message-box type="success" title="这是一个成功消息"/>
  <br>
  <q-message-box type="warning" title="这是一个警告消息"/>
  <br>
  <q-message-box type="error" title="这是一个错误消息"/>
</template>

<script setup lang="ts">
import { ref } from 'vue'


const onClick = () => {
  console.log('click')
}
</script>