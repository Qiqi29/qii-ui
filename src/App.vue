<script lang="ts" setup>
import { ref } from "vue"


const handleClick = () => {
  console.log('点击了按钮')
}

const switchValue = ref(false)

</script>

<template>
  <div class="content">
    
    <p class="title">链接</p>
    <span>这里用来测试组件</span>
    <q-link href="https://www.baidu.com" line>这是链接</q-link>
    <span>哈哈哈</span>
  
    <p class="title">图标</p>
    <q-space size="mini" direction="end">
      <q-icon name="qii" color="#3080FF"/>
      <q-icon name="emoji" spin/>
      <q-icon name="moon" :rotate="180"/>
    </q-space>
  
    <p class="title">按钮</p>
    <q-space size="small">
      <q-button type="default">默认样式</q-button>
      <q-button type="primary" icon="moon" @click="handleClick">主要按钮</q-button>
      <q-button type="primary" loading>加载状态</q-button>
      <q-button type="primary" icon="add"></q-button>
      <q-button type="danger" icon="delete"></q-button>
    </q-space>
    
    <p class="title">开关</p>
    <q-space size="medium">
      <q-switch v-model="switchValue" />
      <q-switch v-model="switchValue" />
      <q-switch v-model="switchValue" shape="square"/>
    </q-space>
    
    <p class="title">分割线</p>
    <q-divider title-position="left">分割线标题</q-divider>

  </div>
</template>

<style lang="scss">
body {
  padding: 0px;
  margin: 0px;
  font-size: 14px;
}
.content {
  padding: 20px;
}
.title {
  margin-top: 42px;
  font-size: 18px;
  font-weight: bold;
}
</style>
