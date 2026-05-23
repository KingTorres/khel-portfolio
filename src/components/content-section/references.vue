<script setup lang="ts">
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
  <section id="references">
    <div class="section-title">Character References</div>
    <div class="reference-list">
      <div class="list-item">
        <div class="name">Peter Ian Munsayac</div>
        <div class="position">Manager</div>
        <div class="department">Research and Development, Megabet</div>
        <div class="contact" @click="copyNumber('09153120303')">09153120303</div>
      </div>
      
      <div class="list-item">
        <div class="name">Gideon Bardellas</div>
        <div class="position">Senior Backend Developer</div>
        <div class="department">Research and Development, Megabet</div>
        <div class="contact" @click="copyNumber('09693010206')">09693010206</div>
      </div>
      <div class="list-item">
        <div class="name">Yra V. Sabordo</div>
        <div class="position">HR Head</div>
        <div class="department">Megabet</div>
        <div class="contact" @click="copyNumber('09268741475')">09268741475</div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.reference-list {
  height: 100%;
  width: 100%;
  background: #f0f0f0;
  padding: 1.5em 1em;
  margin: 0.5em 0;
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  gap: 0.8em;
}
.list-item {
  display: flex;
  flex-direction: column;
  font-size: 0.9em;
  line-height: 1.4;
  color: #949494;
  background: #ffffff;
  box-shadow: 0.1em 0.1em 0.2em #0000002f;
  padding: 1em 1.5em;
  border-radius: 1em;
}
.list-item > .name {
  font-family: "poppins-medium";
  color: #000000;
}
.list-item > .position {
  font-family: "poppins-medium";
  font-size: 0.9em;
}
.list-item > .department {
  font-size: 0.8em;
}
.list-item > .contact {
  font-size: 0.8em;
  letter-spacing: 0.05em;
  color: blue;
  margin-top: 0.3em;
  cursor: pointer;
}
@media (orientation: landscape) {
  .reference-list {
    flex-direction: row;
    padding: 0;
    background: transparent;
  }
  .list-item {
    width: 100%;
    font-size: 0.7em;
    background: #f1f1f1;
    color: #636363;
  }
}
</style>
