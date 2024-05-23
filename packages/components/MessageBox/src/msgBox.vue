<template>
  <transition>
    <!-- 消息盒子 -->
    <div :class="msgBoxClass" ref="msgBoxRef">
      
      <!-- 左侧图标 -->
      <q-icon v-if="type === 'success'" :class="[msgBoxNS.n('icon')]" size="1.4em"><successIcon /></q-icon>
      <q-icon v-else-if="type === 'warning'" :class="[msgBoxNS.n('icon')]" size="1.4em"><warningIcon/></q-icon>
      <q-icon v-else-if="type === 'error'" :class="[msgBoxNS.n('icon')]" size="1.4em"><errorIcon/></q-icon>
      <q-icon v-else :class="[msgBoxNS.n('icon')]" size="1.4em"><infoIcon /></q-icon>
      
      <!-- 消息框 -->
      <div :class="msgClass">
        <!-- 头部内容 -->
        <div :class="[msgNS.n('header')]">
          <span :class="[msgNS.n('header-title')]">{{ title }}</span>
          <q-icon ref="closeRef" :class="[msgNS.n('header-icon')]" size="1.3em"><closeIcon/></q-icon>
        </div>
      </div>

    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useNS } from '../../../hooks/useNS'
import { msgBoxEmits, msgBoxProps } from './msgBox'
// 引入组件
import { QIcon } from '../../../index'
// 图标
import closeIcon from '../../../styles/icons/close.vue'
import infoIcon from '../../../styles/icons/info.vue'
import successIcon from '../../../styles/icons/success.vue'
import warningIcon from '../../../styles/icons/warning.vue'
import errorIcon from '../../../styles/icons/error.vue'



// 组件配置
defineOptions({ 
  name: 'q-message-box',
  inheritAttrs: false
})

// 解构属性
const props = defineProps({ ...msgBoxProps })
const emits = defineEmits({ ...msgBoxEmits })

// 组件类名
const msgBoxNS = useNS('message-box')
const msgBoxClass = computed(() => [
  msgBoxNS.nameSpace,
  msgBoxNS.n(props.type),
])

// 消息框类名
const msgNS = useNS('message')
const msgClass = computed(() => [
  msgNS.nameSpace,
])

// 绑定节点
const closeRef = ref<HTMLElement>()
const msgBoxRef = ref<HTMLElement>()

// 打开消息框
const open = () => {
  emits('open')
}

// 关闭消息框
const close = async () => {
  await new Promise(resolve => setTimeout(resolve, 500))

  const done = function () {
    emits('close')
  }
  props.beforeClose ? props.beforeClose(done) : done()
}

defineExpose({ 
  open, 
  close 
})

</script>