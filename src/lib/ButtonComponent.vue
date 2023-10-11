<script setup lang="ts">
// 默认所有属性都绑定到根元素，inheritAttrs false可以取消绑定

import { computed } from "vue";

// v-bind=$attrs" 可以批量绑定属性
defineOptions({
  inheritAttrs: false,
});

const { theme, disabled } = defineProps<{
  disabled?: boolean;
  theme?: string;
  loading?: boolean;
}>();

const classes = computed(() => {
  return {
    [`ilv-button-theme-${theme}`]: theme,
    disabled,
  };
});



</script>
<template>
  <button v-bind="$attrs" class="ilv-button" :class="classes">
    <span v-if="loading" class="loading"></span>
    <slot />
  </button>
</template>

<style lang="scss">
$bColorActive: #3399ff;
$bColor: #808080;
.ilv-button {
  box-sizing: border-box;
  height: 32px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  border: 1px solid #d9d9d9;
  background-color: #ffffff;
  color: rgba(0, 0, 0, 0.88);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.02);

  font-size: 14px;
  padding: 4px 15px;
  border-radius: 6px;
  .loading {
    width: 10px;
    height: 10px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $bColor $bColor $bColor transparent;
    border-style: solid;
    border-width: 2px;
    animation: spin 1s infinite linear;
  }
}


.ilv-button:hover {
  color: $bColorActive;
  border-color: $bColorActive;
  .loading {
    border-color: $bColorActive $bColorActive $bColorActive transparent;
  }
}
.ilv-button-theme-link {
  color: $bColorActive;
  outline: none;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  background-color: transparent;
  border: 1px solid transparent;
  box-shadow: none;
  .loading {
    border-color: $bColorActive $bColorActive $bColorActive transparent;
  }
}
.ilv-button-theme-link:hover {
  color: #69b1ff;
  border-color: transparent;
  .loading {
    border-color: #69b1ff #69b1ff #69b1ff transparent;
  }
}
.ilv-button.disabled, .ilv-button.disabled:hover {
  cursor: not-allowed;
  opacity: 0.65;
  border: 1px solid #d9d9d9;
  color: rgba(0, 0, 0, 0.88);
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
