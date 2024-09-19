<script setup lang="ts">
import SplitterPanel from 'primevue/splitterpanel';

defineProps<{ isPdfChat: boolean }>()
</script>
<template>
    <SplitterPanel v-if="isPdfChat" class="flex items-center justify-center bg-blue-800 w-1/4" :minSize="25">
        Panel de Previsualizacion de un pdf
    </SplitterPanel>
</template>
<style scoped></style>