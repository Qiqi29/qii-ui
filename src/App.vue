<script lang="ts" setup>

</script>

<template>
  <div>

    <p>图标组件</p>
    <div style="width: 100px; height: 32px; border: 1px solid #CCC; display: flex; align-items: center; justify-content: center;">
      <q-icon name="delete" />
      <span>删除</span>
    </div>

    <p>头像组件</p>
    <q-space>
      <q-avatar size="medium" src="https://img.picgo.net/2024/06/06/12324555e32e049f8305.png" />
      <q-avatar shape="square" size="50">你好</q-avatar>
      <q-avatar shape="square">你好</q-avatar>
    </q-space>

  </div>
</template>

<style lang="scss">
body {
  padding: 30px;
  font-size: 14px;
}
</style>
