<script setup lang="ts">
import { participantStore } from '@/store'
</script>

<template>
  <div>
    <ul>
      <li v-for="participant in participantStore.list" :key="participant.id">
        {{ participant.id }}
        {{ participant.name }}
      </li>
    </ul>
  </div>
</template>

<style></style>
