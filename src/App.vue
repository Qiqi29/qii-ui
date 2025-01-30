<script lang="ts" setup>

const handleClick = () => {
  console.log('点击')
}

</script>

<template>
  <div>

    <p class="title">按钮</p>

    <q-space>
      <q-button type="default">默认样式</q-button>
      <q-button type="primary">主要按钮</q-button>
      <q-button type="danger">危险按钮</q-button>
      <q-button type="danger" loading>加载</q-button>
      <q-button type="primary" icon="add"></q-button>
      <q-button type="success" icon="delete"></q-button>
    </q-space>

  </div>
</template>

<style lang="scss">
body {
  padding: 30px;
}
.title {
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
}
</style>
