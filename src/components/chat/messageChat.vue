<script setup lang="ts">
import Avatar from 'primevue/avatar';
import type { Message } from "ollama";
import { computed } from "vue";
import MessageRender from './messageRender.vue';


const props = defineProps<{
    message: Message,
}>();


const isUser = computed(() => {
    return props.message.role === "user";
});

const avatarIcon = computed(() => {
    return props.message.role === "user" ? "pi pi-user" : "pi pi-desktop";
});

</script>
<template>
    <div class="rounded-lg border-slate-700 border-2 w-5/6 mb-auto ml-2 my-3 ">
        <div class="w-full " :class="[isUser ? 'bg-slate-600 ' : 'bg-slate-800', 'flex content-start ',]">
            <Avatar shape="circle" size="large" :icon="avatarIcon" class="m-3" />
            <MessageRender :source="props.message.content"></MessageRender>
        </div>
    </div>
</template>
<style scoped></style>