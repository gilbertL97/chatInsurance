<script setup lang="ts">
import Textarea from 'primevue/textarea';
import MessageChat from '../chat/messageChat.vue';

defineProps<{ loading: boolean }>()

</script>
<template>
    <div class="w-2/4 mb-auto ml-2 my-3 pl-3 rounded-lg border-slate-700 border-2">
        <MessageChat :text="'testesv'" :is-question="true" :message="{ role: 'user', content: 'test' }"
            :is-loading="loading" />
    </div>
    <div>

        <Textarea v-model="value" rows="2" cols="30" />
    </div>
</template>
<style scoped></style>