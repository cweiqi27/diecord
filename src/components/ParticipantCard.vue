<script setup lang="ts">
import { participantStore } from '@/store'

defineProps<{
  id: number
  name: string
  notes?: string
}>()
</script>

<template>
  <div class="card">
    <h3 class="name">
      {{ name }}
    </h3>
    <button @click="participantStore.delete(id)" class="delete">x</button>
    <p class="notes">
      {{ notes }}
    </p>
  </div>
</template>

<style scoped>
.card {
  position: relative;
  display: inline-flex;
  gap: 0.25rem;
  justify-content: space-between;
  border-radius: 1.25rem;
  width: 100%;
  padding: 0.5rem 1.25rem;
  color: var(--c-secondary);
  background-color: var(--c-primary);

  .name {
    font-size: 1.25rem;
    font-weight: 600;
  }

  .delete {
    align-self: center;
    padding: 0.25rem;
    border-radius: 9999px;
    border: solid 0.1rem var(--c-secondary);
    background: none;
    cursor: pointer;
  }

  .delete:hover {
    color: var(--c-primary);
    background-color: var(--c-secondary);
  }
}

.notes {
  position: absolute;
  display: none;
  top: -2rem;
  left: 1rem;
  font-size: 1.25rem;
  font-weight: 500;
  color: green;
}

.card:hover .notes {
  display: block;
}
</style>
