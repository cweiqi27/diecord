<script setup lang="ts">
defineProps<{
  name: string
  type: 'primary' | 'secondary'
  disable?: boolean
}>()
</script>

<template>
  <button :class="['btn', type]" @click="$emit('clickEvent')" :disabled="disable">
    {{ name }}
  </button>
</template>

<style scoped>
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

.btn:disabled {
  cursor: not-allowed;
  opacity: 30%;
}

.primary,
.secondary {
  border-color: black;
}

.primary {
  color: var(--color-background);
  background-color: var(--color-border);
}

.secondary {
  color: var(--color-border);
  background-color: var(--color-background);
}
</style>
