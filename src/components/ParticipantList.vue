<script setup lang="ts">
import { participantStore } from '@/store'
import ParticipantCard from './ParticipantCard.vue'
</script>

<template>
  <div class="card">
    <ul v-if="participantStore.teams.length > 0">
      <div v-for="(team, index) in participantStore.teams">
        <div>
          <h2 v-if="index + 1 <= participantStore.groups">
            Team
            {{ index + 1 }}
          </h2>
          <h2 v-else>no one wants u lol</h2>
        </div>
        <li v-for="(participant, index) in team">{{ index + 1 }} {{ participant.name }}</li>
      </div>
    </ul>

    <ul v-else class="participants">
      <li v-for="participant in participantStore.list" :key="participant.id">
        <ParticipantCard :id="participant.id" :name="participant.name" :notes="participant.notes" />
      </li>
    </ul>

    <div class="count" v-if="participantStore.list.length > 0">
      <p v-if="participantStore.list.length === 1">
        {{ participantStore.list.length }} participant
      </p>
      <p v-else>{{ participantStore.list.length }} participants</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

li {
  list-style-type: none;
  color: var(--c-primary);
}

.participants {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  padding: 0;
}

.count {
  align-self: self-end;
  font-weight: 600;
  color: var(--color-border);
}
</style>
