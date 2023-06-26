<script setup lang="ts">
import { participantStore } from '@/store'

defineProps<{
  id: number
  name: string
  notes?: string
}>()
</script>

<template>
  <div id="card" class="card">
    <h3 class="name">
      {{ name }}
    </h3>

    <span v-if="notes" class="notes">
      <p>
        {{ notes }}
      </p>
    </span>

    <button @click="participantStore.delete(id)" class="delete">x</button>
  </div>
</template>

<style scoped>
.card {
  position: relative;
  border-radius: 0.75rem;
  border: solid black 0.2rem;
  width: 100%;
  max-width: 20rem;
  color: var(--color-background);
  background-color: var(--color-border);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  .name {
    font-size: 1.25rem;
    font-weight: 600;
  }

  .delete {
    position: absolute;
    top: 0.25rem;
    right: 0.5rem;
    visibility: hidden;
    opacity: 0;
    padding: 0 0.5rem;
    border-radius: 9999px;
    border: none;
    font-weight: 700;
    cursor: pointer;
  }

  .delete:hover {
    color: var(--color-border);
    background-color: var(--color-background);
  }
}

.card:after {
  z-index: -1;
  position: absolute;
  content: '';
  height: 100%;
  width: 100%;
  border-radius: 0.75rem;
  top: 7px;
  left: 7px;
  background-color: black;
  transition: 0.2s;
}

.card:hover:after {
  top: 0px;
  left: 0px;
}

@media (min-width: 768px) {
  .card {
    padding: 13px 50px 13px;
  }
}

.name,
.notes {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.notes {
  position: absolute;
  display: grid;
  place-items: center;
  flex-wrap: wrap;
  opacity: 0;
  visibility: hidden;
  top: -2.5rem;
  left: 0;
  width: inherit;
  border-radius: 0.75rem;
  padding: 0.25rem 0.5rem;
  font-size: 1.25rem;
  font-weight: 500;
  color: white;
  background-color: black;
}

.notes,
.delete {
  transition: opacity 0.3s ease-in-out;
}

#card:hover .notes,
#card:hover .delete {
  opacity: 1;
  visibility: visible;
}

.card:hover {
  max-width: none;
}
</style>
