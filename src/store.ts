import { reactive } from 'vue'
import type { Participant } from './types/participant'

type ParticipantStore = {
  id: number
  name: string
  notes?: string
  list: Participant[]
  add: () => void
  delete: (id: number) => void
  groups: number
  shuffle: () => void
  teams: Participant[][]
  assignTeams: () => void
  reset: () => void
}

export const participantStore = reactive<ParticipantStore>({
  id: 1,
  name: '',
  list: [],
  notes: '',

  add() {
    const emptyRegex = /^\s*$/

    if (this.teams.length > 0) return
    if (this.list.some((el) => el.name === this.name)) return

    if (!this.name.match(emptyRegex))
      this.list.push({ id: this.id++, name: this.name, notes: this.notes })
    this.name = ''
    this.notes = ''
  },

  delete(id) {
    this.list = this.list.filter((participant) => participant.id !== id)
  },

  groups: 0,

  // Durstenfeld
  shuffle() {
    for (let i = this.list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
        ;[this.list[i], this.list[j]] = [this.list[j], this.list[i]]
    }
  },

  teams: [],

  assignTeams() {
    const participantsPerGroup = Math.floor(this.list.length / this.groups)
    let startIndex = 0

    for (let i = 0; i < this.groups; i++) {
      const group = this.list.slice(startIndex, startIndex + participantsPerGroup)
      this.teams.push(group)
      startIndex += participantsPerGroup
    }

    if (this.list[startIndex]) this.teams.push(this.list.slice(startIndex))
  },

  reset() {
    this.list.length = 0
    this.teams.length = 0
    this.id = 1
    this.groups = 0
  }
})
