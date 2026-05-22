<script setup lang="ts">
 function gotoMegabet() {
    window.location.href = 'https://megabet.com'
 }
</script>
<template>
  <section id="project">
    <div class="section-title">Works</div>
    <div class="project-list">
      <div class="list-item" @click="gotoMegabet">
        <div class="logo">
          <img src="@/assets/img/logo/megabet_logo_single.webp" alt="megabet">
        </div>
        <div class="name">
          <div class="title">Megabet</div>
          <div class="sub-title">Layout, Screen Responsiveness, Reactive.</div>
        </div>
        <div class="action">></div>
      </div>
      <div class="list-item">
        <div class="logo">
          <img src="@/assets/img/logo/cgm.webp" alt="circke_graphics">
        </div>
        <div class="name">
          <div class="title">Circle Graphics</div>
          <div class="sub-title">Data Conversion, Macros.</div>
        </div>
        <div class="action"></div>
      </div>
      <div class="list-item">
        <div class="logo">
          <img src="@/assets/img/logo/asiatype.webp" alt="circke_graphics">
        </div>
        <div class="name">
          <div class="title">Asiatype</div>
          <div class="sub-title">Data Conversion, Macros.</div>
        </div>
        <div class="action"></div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.project-list {
  height: 100%;
  width: 100%;
  background: #f0f0f0;
  padding: 1.5em 1em;
  margin: 0.5em 0;
  border-radius: 0.5em;
  display: flex;
  flex-direction: column;
  gap: 0.8em;
}
.list-item {
  border-radius: 0.5em;
  padding: 0.8em;
  display: flex;
  align-items: center;
  gap: 0.8em;
  background: #ffffff;
  cursor: pointer;
  box-shadow: 0.1em 0.1em 0.2em #0000002f;
}
.list-item > .logo {
  width: 2.5em;
  height: 2.5em;
}
.list-item > .logo > img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.list-item > .name {
  font-size: 0.9em;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.list-item > .name > .sub-title {
  opacity: 0.5;
  font-size: 0.6em;
}
.list-item > .action {
  opacity: 0.5;
}
@media (orientation: landscape) {
  .project-list {
    padding: 1.5em 2.5em;
  }
  .list-item {
    padding: 0.8em 2em;
  }
}
</style>
