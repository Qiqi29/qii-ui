<template>
  <q-space :size="40" direction="center">
    <q-space size="large">
      <q-badge :count="1" type="primary"/>
      <q-badge :count="2" type="success"/>
      <q-badge :count="3" type="warning"/>
      <q-badge :count="3" type="danger"/>
    </q-space>
    <q-space size="large">
      <q-badge :count="1" type="primary" dot/>
      <q-badge :count="2" type="success" dot/>
      <q-badge :count="3" type="warning" dot/>
      <q-badge :count="3" type="danger" dot/>
    </q-space>
  </q-space>
</template>