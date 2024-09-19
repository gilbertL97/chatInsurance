<script setup lang="ts">
import { ref } from 'vue';
import Button from 'primevue/button';
import ScrollPanel from 'primevue/scrollpanel';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import ContainerChat from '@/components/panel/ContainerChat.vue';
const isPdfChat = ref(false);
const view = () => {
  isPdfChat.value = !isPdfChat.value
}
</script>

<template>
  <div class="w-full h-full overflow-hidden">
    <Button @click="view()" label="teste" />
    <Splitter unstyled class="mx-32 h-[80%] mb-8 text-slate-950">

      <SplitterPanel class="flex flex-col dark:bg-gray-900  bg-slate-300 max-w-3/5 rounded-md min-h-full" :minSize="75">
        <ContainerChat :isLoading="isPdfChat" />
      </SplitterPanel>
      <SplitterPanel v-if="isPdfChat" class="flex flex-col items-center justify-center bg-teal-200 w-2/5 rounded-md"
        :minSize="25">
        Panel de Previsualizacion de un pdf
      </SplitterPanel>
    </Splitter>
  </div>
</template>

<style></style>
