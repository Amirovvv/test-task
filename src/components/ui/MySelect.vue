<script setup>
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const dateVariants = computed(() => {
  return store.state.dateVariants
})

const changeDate = (date) => {
  store.dispatch('changeDate', date)
}

const selectedDate = computed(() => {
  return store.state.selectedDate
})

onMounted(() => { })
</script>

<template>
  <select :value="selectedDate" @change="(e) => changeDate(e.target.value)">
    <option v-for="(date, index) in dateVariants" :value="date" :key="index">
      {{ date }}
    </option>
  </select>
</template>

<style lang="scss" scoped>
select {
  border: 1px solid #c6cacc;
  border-radius: 10px;
  padding: 6px 17px 6px 12px;
  background: none;
  width: 232px;
  cursor: pointer;
}
</style>
