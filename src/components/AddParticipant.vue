<script setup lang="ts">
import { participantStore } from '../store'
</script>

<template>
  <div class="card">
    <label for="name">Name</label>
    <input id="name" class="box" v-model="participantStore.name" @keydown.enter="participantStore.add" type="text" />

    <label for="description">Description</label>
    <input id="description" class="box" v-model="participantStore.notes" type="text" />
    <button class="btn btn-add" @click="participantStore.add">Add</button>

    <button class="btn btn-shuffle" @click="participantStore.shuffle">Shuffle</button>
    <button class="btn btn-shuffle" @click="participantStore.reset">Reset</button>
  </div>
</template>

<style scoped>
label {}

.box {
  border-radius: 1.25rem;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-radius: 0.75rem;
  padding: 1rem;
  border: solid 0.1rem;
  border-bottom: solid 0.45rem;
  border-color: var(--color-border);
  background-color: var(--color-background);
}

.btn {
  border-radius: 1.25rem;
  padding: 0.25rem 0.75rem;
  border: solid 0.1rem;
  border-bottom: solid 0.35rem;
  font-weight: 600;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke,
    opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.btn:hover {
  cursor: pointer;
  opacity: 50%;
}

.btn-add {
  color: var(--c-secondary);
  border-color: black;
  background-color: var(--c-primary);
}

.btn-shuffle {
  color: var(--c-primary);
  border-color: black;
  background-color: var(--c-secondary);
}
</style>
