<script setup lang="ts">
import Navigation from '@/components/navigation.vue'
import { useRoute } from 'vue-router';
const route = useRoute()
</script>

<template>
  <div class="app-body">
    <Navigation v-if="route.path === '/' || route.path === '/home'" />
    <RouterView/>
  </div>
</template>

<style>
@import '@/assets/css/fontface.css';
@import '@/assets/css/index.css';
</style>
