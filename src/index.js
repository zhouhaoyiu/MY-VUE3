// import { reactive } from '@vue/reactivity'
import { reactive } from './vue3/reactivity'
const state = reactive({
  name: 'zhy',
  age: '21',
  info: {
    job: 'pilot',
    plane: [
      {
        id: 1,
        name: 'B737'
      },
      {
        id: 2,
        name: 'A320'
      }
    ]
  },
  hobby: ['vue', 'react', 'ang']
})

// state.hobby.push('coding')
state.info.plane.push({
  id: 3,
  name: 'B777'
})