<script setup lang="ts">
import MarkdownIt from "markdown-it";



const props = defineProps<{
    source: string;
}>();

const markdown = new MarkdownIt();
</script>

<template>
    <div class="box-border min-w-52 max-w-3xl rounded-md pt-11" v-html="markdown.render(props.source)" />
</template>

<style scoped></style>