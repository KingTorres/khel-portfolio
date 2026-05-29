<script setup lang="ts">
import intro from '@/components/content-section/intro.vue'
import skills from '@/components/content-section/skills.vue'
import works from '@/components/content-section/works.vue'
import references from '@/components/content-section/references.vue'
</script>
<template>
  <div class="content">
    <intro></intro>
    <works></works>
    <skills></skills>
    <references></references>
  </div>
</template>

<style scoped>
@import '@/assets/css/content.css';
</style>
