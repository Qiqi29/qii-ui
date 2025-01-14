<script lang="ts" setup>

const handleClick = () => {
  console.log('点击')
}

</script>

<template>
  <div>

    <p>图标组件</p>
    <div style="width: 100px; height: 32px; border: 1px solid #CCC; display: flex; align-items: center; justify-content: center;">
      <q-icon name="delete"/>
      <span>删除</span>
    </div>

    <p>头像组件</p>
    <q-space>
      <q-avatar-group size="large">
        <q-avatar src="https://img.picgo.net/2024/06/06/12324555e32e049f8305.png" />
        <q-avatar>你好</q-avatar>
        <q-avatar>你好</q-avatar>
        <q-avatar>你好</q-avatar>
      </q-avatar-group>
      <q-avatar size="large" shape="square">你好</q-avatar>
    </q-space>

  </div>
</template>

<style lang="scss">
body {
  padding: 30px;
  font-size: 14px;
}
</style>
