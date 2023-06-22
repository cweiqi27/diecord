<script setup lang="ts">
import { participantStore } from '@/store'
import ParticipantCard from './ParticipantCard.vue'
</script>

<template>
  <div class="card">
    <ul>
      <li v-for="participant in participantStore.list" :key="participant.id">
        <ParticipantCard :id="participant.id" :name="participant.name" :notes="participant.notes" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.card {
  width: 100%;
}

li {
  list-style-type: none;
  color: var(--c-primary);
}

ul {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  padding: 0;
}
</style>
