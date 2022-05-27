<script setup>
import { onMounted } from 'vue';
import { useStore } from 'vuex';
import {
  Navbar,
  Menu
} from './components'
const store = useStore()

const getData = () => {
  store.dispatch('getData')
}

onMounted(() => {
  getData()
})
</script>

<template>
  <Navbar />
  <Menu />
  <router-view />
</template>
