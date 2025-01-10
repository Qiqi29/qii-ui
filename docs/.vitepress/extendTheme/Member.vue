<script setup lang="ts">

interface IMember {
  name: string,
  avatar: string,
  link: string,
}

const members: IMember[] = [
  {
    name: 'qiqi29',
    avatar: 'https://avatars.githubusercontent.com/u/112358908?s=400&u=f62082a523eb174c35c9dadf2cc505b30aed46a9&v=4',
    link: 'https://github.com/Qiqi29',
  },
]
</script>

<template>
  <div class="q-mumber">
    <div v-for="(item, index) in members" :key="index">
      <a class="q-mumber-item" :href="item.link" target="_blank">
        <img :src="item.avatar" alt="">
        <span>{{ item.name }}</span>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.q-mumber {
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
}
.q-mumber-item {
  margin-right: 24px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--vp-c-text-2);
  &:hover {
    color: var(--vp-c-brand-1);
  }
  img {
    margin-right: 10px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
  span {
    font-size: 16px;
  }
}
</style>