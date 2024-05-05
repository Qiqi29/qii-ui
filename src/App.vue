<script setup lang="ts">
import { ref } from 'vue'

const loader = ref(false)
const setLoader = () => {
  loader.value = true
  setTimeout(() => {
    loader.value = false
  }, 20000)
}
</script>

<template>
  <div>
    <h2>你好世界</h2>

    <q-space vertical>
      <q-space>
        <q-button type="default">默认按钮</q-button>
        <q-button type="primary">确定</q-button>
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
        <q-button type="default" text>文字按钮</q-button>
        <q-button type="primary" text>确定</q-button>
        <q-button type="success" text>成功</q-button>
        <q-button type="warning" text>警告</q-button>
        <q-button type="danger" text>危险</q-button>
      </q-space>
    </q-space><br>

    <q-space>
      <q-button type="primary" loading>矩形按钮</q-button>
      <q-button type="primary" shape="round">圆角按钮</q-button>
      <q-button type="primary" icon="add"></q-button>
      <q-button type="primary" shape="circle" icon="add"></q-button>
    </q-space><br>

    <q-space direction="center">
      <q-button type="primary" size="small">小的</q-button>
      <q-button type="primary" size="medium">中的</q-button>
      <q-button type="primary" size="large">大的</q-button>
      <q-button type="primary" :size="46" disabled>自定义</q-button>
    </q-space><br>

    <q-space vertical>
      <q-space>
        <q-button type="default" icon="close">取消</q-button>
        <q-button type="primary" icon="check">确定</q-button>
        <q-button type="success" icon="download">下载</q-button>
        <q-button type="warning" icon="notification"/>
        <q-button type="danger" icon="delete"/>
      </q-space>
      <q-space>
        <q-button type="default" icon="close" shape="circle"/>
        <q-button type="primary" icon="check" shape="circle"/>
        <q-button type="success" icon="download" shape="circle"/>
        <q-button type="warning" icon="notification" shape="circle"/>
        <q-button type="danger" icon="delete" shape="circle"/>
      </q-space>
    </q-space><br>

    <q-space>
      <q-button type="primary" loading>停不下来</q-button>
      <q-button type="primary" :loading="loader" icon="add" @click="setLoader">点我</q-button>
      <q-button type="default" :loading="loader" @click="setLoader">点我</q-button>
    </q-space>


  </div>
</template>

<style>
:root {
  font-size: 14px;
}
</style>
