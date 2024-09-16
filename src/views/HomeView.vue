<script setup lang="ts">
import Button from 'primevue/button';
import Message from 'primevue/message';


</script>

<template>
  <div class=" px-6 py-20 md:px-12 lg:px-20">
    <div class=" text-center">
      <div class="text-2xl font-bold mb-4">&nbsp;POWERED BY IA</div>
      <div class="font-bold text-5xl mb-4">ChatIA Esicuba</div>
      <div class=" text-2xl mb-1">Chat bot de inteligencia Artificial </div>
      <div class=" text-s mb-12">
        <Message severity="warn" closable> Actualmente en desarrollo </Message>
      </div>

      <Button severity="help">
        <RouterLink to="/about">Comenzar →</RouterLink>
      </Button>
    </div>
  </div>
</template>
