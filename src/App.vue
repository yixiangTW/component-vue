<script setup lang="ts">
import { provide, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import router from "./router";
const menuVisible = ref(false);
provide("menuVisible", menuVisible);
router.afterEach(() => {
  changeVisible(false);
});

function changeVisible(v = !menuVisible.value) {
  menuVisible.value = v;
}
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">首页</RouterLink>
      <RouterLink to="/doc">文档</RouterLink>
    </nav>
  </header>
  <button @click="changeVisible()">菜单</button>
  <RouterView />
</template>

<style scoped>

</style>
