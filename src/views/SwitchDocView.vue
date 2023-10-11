<script lang="ts" setup>
import { ref } from "vue";
import Switch from "../lib/SwitchComponent.vue";

const isCheck = ref(true)
const isCheck1 = ref(true);
const isCheck2 = ref(true)
const isCheck3 = ref(false)
const isDisabled3 = ref(true);


</script>



<template>
  <div style="height: 30px; margin-top: 10px">
    <Switch
      :disabled="isDisabled"
      :value="isCheck1"
      @update:value="isCheck1 = $event"
    >

    </Switch>
  </div>
  <div style="height: 30px; margin-top: 10px">
    <Switch
      :disabled="isDisabled"
      :value="isCheck2"
      @update:value="isCheck2 = $event"
    >
      <template v-slot:checkedChildren>on</template>
      <template v-slot:unCheckedChildren>off</template>
    </Switch>
  </div>

  <div style="height: 30px; margin-top: 10px">
    <Switch
      :disabled="isDisabled3"
      :value="isCheck3"
      @update:value="isCheck3 = $event"
    >

    </Switch>
  </div>

  <div style="height: 30px; margin-top: 10px">
    <Switch
      :disabled="true"
      :value="true"
    >

    </Switch>
  </div>

  <div style="height: 30px; margin-top: 10px">
    <Switch
      :value="isCheck"
      :loading="true"
      @update:value="isCheck = $event"
    >

    </Switch>
  </div>

    <!-- <SwitchView v-model:value="isCheck"/> -->
    <!-- v-model 事件名: update:属性名 -->

</template>
