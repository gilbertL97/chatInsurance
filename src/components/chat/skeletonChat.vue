<script setup lang="ts">
import Skeleton from 'primevue/skeleton';



</script>
<template>
    <div class="flex flex-col w-full ">
        <Skeleton shape="circle" size="3rem" class="dark:bg-slate-700  my-2" />
        <div class="my-1 w-2/4">
            <Skeleton class="dark:bg-slate-700 mb-2" />
            <Skeleton height="2.5rem" width="75%" class="dark:bg-slate-700 mb-2" />
            <Skeleton width="50%" class="dark:bg-slate-700 mb-2" />
        </div>
    </div>
</template>
<style scoped></style>