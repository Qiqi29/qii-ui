<template>
    <q-space size="large" direction="center">
        <q-avatar :src="avatar" shape="square" size="small" />
        <q-avatar :src="avatar" shape="square" size="medium" />
        <q-avatar :src="avatar" shape="square" size="large" />
        <q-avatar :src="avatar" shape="square" :size="68" />
    </q-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const avatar = ref('https://img.picgo.net/2024/06/06/12324555e32e049f8305.png')
</script>