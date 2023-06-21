import { reactive } from 'vue'
import type { Participant } from './types/participant'

type ParticipantStore = {
  name: string
  list: Participant[]
  add: (participant: Participant) => void
  shuffle: () => void
}

export const participantStore = reactive<ParticipantStore>({
  name: '',
  list: [],

  add(participant) {
    const alphaRegex = /^[a-zA-Z0-9]+$/
    if (this.list.some((el) => el.name === participant.name)) return
    if (participant.name.match(alphaRegex)) this.list.push(participant)
    this.name = ''
  },

  // Durstenfeld
  shuffle() {
    for (let i = this.list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
        ;[this.list[i], this.list[j]] = [this.list[j], this.list[i]]
    }
  }
})
