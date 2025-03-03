<template>
  <q-scrollbar height="300px">
    <div class="content">
      <div class="item" v-for="i in 10" :key="i">
        {{ i }}
      </div>
    </div>
  </q-scrollbar>
</template>

<style scoped>
.content {
  width: 100%;
  padding: 0 12px;
}
.item {
  width: 100%;
  height: 80px;
  line-height: 80px;
  border-radius: 10px;
  background: var(--q-color-primary-l);
  color: var(--q-color-primary);
  font-size: 20px;
  text-align: center;
}
.item:not(:last-child) {
  margin-bottom: 12px;
}
</style>