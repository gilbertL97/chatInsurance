<script setup lang="ts">
import MessageChat from '../chat/messageChat.vue';
import SkeletonChat from '../chat/skeletonChat.vue';
defineProps<{ loading: boolean }>()

</script>
<template>
    <div v-if="loading" class="w-2/4 mb-auto ml-2 my-3 pl-3 rounded-lg border-slate-700 border-2  ">
        <SkeletonChat class="mr-auto " /><!-- <YourActualChatComponent v-else /> -->
    </div>
    <div v-else class="w-2/4 ml-auto mb-auto ">
        <MessageChat />
    </div>
</template>
<style scoped></style>