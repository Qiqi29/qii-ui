<template>
  <q-space vertical direction="start">
    <q-space>
      <q-button type="primary" icon="star">左侧</q-button>
      <q-button type="primary" right-icon="star">右侧</q-button>
      <q-button type="primary" icon="star" right-icon="star">全都要</q-button>
    </q-space>
    <q-space>
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
  </q-space>
</template>