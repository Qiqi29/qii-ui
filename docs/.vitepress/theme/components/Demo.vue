<script lang="ts" setup>
import { ref, computed } from 'vue'

const props = withDefaults(
  defineProps<{
    code: string
    highlightedCode: string
    lang?: string
    defaultExpand?: boolean
  }>(),
  {
    lang: 'vue',
    defaultExpand: false,
  }
)

// 解码原始代码
const decodedCode = computed(() => 
  decodeURIComponent(props.code)
)
// 解码高亮代码
const decodedHighlightedCode = computed(() =>
  decodeURIComponent(props.highlightedCode),
)

// 复制代码
const showCopyTips = ref(false)
const copyCode = () => {
  navigator.clipboard.writeText(decodedCode.value)
  showCopyTips.value = true
  setTimeout(() => (showCopyTips.value = false), 2500)
}

// 代码展开状态
const expand = ref(props.defaultExpand)
const toggleExpand = () => (expand.value = !expand.value)

</script>

<template>
  <ClientOnly>
    <div v-bind="$attrs" class="qii-demo-block">
      
      <!-- 组件预览 -->
      <div class="demo-preview">
        <slot></slot>
      </div>

      <!-- 操作按钮 -->
      <div class="demo-actions">
        <div v-if="showCopyTips" class="copyTips">已复制代码</div>
        <button v-if="!showCopyTips" @click="copyCode">
          <svg xmlns='http://www.w3.org/2000/svg' width='1.3em' height='1.3em' viewBox='0 0 24 24'>
            <path d='M9 2a2 2 0 0 0-2 2v2h2V4h11v11h-2v2h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM4 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm0 2h11v11H4z'/>
          </svg>
        </button>
        <button @click="toggleExpand">
          <svg xmlns='http://www.w3.org/2000/svg' width='1.4em' height='1.4em' viewBox='0 0 24 24'>
            <path d='M14.486 3.143a1 1 0 0 1 .692 1.233l-4.43 15.788a1 1 0 0 1-1.926-.54l4.43-15.788a1 1 0 0 1 1.234-.693M7.207 7.05a1 1 0 0 1 0 1.414L3.672 12l3.535 3.535a1 1 0 1 1-1.414 1.415L1.55 12.707a1 1 0 0 1 0-1.414L5.793 7.05a1 1 0 0 1 1.414 0m9.586 1.414a1 1 0 1 1 1.414-1.414l4.243 4.243a1 1 0 0 1 0 1.414l-4.243 4.243a1 1 0 0 1-1.414-1.415L20.328 12z'/>
          </svg>
        </button>
      </div>

      <!-- 代码展示 -->
      <div 
        :class="`language-${lang} demo-code`" 
        v-show="expand" 
        v-html="decodedHighlightedCode">
      </div>

    </div>
  </ClientOnly>
</template>

<style lang="scss" scoped>
.qii-demo-block {
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--vp-c-gutter);
  .demo-preview {
    padding: 30px;
  }
  .demo-code {
    margin: 0;
    border-radius: 0px;
    border-top: 1px solid var(--vp-c-gutter);
  }
  .demo-actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 10px 0 12px;
    height: 40px;
    border-top: 1px dashed var(--vp-c-gutter);
    color: var(--vp-c-text-3);
    fill: var(--vp-c-text-3);
    > button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      border-radius: 5px;
      user-select: none;
      transition: all 0.15s;
      &:hover {
        background: var(--vp-c-gutter);
      }
    }
    .copyTips {
      font-size: 13px;
      user-select: none;
    }
    > *:not(:last-child) {
      margin-right: 4px;
    }
  }
}
</style>