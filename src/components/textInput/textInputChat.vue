<script setup lang="ts">
import InputText from 'primevue/inputtext';
import { ref } from 'vue';
const text = ref('')

</script>
<template>
    <div>
        <InputText type="text" v-model="text" />
    </div>
</template>
<style scoped></style>