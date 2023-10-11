<script setup lang="ts">
import { inject } from "vue";

const menuVisible = inject("menuVisible");
</script>
<template>
  <div class="about" v-if="menuVisible">
    <h3>组件列表</h3>
    <ul>
      <li>
        <RouterLink to="/doc/switch">Switch组件</RouterLink>
      </li>
      <li><RouterLink to="/doc/button">Button组件</RouterLink></li>
      <li><RouterLink to="/doc/dialog">Dialog组件</RouterLink></li>
      <li><RouterLink to="/doc/tabs">Tabs组件</RouterLink></li>
    </ul>
  </div>
  <RouterView />
</template>

<style></style>
