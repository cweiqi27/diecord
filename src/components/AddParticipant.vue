<script setup lang="ts">
import { participantStore } from '../store'
import Button from './Button.vue'
</script>

<template>
  <Button name="Add" type="secondary" @click-event="participantStore.add()"
    :disable="participantStore.teams.length > 0" />
</template>

<style scoped></style>
