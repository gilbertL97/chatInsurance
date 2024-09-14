<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderNav from './components/nav/HeaderNav.vue';

</script>

<template class="bg-white dark:bg-black text-warmgray">
  <HeaderNav />

  <RouterView />
</template>

<style scoped></style>
