<script setup lang="ts">
import ActionCard from './components/ActionCard.vue'
import ParticipantList from './components/ParticipantList.vue'
</script>

<template>
  <header>
    <h1 class="title">DIECORD</h1>
  </header>
  <main>
    <ActionCard />
  </main>
  <ParticipantList />
</template>

<style scoped>
header {
  grid-column-start: 1;
  grid-column-end: 3;
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    justify-content: center;
  }
}

.title {
  font-size: 2rem;
  font-weight: 900;
  color: var(--color-text);
}
</style>
