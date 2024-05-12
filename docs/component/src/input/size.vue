<template>
  <div :style="{display: 'flex','flex-direction': 'column', gap: '10px'}">
    <q-input placeholder="小的输入框..." size="small" :width="180"/>
    <q-input placeholder="中的输入框..." size="medium" :width="240"/>
    <q-input placeholder="大的输入框..." size="large" :width="280"/>
    <q-input placeholder="超宽的输入框..." size="large" long/>
  </div>
</template>