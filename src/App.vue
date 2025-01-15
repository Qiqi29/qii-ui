<script lang="ts" setup>

const handleClick = () => {
  console.log('点击')
}

</script>

<template>
  <div>

    <h3>链接组件</h3>

    
    <q-badge :count="20">
      <q-button type="primary">点击打开</q-button>
    </q-badge>

    <br><br>
    <q-badge :count="2" dot/>

  </div>
</template>

<style lang="scss">
body {
  padding: 30px;
}
</style>
