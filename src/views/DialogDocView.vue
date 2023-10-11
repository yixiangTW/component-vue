<script setup lang="ts">
import Dialog from "../lib/DialogComponent.vue";
import Button from "../lib/ButtonComponent.vue";
import {openDialog} from '../lib/openDialog'
import { ref } from "vue";

const visible = ref(false);
const title = ref("标题");
const loading = ref(false);

const handleCancel = () => {
  visible.value = false;
};

const handleOK = () => {
  loading.value = true;
  setTimeout(() => {
    visible.value = false;
    loading.value = false;
  }, 300);
};
const showDialog = () => {
  openDialog({})
};
</script>

<template>
  <Dialog
    :loading="loading"
    :ok="handleOK"
    :cancel="handleCancel"
    :visible="visible"
    @update:visible="visible = $event"
    :title="title"
  >
    <template v-slot:title> <h1>标题</h1> </template>
    <template v-slot:content> 内容在这里 </template>
  </Dialog>
  <Button @click="visible = !visible">Dialog</Button>
  <Button @click="showDialog">调用函数显示</Button>
</template>
