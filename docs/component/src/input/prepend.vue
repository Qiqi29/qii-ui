<template>
  <div :style="{display: 'flex','flex-direction': 'column', gap: '10px'}">
    <q-input placeholder="搜索">
      <template #prepend>
        <q-icon name="search" size="1.2em"/>
      </template>
    </q-input>
    <q-input placeholder="搜索">
      <template #append>
        <q-icon name="search" size="1.2em"/>
      </template>
    </q-input>
  </div>
</template>