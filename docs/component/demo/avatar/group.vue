<template>
    <q-space :size="40" direction="center">

        <q-avatar-group size="large" :max="3">
            <q-avatar v-for="(item, index) in 20" :key="index" :src="avatar" />
        </q-avatar-group>

        <q-avatar-group size="medium" shape="round">
            <q-avatar :src="avatar" />
            <q-avatar :src="avatar" />
            <q-avatar :src="avatar" />
            <q-avatar :src="avatar" />
            <q-avatar :src="avatar" />
        </q-avatar-group>

    </q-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const avatar = ref('https://img.picgo.net/2024/06/06/1232135edcdf42e5927639.png')
</script>