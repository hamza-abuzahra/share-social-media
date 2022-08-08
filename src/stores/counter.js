import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    duration: 0,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    
    }, 
})
