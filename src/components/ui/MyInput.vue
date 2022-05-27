<script setup>
import { defineProps, defineEmits, ref, computed } from "vue";

const props = defineProps(['width', 'placeholder', 'modelValue'])
const emit = defineEmits(['update:modelValue'])

const width = ref(props.width)
const placeholder = ref(props.placeholder)
const modelValue = ref(props.modelValue)

const updateInput = function (event) {
  emit('update:modelValue', event.target.value)
}

const styles = computed(() => {
  return [
    width.value ? { 'width': `${width.value}px` } : {},
  ]
})
</script>

<template>
  <div>
    <input :value="modelValue" @input="updateInput" :placeholder="placeholder" :style="styles" type="text">
  </div>
</template>

<style lang="scss" scoped>
input {
  border: 1px solid #C6CACC;
  border-radius: 10px;
  padding: 6px 12px;
  background: none;

  &::placeholder {
    color: black;
  }
}
</style>