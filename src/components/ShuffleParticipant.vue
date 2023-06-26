<script setup lang="ts">
import { ref } from 'vue'
import { participantStore } from '../store'
import Modal from './Modal.vue'
import Button from './Button.vue'

const showModal = ref(false)
const handleClickShuffle = (shuffle: boolean) => {
  if (shuffle) {
    participantStore.shuffle()
    participantStore.assignTeams()
  }
  showModal.value = false
}
</script>

<template>
  <Button name="Shuffle" type="secondary" @click-event="showModal = true"
    :disable="participantStore.teams.length > 0 || participantStore.list.length < 2" />
  <Modal :show="showModal" @close-modal="showModal = false">
    <h1 class="title">Shuffle</h1>
    <p class="description">Shuffle and assign teams? owo</p>
    <div class="btn-row">
      <Button name="Shuffle" type="primary" @click-event="handleClickShuffle(true)" />
      <Button name="Cancel" type="secondary" @click-event="handleClickShuffle(false)" />
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
