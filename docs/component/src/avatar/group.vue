<template>
  <q-space size="large" direction="center">
    <q-avatar-group>
      <q-avatar :style="{ background: '#FA80A0' }"> Q </q-avatar>
      <q-avatar :style="{ background: '#7BC616' }"> ii </q-avatar>
      <q-avatar :style="{ background: '#3280FF' }"> UI </q-avatar>
      <q-avatar :style="{ background: '#6149E8' }"> 组件 </q-avatar>
      <q-avatar :style="{ background: '#FF7D00' }"> 泰裤辣 </q-avatar>
    </q-avatar-group>
    <q-avatar-group size="small" :max="3">
      <q-avatar 
        v-for="avatar in avatars" 
        :key="avatar.src" 
        :src="avatar.src" 
        :style="{ background: avatar.color }"
        >
        {{ avatar.name }}
      </q-avatar>
    </q-avatar-group>
  </q-space>
</template>

<script lang="ts" setup>
const avatars = [
  { src: '', name: 'A', color: '#FA80A0' },
  { src: '', name: 'B', color: '#7BC616' },
  { src: '', name: 'C', color: '#3280FF' },
  { src: '', name: 'D', color: '#6149E8' },
  { src: '', name: 'E', color: '#FF7D00' }
]
</script>