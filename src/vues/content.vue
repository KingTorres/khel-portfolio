<script setup lang="ts">
import intro from '@/components/content-section/intro.vue'
import skills from '@/components/content-section/skills.vue'
import works from '@/components/content-section/works.vue'
</script>
<template>
  <div class="content">
    <intro></intro>
    <works></works>
    <skills></skills>
  </div>
</template>

<style scoped>
@import '@/assets/css/content.css';
</style>
