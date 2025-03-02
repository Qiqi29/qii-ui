<script lang="ts" setup>

const handleClick = () => {
  console.log('点击')
}

</script>

<template>
  <div>

    <p class="title">图标</p>
    <div style="color: #3080FF;">
      <q-icon name="qii" color="#FF0000"/>
      <q-icon name="emoji" spin/>
      <q-icon name="moon" :rotate="180"/>
    </div>

    <p class="title">按钮</p>
    <q-space>
      <q-button type="default">默认样式</q-button>
      <q-button type="primary" icon="moon">主要按钮</q-button>
      <q-button type="primary" loading>加载状态</q-button>
      <q-button type="primary" icon="add"></q-button>
      <q-button type="danger" icon="delete"></q-button>
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
