import { reactive } from 'vue'
import type { Participant } from './types/participant'

type ParticipantStore = {
  id: number
  name: string
  notes?: string
  list: Participant[]
  add: () => void
  delete: (id: number) => void
  shuffle: () => void
  reset: () => void
}

export const participantStore = reactive<ParticipantStore>({
  id: 1,
  name: '',
  list: [],
  notes: '',

  add() {
    const alphaRegex = /^[a-zA-Z0-9]+$/
    if (this.list.some((el) => el.name === this.name)) return
    if (this.name.match(alphaRegex))
      this.list.push({ id: this.id++, name: this.name, notes: this.notes })
    this.name = ''
    this.notes = ''
  },

  delete(id) {
    this.list = this.list.filter((participant) => participant.id !== id)
  },

  // Durstenfeld
  shuffle() {
    for (let i = this.list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
        ;[this.list[i], this.list[j]] = [this.list[j], this.list[i]]
    }
  },

  reset() {
    this.list.length = 0
    this.id = 1
  }
})
