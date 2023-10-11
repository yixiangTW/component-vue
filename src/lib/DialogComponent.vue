<script setup lang="ts">
import Button from "./ButtonComponent.vue";
const props = defineProps<{
  visible: boolean;
  ok: () => void;
  cancel: () => void;
  loading: boolean;
}>();

const emit = defineEmits<{
  (e: "update:visible", visible: boolean): void;
}>();

const close = () => {
  emit("update:visible", false);
};
//Teleport新组件可以把内容移动到指定地点
</script>

<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="ilv-dialog-overlay"></div>
      <div class="ilv-dialog-wrapper">
        <div class="dialog">
          <header>
            <slot name="title"></slot>
            <span class="close" @click="close">x</span>
          </header>
          <main><slot name="content"></slot></main>
          <footer>
            <Button @click="ok" :loading="loading">OK</Button>
            <Button @click="cancel" theme="link">Cancle</Button>
          </footer>
        </div>
      </div></Teleport
    >
  </template>
</template>

<style lang="scss">
.ilv-dialog-overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.45);
}

.ilv-dialog-wrapper {
  position: fixed;
  inset: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
  .dialog {
    width: 520px;
    margin: 0 auto;
    padding: 0;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    position: relative;
    top: 100px;
    max-width: calc(100vw - 32px);
    padding-bottom: 24px;
    background: white;
  }
}
</style>
