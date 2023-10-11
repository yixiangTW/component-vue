<script setup lang="ts">
import Button from "../lib/ButtonComponent.vue";
const onClick = () => {
  alert("hi");
};
</script>

<template>
  <main>
    <div style="height: 30px; margin-top: 10px">
      <Button @click="onClick" theme="link" :loading="true">Button</Button>
    </div>
    <div style="height: 30px; margin-top: 10px">
      <Button @click="onClick" :loading="false">Button</Button>
    </div>
    <div style="height: 30px; margin-top: 10px">
      <Button @click="onClick" :loading="true">Button</Button>
    </div>

    <div style="height: 30px; margin-top: 10px">
      <Button @click="onClick" :loading="false" :disabled="true">Button</Button>
    </div>
  </main>
</template>
