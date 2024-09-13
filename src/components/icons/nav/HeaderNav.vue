<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useDark, useToggle } from '@vueuse/core';
import ToggleButton from 'primevue/togglebutton';
import { ref } from 'vue';
const isDark = useDark()
const toggleDark = useToggle(isDark)
console.log(isDark.value)
const checked = ref(false)

</script>

<template>
    <nav class=" flex flex-row gap-2 items-center justify-center ">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <ToggleButton v-model="checked" onLabel="On" offLabel="Off" />
    </nav>
</template>

<style scoped></style>