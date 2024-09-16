<script setup lang="ts">
import Button from 'primevue/button';
import ScrollPanel from 'primevue/scrollpanel';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import { ref } from 'vue';
const isPdfChat = ref(false);
const view = () => {
  isPdfChat.value = !isPdfChat.value
}
</script>

<template>
  <div class="w-full h-full overflow-hidden">
    <Button @click="view()" label="teste" />
    <Splitter unstyled class="mx-16 h-full">

      <SplitterPanel class="flex items-center justify-center bg-blue-300 max-w-3/4" :minSize="75">
        <ScrollPanel style="width: 100%; height: 200px">CHAT
        </ScrollPanel>

      </SplitterPanel>
      <SplitterPanel v-if="isPdfChat" class="flex items-center justify-center bg-blue-800 w-1/4" :minSize="25">
        Panel 2
      </SplitterPanel>
    </Splitter>
  </div>
</template>

<style></style>
