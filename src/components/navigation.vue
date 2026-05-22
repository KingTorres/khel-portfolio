<script setup lang="ts">
// import { ref } from 'vue';
import { useNavStore } from '@/stores/nav'
import homeIcon from '@/assets/svg/home.vue'
import toolsIcon from '@/assets/svg/tools.vue'
import folderIcon from '@/assets/svg/folder.vue'
const navStore = useNavStore()
// const maxHomePage = ref<number>(2)
// const selectedNav = ref<string>('home')
function home() {
  document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
}
function about() {
  document.getElementById('skill')?.scrollIntoView({ behavior: 'smooth' })
}
function project() {
  document.getElementById('project')?.scrollIntoView({ behavior: 'smooth' })
}
</script>
<template>
  <div ref="NavElement" class="navigation">
    <button :class="{ active: navStore.currentSection === 'home' }" @click="home">
      <div class="icon"><homeIcon/></div>
      <div class="label">INTRO</div>
    </button>
    <button :class="{ active: navStore.currentSection === 'project' }" @click="project">
      <div class="icon"><folderIcon/></div>
      <div class="label">WORKS</div>
    </button>
    <button :class="{ active: navStore.currentSection === 'skill' }" @click="about">
      <div class="icon"><toolsIcon/></div>
      <div class="label">SKILLS</div>
    </button>
  </div>
</template>
<style scoped>
.navigation {
  font-size: .235em;
  position: sticky;
  top: 2em;
  width: 95%;
  margin: 2em auto;
  margin-bottom: 2.5em;
  display: flex;
  gap: 5em;
  padding: 3em;
  border-radius: 2.5em;
  box-shadow: 0.5em 0.4em .8em #00000056;
  overflow: hidden;
  z-index: 1;
  border: 0.1em solid var(--accent-color);
}
.navigation::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #ffffff 40%, transparent);
  top: 0;
  left: 0;
  z-index: -1;
  backdrop-filter: blur(1em);
  -webkit-backdrop-filter: blur(1em);
  pointer-events: none;
}
.navigation > button {
  font-size: 3.3em;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.1em;
  color: var(--accent-color);
  width: 2em;
  height: fit-content;
  cursor: pointer;
  filter: grayscale(1) contrast(1.2);
}
.navigation > button.active {
  filter: none;

    animation: scalein 0.5s ease forwards;
    -webkit-animation: scalein 0.5s ease forwards;
    -moz-animation: scalein 0.5s ease forwards;
    -o-animation: scalein 0.5s ease forwards;
    -ms-animation: scalein 0.5s ease forwards;
}
@keyframes scalein {
    0% {
        transform: scale(1.15);
    }
    100% {
        transform: scale(1);
    }
}
.navigation > button > div.icon {
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.navigation > button > div.icon > svg {
  height: 100%;
  width: 100%;
  object-fit: fill;
}
.navigation > button > div.label {
  font-size: .55em;
  font-family: "poppins-medium";
}
@media (orientation: landscape) {
  .navigation {
    flex-direction: column;
    font-size: 1em;
    border-radius: 0.5em;
    padding: 1em;
    margin: 0;
    top: 1em;
    order: 2;
    width: fit-content;
    height: fit-content;
    gap: .6em;
    box-shadow: 0.2em 0.2em .2em #0000003f;
    position: fixed;
    justify-self: end;
    margin-right: -4.5em;
  }
  .navigation > button {
    font-size: 0.6em;
  }
  .navigation::after {
    background: #ffffff;
  }
}
</style>
