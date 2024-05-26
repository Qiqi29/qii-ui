<script setup lang="ts">


</script>

<template>
  <div class="layout">
    <h3>组件测试</h3>
    
    <q-space>
      <q-button v-for="item in 3" :key="item" type="primary" icon="add">你好</q-button>
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
