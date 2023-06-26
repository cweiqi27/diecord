<script setup lang="ts">
import { participantStore } from '../store'
import AddParticipant from './AddParticipant.vue'
import ResetParticipant from './ResetParticipant.vue'
import ShuffleParticipant from './ShuffleParticipant.vue'
</script>

<template>
  <div class="card">
    <label for="name">Name</label>
    <input id="name" class="box" v-model="participantStore.name" @keydown.enter="participantStore.add" type="text"
      :disabled="participantStore.teams.length > 0" />
    <label for="description">Description (optional)</label>
    <input id="description" class="box" v-model="participantStore.notes" @keydown.enter="participantStore.add" type="text"
      :disabled="participantStore.teams.length > 0" />
    <label for="groups">Groups</label>
    <input id="groups" v-model="participantStore.groups" type="number" min="1" :max="participantStore.list.length" />
    <AddParticipant />
    <ShuffleParticipant />
    <ResetParticipant />
  </div>
</template>

<style scoped>
label {
  font-weight: 700;
  color: var(--color-border);
}

.box {
  border-radius: 1.25rem;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 0.75rem;
  border: solid 0.15rem;
  border-bottom: solid 0.5rem;
  border-color: var(--color-border);
  background-color: var(--color-background);
}

.btn-add {
  color: var(--c-secondary);
  border-color: black;
  background-color: var(--c-primary);
}
</style>
