<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useDark, useToggle } from '@vueuse/core';
import ToggleButton from 'primevue/togglebutton';
import { ref, watch } from 'vue';

const isDark = useDark()
const toggleDark = useToggle(isDark)
const checked = ref(isDark.value)

watch(isDark, (newValue) => {
    checked.value = newValue
})

const handleToggle = () => {
    toggleDark()
    checked.value = isDark.value
}
</script>

<template>
    <nav class="flex flex-row gap-2 items-center justify-center dark:text-fuchsia">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <ToggleButton v-model="checked" onLabel="On" offLabel="Off" @change="handleToggle" />
    </nav>
</template>