<script setup lang="ts">
import Skeleton from 'primevue/skeleton';



</script>
<template>
    <div class="flex flex-col  rounded-lg border-slate-700 border-2 w-5/6 mb-auto ml-2 my-3 pl-3 ">
        <Skeleton shape="circle" size="3rem" class="dark:bg-slate-700  my-2" />
        <div class="my-1">
            <Skeleton width="99%" class="dark:bg-slate-700 mb-2 " />
            <Skeleton width="75%" class="dark:bg-slate-700 mb-2" />
            <Skeleton width="50%" class="dark:bg-slate-700 mb-2" />
        </div>
    </div>
</template>
<style scoped></style>