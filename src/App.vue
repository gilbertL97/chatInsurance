<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderNav from './components/icons/nav/HeaderNav.vue';
</script>

<template class="bg-white dark:bg-black">
  <header>
    <div class="wrapper">
      <HeaderNav />
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
