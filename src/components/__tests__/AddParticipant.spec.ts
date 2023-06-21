import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AddParticipant from '@/components/AddParticipant.vue'

describe('AddParticipant', () => {
  it('renders properly', () => {
    const wrapper = mount(AddParticipant, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
