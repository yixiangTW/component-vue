<script lang="ts" setup>
const props = defineProps<{
  value: boolean;
  disabled?: boolean;
  loading?: boolean;
}>();
const emit = defineEmits<{
  (e: "update:value", value: boolean): void;
}>();
const toggle = () => {
  if (props.disabled) {
    return;
  }
  emit("update:value", !props.value);
};
</script>
<template>
  <button
    class="ilv-switch"
    @click="toggle"
    :class="{ checked: value, disabled }"
  >
    <div class="checkedChildren" :class="{checked: value}">
      <slot name="checkedChildren"></slot>
    </div>
    <div class="unCheckedChildren" :class="{checked: !value}">
      <slot name="unCheckedChildren"></slot>
    </div>
    <span class="scroll">
      <span v-if="loading" class="loading" :class="{checked: !value}"></span>
    </span>
  </button>
</template>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
$bColorActive: #3399FF;
$bColor: #808080;
$bColorHover: #555555;
.ilv-switch {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: right;
  cursor: pointer;
  height: $h;
  width: $h * 2;
  border: none;
  background: $bColor;
  border-radius: $h/2;
  position: relative;
  transition: all 0.25s;
  span.scroll {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: all 0.25s;
    display: flex;
    justify-content: center;
    align-items: center;
    span.loading {
      display: inline-block;
      height: 10px;
      width: 10px;
      border-radius: 10px;
      border-color: $bColorActive transparent transparent transparent;
      border-style: solid;
      border-width: 2px;

      animation: spin 1s infinite linear;
    }
    span.loading.checked {
      border-color: $bColor transparent transparent transparent;
    }
  }
  .checkedChildren {
    display: none;
    padding-left: 5px;
    color: white;
    font-size: 14px;
    transition: visibility 1s;
  }
  .checkedChildren.checked {
    display: block;
  }
  .unCheckedChildren {
    display: none;
    padding-left: 5px;
    color: white;
    font-size: 14px;
  }
  .unCheckedChildren.checked {
    display: block;
    padding-right: 5px;
  }
}
.ilv-switch:hover {
  background: $bColorHover;
}

.ilv-switch.checked {
  justify-content: flex-start;
  background: $bColorActive;
  span {
    left: calc(100% - $h2 - 2px);
  }
}
.ilv-switch.checked:hover {
  background: $bColorActive;
}
.ilv-switch.disabled {
  cursor: not-allowed;
  opacity: 0.65;
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
