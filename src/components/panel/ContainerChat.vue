<script setup lang="ts">

import MessageChat from '../chat/messageChat.vue';
import { ref } from 'vue';
import InputText from 'primevue/inputtext';

defineProps<{ loading: boolean }>()
const question = ref('');
</script>
<template>
    <ScrollPanel class="h-full w-full flex-grow-1 border-slate-700 border-2 ">
        <div class="w-3/5 mb-auto ml-2 my-3 pl-3 rounded-lg border-slate-700 border-2">
            <MessageChat :text="'testesv'" :is-question="true" :message="{ role: 'user', content: 'test' }"
                :is-loading="loading" />
        </div>
    </ScrollPanel>
    <div class="mt-auto mx-auto">
        <InputText v-model="question" type="text" size="large" placeholder="Large" />
        <SplitButton label="Save" />
    </div>

</template>
<style scoped></style>