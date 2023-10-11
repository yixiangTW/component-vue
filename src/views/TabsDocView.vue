<script setup lang="ts">
import Tabs from "../lib/TabsComponent.vue";
import Tab from "../lib/TabComponent.vue";
import { ref } from "vue";

const selected = ref("导航1")

</script>

<template>
  <main>
    <Tabs :selected="selected" @update:selected="selected = $event">
      <Tab title="导航1">内容1</Tab>
      <Tab title="导航2">内容2</Tab>
    </Tabs>
  </main>
</template>
