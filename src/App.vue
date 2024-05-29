<script setup lang="ts">


</script>

<template>
  <div class="layout">
    <h3>组件测试</h3>

    <q-tag>默认标签</q-tag>
    <q-tag type="warning">主要标签</q-tag>
    <q-tag type="success">成功</q-tag>
    <br>
    <q-tag bordered>默认标签</q-tag>
    <q-tag type="primary" bordered>主要标签</q-tag>
    <q-tag type="success" bordered>成功</q-tag>
    <q-space vertical>
      <q-space>
      </q-space>
      <q-space>
      </q-space>
      <q-space>
        <q-tag size="small">不同大小</q-tag>
        <q-tag type="primary" size="medium">主要标签</q-tag>
        <q-tag type="success" size="large">成功</q-tag>
      </q-space>
    </q-space>

  </div>
</template>

<style lang="scss">

* {
  box-sizing: border-box;
}
:root {
  font-size: 14px;
}
body {
  margin: 0;
}

.layout {
  padding: 40px;
}

.content {
  margin-top: 100px;
}
</style>
