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
    <Splitter unstyled class="mx-32 h-[90%] mb-8 overflow-hidden text-slate-950">

      <SplitterPanel class="flex items-center justify-center dark:bg-gray-900 bg-slate-300 max-w-3/5 rounded-md"
        :minSize="75">
        <ScrollPanel class="h-full w-full relative">
          <ContainerChat :loading="isPdfChat" />
        </ScrollPanel>
      </SplitterPanel>
      <SplitterPanel v-if="isPdfChat" class="flex items-center justify-center bg-blue-800 w-2/5 rounded-md"
        :minSize="25">
        Panel 2
      </SplitterPanel>
    </Splitter>
  </div>
</template>

<style></style>
