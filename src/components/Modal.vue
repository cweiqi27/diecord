<script setup lang="ts">
const { show } = defineProps<{
  show: boolean
}>()
</script>

<template>
  <Transition>
    <div v-if="show" class="container">
      <div class="backdrop" @click="$emit('closeModal')" />
      <div class="card">
        <slot />
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.container {
  z-index: 10;
  position: fixed;
  display: grid;
  place-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100dvh;
}

.backdrop {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(30, 30, 30, 0.9);
}

.card {
  z-index: 20;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0.75rem 1.25rem;
  border-radius: 0.75rem;
  border: solid 0.15rem;
  border-bottom: solid 0.5rem;
  border-color: var(--color-border);
  background-color: var(--color-background);
}
</style>
