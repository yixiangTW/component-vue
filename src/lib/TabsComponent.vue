<script setup lang="ts">
import { ref, watch, computed, reactive, watchEffect } from "vue";
import Tab from "./TabComponent.vue";
const props = defineProps<{ selected: string }>();
const emits = defineEmits<{
  (e: "update:selected", selected: string): void;
}>();
const slots = defineSlots();
slots.default().forEach((s) => {
  if (s.type !== Tab) {
    throw new Error("Tabs 子标签必须是 Tab");
  }
});

const defaults = reactive(slots.default());
const titles = computed(() => defaults.map((d) => d.props.title));
const selectedTab = ref();
// watch(
//   () => props.selected,
//   (newValue) => {
//     selectedTab.value = slots
//       .default()
//       .filter((d) => d.props.title === newValue)[0];
//   },
//   {
//     immediate: true,
//   }
// );
watchEffect(() => {
    selectedTab.value = slots
      .default()
      .filter((d) => d.props.title === props.selected)[0];
})
const select = (t) => {
  emits("update:selected", t);
};
</script>

<template>
  <main>
    <div
      class="ilv-tabs-nav"
      v-for="(t, index) in titles"
      @click="select(t)"
      :key="index"
      :class="{ selected: selected === t }"
    >
      {{ t }}
    </div>
    <component :is="selectedTab" />
  </main>
</template>

<style scoped lang="scss">
.ilv-tabs-nav.selected {
  color: #3399ff;
}
</style>
