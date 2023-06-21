<script setup lang="ts">
import { participantStore } from '../store'
import ParticipantList from './ParticipantList.vue'

let id = 1
</script>

<template>
  <div class="greetings">
    <input v-model="participantStore.name" type="text" />
    <button class="btn btn-add" @click="participantStore.add({ id: id++, name: participantStore.name })">
      add
    </button>

    {{ participantStore.name }}

    <button class="btn btn-shuffle" @click="participantStore.shuffle">shuffle</button>

    <ParticipantList />
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}

.btn {
  border: none;
  border-radius: 1.25rem;
}

.btn:hover {
  background-color: black;
  cursor: pointer;
}

.btn-add {
  background-color: green;
}

.btn-shuffle {
  background-color: red;
}
</style>
