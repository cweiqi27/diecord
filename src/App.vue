<script setup lang="ts">
import AddParticipant from './components/AddParticipant.vue'
import ParticipantList from './components/ParticipantList.vue'
</script>

<template>
  <header>
    <h1 class="title">DIECORD</h1>
  </header>

  <main>
    <AddParticipant />
  </main>

  <ParticipantList />
</template>

<style scoped>
header {
  line-height: 1.5;
}

.title {
  font-size: 2rem;
  font-weight: 900;
  color: var(--color-text);
}

@media (min-width: 1024px) {
  header {
    display: flex;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
