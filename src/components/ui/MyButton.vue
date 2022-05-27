<script setup>
import { defineProps, ref, computed } from "vue";

const props = defineProps(['upperCase', 'fontSize', 'padding', 'borderRadius'])

const upperCase = ref(props.upperCase)
const fontSize = ref(props.fontSize)
const padding = ref(props.padding)
const borderRadius = ref(props.borderRadius)

const styles = computed(() => {
  return [
    fontSize.value ? { 'font-size': `${fontSize.value}px` } : {},
    padding.value ? { 'padding': `${padding.value}px` } : {},
    borderRadius.value ? { 'border-radius': `${borderRadius.value}px` } : {},
  ]
})
</script>

<template>
  <button class="button" :class="{ 'upper-case': upperCase }" :style="styles">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.button {
  box-shadow: 0px 4px 8px rgba(54, 123, 245, 0.16), 0px 2px 4px rgba(54, 123, 245, 0.24);
  outline: none;
  border: none;
  color: #367BF5;
  background: #FFFFFF;
  cursor: pointer;
}

.upper-case {
  text-transform: uppercase;
}
</style>