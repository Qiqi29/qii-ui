<template>
  <q-space :size="40" direction="center">

    <q-avatar-group size="large" shape="square">
      <q-avatar :src="avatar" />
      <q-avatar :src="avatar" />
      <q-avatar :src="avatar" />
    </q-avatar-group>

    <q-avatar-group :max="4">
      <q-avatar v-for="(item, index) in 10" :key="index" :src="avatar" />
    </q-avatar-group>

  </q-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const avatar = ref('https://img.picgo.net/2024/06/06/1232135edcdf42e5927639.png')
</script>