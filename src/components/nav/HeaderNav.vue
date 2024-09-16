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
    <nav class="flex flex-row gap-6 items-center justify-center text-2xl font-bold my-5">
        <RouterLink to="/" class="">Inicio </RouterLink>
        <RouterLink to="/about">Chat</RouterLink>
        <ToggleButton v-model="checked" onLabel=" " offLabel=" " onIcon="pi pi-sun" offIcon="pi pi-moon"
            @change="handleToggle" unstyled />
    </nav>


</template>