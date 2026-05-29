<script setup lang="ts">
import { ref, watch } from "vue"
import { useWindowSize } from "@vueuse/core"

const chartRef = ref()
const { width, height } = useWindowSize()
 const chartOptions = {
    chart: {
      type: "radar",
      toolbar: {
        show: false
      }
    },
    markers: {
      size: 0
    },
    tooltip: {
      enabled: false
    },
    xaxis: {
      categories: ["Responsiveness" , "Frontend", "Layout",  "Backend", "Graphics"]
    }
  }

  const series = [
    {
      name: "Statistic",
      data: [95, 75, 98, 40, 80]
    }
  ]

  watch([width, height], () => {
    chartRef.value?.resize()
  })
</script>
<template>
  <section id="skill">
    <div class="section-title">Skills</div>
    <div class="tools">
      <div class="item">
        <div class="icon">
          <img src="@/assets/img/logo/gitlab.webp" alt="gitlab">
        </div>
        <div class="label">Gitlab</div>
      </div>
      <div class="item">
        <div class="icon">
          <img src="@/assets/img/logo/github.webp" alt="github">
        </div>
        <div class="label">Github</div>
      </div>
      <div class="item">
        <div class="icon">
          <img src="@/assets/img/logo/vue.webp" alt="vue">
        </div>
        <div class="label">VueJS</div>
      </div>
      <div class="item">
        <div class="icon">
          <img src="@/assets/img/logo/react.webp" alt="reactjs">
          <!-- <div class="remarks">Entry</div> -->
        </div>
        <div class="label">ReactJS</div>
      </div>
      <div class="item">
        <div class="icon">
          <img src="@/assets/img/logo/next.webp" alt="nextjs">
          <!-- <div class="remarks">Entry</div> -->
        </div>
        <div class="label">NextJS</div>
      </div>
      <div class="item">
        <div class="icon">
          <img src="@/assets/img/logo/node.webp" alt="node">
        </div>
        <div class="label">NodeJS</div>
      </div>
      <div class="item">
        <div class="icon">
          <img src="@/assets/img/logo/typescript.webp" alt="typescript">
        </div>
        <div class="label">Typescript</div>
      </div>
      <div class="item">
        <div class="icon">
          <img src="@/assets/img/logo/photoshop.webp" alt="photoshop">
        </div>
        <div class="label">Photoshop</div>
      </div>
      <div class="item">
        <div class="icon">
          <img src="@/assets/img/logo/html5.webp" alt="html5">
        </div>
        <div class="label">html5</div>
      </div>
      <div class="item">
        <div class="icon">
          <img src="@/assets/img/logo/css3.webp" alt="css3">
        </div>
        <div class="label">css3</div>
      </div>
    </div>
    <div class="section-title">Web Development Statistic</div>
    <div class="chart-wrapper">
      <apexchart
        type="radar"
        width="100%"
        height="100%"
        :options="chartOptions"
        :series="series"
      />
    </div>
  </section>
</template>
<style scoped>
section#skill {
  background: linear-gradient(45deg, #00086d, #962121);
  padding-bottom: 0;
}
section#skill .section-title {
  background: transparent;
}
.tools {
  background: #f0f0f0;
  padding: 2em 1em;
  border-radius: 1em;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  font-size: 0.6em;
  text-align: center;
  justify-content: center;
  margin-bottom: 1em;
  gap: 1em;
  color: #ffffff;
  background: linear-gradient(to bottom, #2323234d, #2f80dc4b);
}
.tools > .item {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.3em;
}
.tools > .item > .icon {
  width: 80%;
  aspect-ratio: 1/1;
  padding: 0.5em;
  border-radius: 0.6em;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.tools > .item > .icon .remarks {
  position: absolute;
  background: rgb(101, 101, 101);
  top: -1em;
  right: -1em;
  font-size: 0.7em;
  border-radius: 0.5em;
  padding: 0 0.5em;

}
.tools > .item > .icon > img {
  width: 100%;
  height: auto;
  aspect-ratio: 1/1;
}
.chart-wrapper {
  width: 80vw;
  height: 80vw;
  margin: auto;
  margin-top: -2.5em;
}
::v-deep(.vue-apexcharts),
::v-deep(.apexcharts-canvas > svg ) {
  width: 100% !important;
}
@media (orientation: landscape) {
  .tools {
    grid-template-columns: repeat(10, 1fr);
  }
  .chart-wrapper {
    height: 30vw;
    width: 30vw;
  }
}
</style>
