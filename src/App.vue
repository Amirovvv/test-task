<script setup>
import { onMounted } from 'vue';
import { useStore } from 'vuex';
import {
  Navbar,
  Menu
} from './components'
import { data } from './data/db.json'

const store = useStore()

const getData = (data) => {
  store.dispatch('getData', data)
}

onMounted(() => {
  getData(data)
})
</script>

<template>
  <Navbar />
  <Menu />
  <router-view />
</template>
