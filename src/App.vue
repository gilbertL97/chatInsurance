<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderNav from './components/nav/HeaderNav.vue';
import 'primeicons/primeicons.css'
</script>

<template>
  <div
    class="dark:bg-gray-800 bg-gray-100 text-gray-700 dark:text-gray-100 h-[100vh] flex flex-col items-center justify-center ">
    <HeaderNav />

    <RouterView class="flex-grow" />

  </div>
</template>

<style scoped></style>
