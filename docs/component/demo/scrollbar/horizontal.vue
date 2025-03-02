<template>
  <q-scrollbar height="fit-content">
    <div class="content">
      <div class="item" v-for="i in 10" :key="i">
        {{ i }}
      </div>
    </div>
  </q-scrollbar>
</template>

<style scoped>
.content {
  display: flex;
  padding: 12px;
  width: fit-content;
  background: #00002008;
}
.item {
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  line-height: 80px;
  border-radius: 10px;
  background: var(--q-color-primary-l-a);
  color: var(--q-color-primary);
  font-size: 20px;
  text-align: center;
}
.item:not(:last-child) {
  margin-right: 12px;
}
</style>