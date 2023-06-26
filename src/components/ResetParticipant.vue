<script setup lang="ts">
import { ref } from 'vue'
import Modal from './Modal.vue'
import { participantStore } from '@/store'
import Button from './Button.vue'

const showModal = ref(false)
const handleClickReset = (reset: boolean) => {
  if (reset) participantStore.reset()
  showModal.value = false
}
</script>

<template>
  <Button name="Reset" type="secondary" @click-event="showModal = true" :disable="participantStore.list.length < 1" />
  <Modal :show="showModal" @close-modal="showModal = false">
    <h1 class="title">Reset</h1>
    <p class="description">Reset participants? UWU~</p>
    <div class="btn-row">
      <Button name="Reset" type="primary" @click-event="handleClickReset(true)" />
      <Button name="Cancel" type="secondary" @click-event="handleClickReset(false)" />
    </div>
  </Modal>
</template>

<style scoped>
.title,
.description {
  color: var(--c-primary);
}

.btn-row {
  display: flex;
  gap: 0.35rem;
}
</style>
