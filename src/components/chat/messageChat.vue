<script setup lang="ts">
import Avatar from 'primevue/avatar';
import type { Message } from "ollama";
import { computed } from "vue";
// import MarkdownRenderer from "./MarkdownRenderer.vue";
import SkeletonChat from './skeletonChat.vue';
import MessageRender from './messageRender.vue';

interface Props {

}

const props = defineProps<{
    text: string,
    isQuestion: boolean,
    message: Message,
    isLoading: boolean,
}>();

const messageClass = computed(() => {
    return props.message.role === "user"
        ? "message userMessage"
        : "message agentMessage";
});

const avatarClass = computed(() => {
    return props.message.role === "user" ? "userAvatar" : "agentAvatar";
});

const avatarIconClass = computed(() => {
    return props.message.role === "user" ? "pi pi-user" : "pi pi-desktop";
});

</script>
<template>
    <div v-if="isLoading" class="mr-auto">
        <SkeletonChat />
    </div>
    <div v-else class="flex flex-col w-full ">
        <Avatar shape="circle" size="3rem" class="dark:bg-slate-700  my-2" icon="pi pi-user" />
        <div class="my-1 w-2/4">
            <MessageRender :source="props.message.content"></MessageRender>
        </div>
    </div>
</template>
<style scoped></style>