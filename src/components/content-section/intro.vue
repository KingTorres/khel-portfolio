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
  function DownloadCV() {
    const url = "https://drive.google.com/file/d/1RWbHvVRUVih2mNRGhglUFcS4wgaAF437/view?usp=sharing";
    window.open(url, "_blank");
  }
  function udemy1() {
    window.open('https://ude.my/UC-7257737f-91a3-40ec-8f0e-5e21f2a4e73e', '_blank');
  }
  function udemy2() {
    window.open('https://ude.my/UC-a1c48038-82a7-4e66-aca2-9191215111a0', '_blank');
  }
  const copyNumber = async (value: any) => {
    try {
      await navigator.clipboard.writeText(value)
      alert('Contact Copied')
    } catch (err) {
      alert('Failed to copy:'+ err)
    }
  }
</script>
<template>
  <section id="home">
    <div class="section-title">Frontend / Web Designer</div>
    <div class="intro-body">
      <div class="details">
        <div class="greetings">Hi, I'm Michael Torres</div>
        <div class="description">
          <div>Frontend & Graphics</div>
          <div>Responsive Web Designer</div>
          <div v-if="IS_LANDSCAPE">Layout Designer</div>
          <div v-if="IS_LANDSCAPE">Reactive UI/UX</div>
        </div>
        <div class="intro-button">
          <button @click="DownloadCV"><span>CV</span><download/></button>
          <button @click="copyEmail"><span>EMAIL</span><clipboard/></button>
        </div>
      </div>
      <div class="photo">
        <div>
          <img src="@/assets/img/avatar/avatar-smile.webp" alt="avatar">
        </div>
      </div>
    </div>
    <div class="about-body" @click="copyNumber('09493923708')">
      <div class="item" v-for="(item, index) in Details.about" :key="index">
        <div class="label">{{ Object.keys(item)[0] }}:</div>
        <div class="data">{{ Object.values(item)[0] }}</div>
      </div>
    </div>
    <div class="section-title">Certification</div>
    <div class="education-body">
      <div class="item active" @click="udemy1">
        <div class="logo">
          <img src="@/assets/img/logo/udemy.webp" alt="ubnhs">
        </div>
        <div class="name">
          <div>React, Next.js and NodeJS</div>
          <div>ude.my/UC-7257737f-91a3-40ec-8f0e-5e21f2a4e73e</div>
        </div>
        <div class="action">></div>
      </div>
      <div class="item active" @click="udemy2">
        <div class="logo">
          <img src="@/assets/img/logo/udemy.webp" alt="ubnhs">
        </div>
        <div class="name">
          <div>CSS, Bootstrap, Javascript</div>
          <div>ude.my/UC-a1c48038-82a7-4e66-aca2-9191215111a0</div>
        </div>
        <div class="action">></div>
      </div>
    </div>
    <div class="section-title">Education</div>
    <div class="education-body">
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
    </div>
  </section>
</template>
<style scoped>

.intro-body {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr max-content;
  gap: 1em;
  align-items: flex-end;
}
.intro-body .greetings {
  font-size: 1.1em;
  font-family: "poppins-medium";
  width: 100%;
  margin: 0.5em 0;
  margin-bottom: 0.2em;
  text-wrap: nowrap;
}
.intro-body .description {
  width: 100%;
  font-size: .7em;
  padding: 1.2em;
  border-radius: 1em;
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
  padding: .3em 0;
  border-radius: 2em;
  background: #ffffff;
  color: #ffffff;
  box-shadow: 0em 0.1em .2em #00000056;
  justify-content: center;
  background: linear-gradient(to right, blue, rgb(170, 2, 100));
}
.intro-button button:last-child {
  background: linear-gradient(to right, #4b4bff, #95c6e0);
}
.intro-button button svg {
  height: 1em;
  width: auto;
}
.intro-body .details {
  display: flex;
  flex-direction: column;
  gap: 0.2em;
}
.intro-body .photo {
  width: 31.5vw;
  height: 31.5vw;
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
  padding: 1.5em;
  width: 100%;
  font-size: 0.8em;
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  cursor: pointer;
}
.about-body > .item {
  display: flex;
}
.about-body > .item > .label {
  text-transform: capitalize;
  min-width: 6.5em;
  opacity: 0.7;
  font-family: "poppins-medium";
  color: #828282;
}
.about-body > .item:first-child > .data {
  color: blue;
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
  justify-content: space-between;
  gap: 1em;
  padding: 1em;
  border-radius: 1em;
  background: #f7f7f7;
}
.education-body > .item.active:hover {
  filter: brightness(105%);
  transform: scale(1.01);
  box-shadow: 0.1em 0.1em 0.2em #0000002f;
  cursor: pointer;
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
  justify-self: left;
  width: 100%;
  font-size: 0.9em;
}
.education-body > .item > .name > div:nth-child(2) {
  font-size: 0.8em;
  opacity: 0.5;
}
.education-body > .item > .action {
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
}
@media (orientation: landscape) {
  .intro-body {
    padding: .5em 0;
    gap: 1.5em;
  }
  .intro-body .photo {
    height: 11.5vw;
    width: 11.5vw;
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
    padding: 0.7em 0;
  }
  .about-body {
    font-size: 0.7em;
    display: grid;
    grid-template-columns: repeat(2, 50%);
    gap: 0.3em;
    padding: 1.5em;
  }
  .about-body:active {
    transform: scale(1.02);
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
