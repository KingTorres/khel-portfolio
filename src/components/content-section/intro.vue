<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { useEventListener } from '@vueuse/core'
  import { useNavStore } from '@/stores/nav'
  import clipboard from '@/assets/svg/clipboard.vue'
  import download from '@/assets/svg/download.vue'
  import { useOrientation } from "@/utils/orientation"
  import * as Details from "@/constants/detail.json"

  const UTILS_ORIENTATION = useOrientation()
  const IS_LANDSCAPE = UTILS_ORIENTATION.IS_LANDSCAPE

  const body = ref<HTMLElement | null>(null)
  const navStore = useNavStore()
  onMounted(() => {
    body.value = document.body
  })

  useEventListener(body, 'scroll', () => {
    const sections = document.querySelectorAll('section')

    let current = 'home'

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect()

      // section is in viewport (top half)
      if (rect.top <= window.innerHeight / 3.5) {
        current = section.id
      }
    })
    navStore.currentSection = current
  })
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('torres.michael36@gmail.com')
      alert('Email Copied')
    } catch (err) {
      alert('Failed to copy:'+ err)
    }
  }
</script>
<template>
  <section id="home">
    <div class="section-title">Web Designer</div>
    <div class="intro-body">
      <div>
        <div class="greetings">I'm Michael Torres</div>
        <div class="description">
          <div>Layout and Graphics</div>
          <div>Responsive Design</div>
          <div v-if="IS_LANDSCAPE">Mobile, Desktop, etc.</div>
          <div v-if="IS_LANDSCAPE">Reactive Layout (vue)</div>
        </div>
        <div class="intro-button">
          <button><span>CV</span><download/></button>
          <button @click="copyEmail"><span>Email</span><clipboard/></button>
        </div>
      </div>
      <div class="photo">
        <div>
          <img src="@/assets/img/avatar/avatar-smile.webp" alt="avatar">
        </div>
      </div>
    </div>
    <div class="about-body">
      <div class="item" v-for="(item, index) in Details.about" :key="index">
        <div class="label">{{ Object.keys(item)[0] }}:</div>
        <div class="data">{{ Object.values(item)[0] }}</div>
      </div>
    </div>
    <div class="section-title">Education</div>
    <div class="education-body">
      <div class="item">
        <div class="logo">
          <img src="@/assets/img/logo/udemy.webp" alt="ubnhs">
        </div>
        <div class="name">
          <div>CSS, Bootstrap, Javascript</div>
          <div>ude.my/UC-a1c48038-82a7-4e66-aca2-9191215111a0</div>
        </div>
      </div>
      <div class="item">
        <div class="logo">
          <img src="@/assets/img/logo/tcu.webp" alt="logo">
        </div>
        <div class="name">
          <div>Taguig City University</div>
          <div>Bachelor in Computer Science</div>
        </div>
      </div>
      <div class="item">
        <div class="logo">
          <img src="@/assets/img/logo/ubnhs.webp" alt="ubnhs">
        </div>
        <div class="name">
          <div>Upper Bicutan National Highschool</div>
          <div>2008&ndash;2012</div>
        </div>
      </div>
      <div class="item">
        <div class="logo">
          <img src="@/assets/img/logo/ubes.webp" alt="ubnhs">
        </div>
        <div class="name">
          <div>Upper Bicutan Elementary School</div>
          <div>2002&ndash;2008</div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>

.intro-body {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr max-content;
  gap: 1em;
  align-items: center;
}
.intro-body .greetings {
  font-size: 1.1em;
  font-family: "poppins-medium";
  width: 100%;
  margin: 0.5em 0;
  margin-bottom: 0.2em;
}
.intro-body .description {
  width: 100%;
  font-size: .7em;
  padding: 0.5em 1.2em;
  border-radius: 0.6em;
  background: #f0f0f0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5em;
}
.intro-button {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5em;
  width: 100%;
  margin: .5em 0;
  font-size: .9em;
}
.intro-button button {
  display: flex;
  font-size: inherit;
  gap: .5em;
  padding: .4em 0;
  border-radius: 0.3em;
  background: #ffffff;
  color: var(--accent-color);
  box-shadow: 0em 0.1em .2em #00000056;
  justify-content: center;
}
.intro-button button svg {
  height: 1em;
  width: auto;
}
.intro-body .photo {
  width: 28vw;
  height: 28vw;
  aspect-ratio: 1/1;
  border: 0.1em solid #dfdfdf;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  padding: 6%;
  background: #ffffff;
}
.intro-body .photo > div {
  border-radius: 50%;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: #f0f0f0;
}
.intro-body .photo > div > img {
  width: 100%;
  height: 100%;
  transform: scale(1.05);
}
.about-body {
  background: #f0f0f0;
  margin: 1.2em 0;
  padding: 1.5em 1em;
  width: 100%;
  font-size: 0.8em;
  border-radius: 0.5em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}
.about-body > .item {
  display: flex;
}
.about-body > .item > .label {
  text-transform: capitalize;
  min-width: 6.5em;
  opacity: 0.7;
}
.about-body > .item > .data {
  overflow-wrap: break-word;
  word-break: break-word;
  width: 100%;
}
.education-body {
  width: 100%;
  font-size: 0.8em;
  padding: 0.8em;
  display: flex;
  flex-direction: column;
  gap: 1em;
}
.education-body > .item {
  display: flex;
  align-items: center;
  gap: 0.5em;
}
.education-body > .item > .logo {
  min-width: 3.5em;
  min-height: 3.5em;
  width: 3.5em;
  height: 3.5em;
  border-radius: 50%;
  position: relative;
  border: 0.1em solid #9c9c9c;
}
.education-body > .item > .logo > img {
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
}
.education-body > .item > .name {
  display: flex;
  flex-direction: column;
  font-size: 0.9em;
}
.education-body > .item > .name > div:nth-child(2) {
  font-size: 0.8em;
  opacity: 0.5;
}
@media (orientation: landscape) {
  .intro-body {
    padding: .5em 0;
    gap: 1.5em;
  }
  .intro-body .photo {
    height: 10vw;
    width: 10vw;
  }
  .intro-body .greetings {
    font-size: 1.2em;
  }
  .intro-body .description {
    font-size: .8em;
    padding: 1em 2em;
    gap: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    gap: 0.2em;
  }
  .intro-button {
    margin: 1em 0;
    gap: 1em;
    font-size: 0.75em;
  }
  .intro-button button {
    padding: 0.6em 0;
  }
  .about-body {
    font-size: 0.7em;
    display: grid;
    grid-template-columns: repeat(2, 50%);
    gap: 0.3em;
    padding: 1.5em;
  }
  .education-body {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .intro-body .photo {
    width: 23vw;
    height: 23vw;
  }
}
@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .intro-body .photo {
    width: 15vw;
    height: 15vw;
  }
}
@media (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4) and (orientation: portrait) {
  .intro-body .photo {
    width: 23vw;
    height: 23vw;
  }
}
@media (min-aspect-ratio: 4/5) and (max-aspect-ratio: 5/4) and (orientation: landscape) {
  .intro-body .photo {
    width: 13vw;
    height: 13vw;
  }
}

</style>
