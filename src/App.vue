<script lang="ts" setup>

const handleClick = () => {
  console.log('点击')
}

</script>

<template>
  <div>

    <h2>按钮组件</h2>
    <q-space vertical>
      <q-space>
        <q-button type="default">默认按钮</q-button>
        <q-button type="primary" loading>确定</q-button>
        <q-button type="success">成功</q-button>
        <q-button type="warning">警告</q-button>
        <q-button type="danger">危险</q-button>
      </q-space>
      <q-space>
        <q-button type="default" plain>二级按钮</q-button>
        <q-button type="primary" plain>确定</q-button>
        <q-button type="success" plain>成功</q-button>
        <q-button type="warning" plain>警告</q-button>
        <q-button type="danger" plain>危险</q-button>
      </q-space>
      <q-space>
        <q-button type="default" text bg>文字按钮</q-button>
        <q-button type="primary" text bg>确定</q-button>
        <q-button type="success" text>成功</q-button>
        <q-button type="warning" text>警告</q-button>
        <q-button type="danger" text>危险</q-button>
      </q-space>
    </q-space>

  </div>
</template>

<style lang="scss">
body {
  padding: 30px;
  font-size: 14px;
}
</style>
