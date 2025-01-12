<script lang="ts" setup>

</script>

<template>
    <div>
    
        <p>图标组件</p>
        <q-icon name="emoji" spin/>
        <q-icon name="box" />
        <q-icon name="delete" />

        <p>头像组件</p>
        <q-space>
            <q-avatar size="large" src="https://img.picgo.net/2024/06/06/12324555e32e049f8305.png" />
            <q-avatar shape="square" size="large">你好</q-avatar>
        </q-space>

    </div>
</template>

<style lang="scss">
body {
    padding: 30px;
    font-size: 14px;
}
</style>
