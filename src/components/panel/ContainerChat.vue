<script setup lang="ts">

import MessageChat from '../chat/messageChat.vue';
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import { useMessageChat } from '@/composable/useMessageChat';
import SkeletonChat from '../chat/skeletonChat.vue';
import Textarea from 'primevue/textarea';
import SplitButton from 'primevue/splitbutton';
import ScrollPanel from 'primevue/scrollpanel';


const { messages, currentInput, currentMessageOutput, submitChat, loading } = useMessageChat()
defineProps<{ isLoading: boolean }>()
</script>
<template>
    <ScrollPanel class="h-full w-full flex-grow-1 border-slate-700 border-2 text-gray-950 dark:text-gray-300 ">
        <div class=" " v-for=" message in messages " :key="message.content">
            <MessageChat :message="message" />
        </div>
        <div v-if="currentMessageOutput">
            <MessageChat :message="{ role: 'agent', content: currentMessageOutput }" />
        </div>
        <div v-else-if="loading">
            <SkeletonChat />
        </div>
    </ScrollPanel>
    <div class="flex justify-center items-center my-3 gap-1">
        <!-- <InputText v-model="question" type="text" size="large" placeholder="Large" /> -->
        <Textarea v-model="currentInput" class="resize-none w-9/12" rows="1" @keyup.enter="submitChat" />
        <SplitButton label="Enviar" :disabled="isLoading ? true : undefined" @click="submitChat" />
    </div>
</template>
<style scoped></style>