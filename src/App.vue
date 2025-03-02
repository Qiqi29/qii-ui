<script lang="ts" setup>

const handleClick = () => {
  console.log('点击了按钮')
}

</script>

<template>
  <div class="content">
    
    <p class="title">链接</p>
    <q-space size="medium">
      <q-link href="https://www.baidu.com" line>百度官网</q-link>
      <q-link href="https://www.baidu.com" line>这是链接</q-link>
    </q-space>
  
    <p class="title">图标</p>
    <q-space size="mini" direction="end">
      <q-icon name="qii" color="#3080FF"/>
      <q-icon name="emoji" spin/>
      <q-icon name="moon" :rotate="180"/>
      <q-button type="primary" size="large">主要按钮</q-button>
    </q-space>
  
    <p class="title">按钮</p>
    <q-space size="small">
      <q-button type="default">默认样式</q-button>
      <q-button type="primary" icon="moon" @click="handleClick">主要按钮</q-button>
      <q-button type="primary" loading>加载状态</q-button>
      <q-button type="primary" icon="add"></q-button>
      <q-button type="danger" icon="delete"></q-button>
    </q-space>
    
    <p class="title">按钮</p>
    <q-space size="small" vertical>
      <q-button type="default">默认样式</q-button>
      <q-button type="primary" icon="moon" @click="handleClick">主要按钮</q-button>
      <q-button type="primary" loading>加载状态</q-button>
      <q-button type="primary" icon="add"></q-button>
      <q-button type="danger" icon="delete"></q-button>
    </q-space>


  </div>
</template>

<style lang="scss">
body {
  padding: 0px;
  margin: 0px;
  font-size: 16px;
}
.content {
  padding: 20px;
}
.title {
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
}
</style>
