<script setup lang="ts">
  import { useRouter } from 'vue-router';
  const router = useRouter()

</script>
<template>
  <div class="content">
    <section>
      <div class="section-title"><div class="bullet"></div>Oops! 404</div>
      <div class="not-found-body">
        <div class="greetings">
          <div class="avatar">
            <img src="@/assets/img/avatar/avatar-question.webp" alt="avatar">
          </div>
          <div>Page Not Found</div>
        </div>
        <div class="action">
          <button @click="router.push('/')">Back Home</button>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
@import '@/assets/css/content.css';
section {
  height: unset;
  min-height: 90%;
  margin: 1em 0;
}
.not-found-body {
  width: 100%;
}
.greetings {
  width: 100%;
  height: 65vh;
  margin: 1em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.6em;
  background: #f0f0f0;
}
.greetings > .avatar {
  width: 12em;
  height: auto;
  display: flex;
}
.greetings > .avatar > img {
  width: 100%;
  height: auto;
  object-fit: contain;
}
.action {
  display: flex;
  justify-content: center;
}
.action > button {
  font-size: 1em;
  padding: 0.4em 1em;
  border-radius: .5em;
  color: #ffffff;
  background: #000000;
}
@media (orientation: landscape) {
  .action > button {
    font-size: 1em;
  }
}
</style>
