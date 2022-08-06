import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: 0,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    async share() {

      const files = document.getElementById('test').files
      if (files.length === 0) {
        console.log('No files selected.')
        return
      }
      try {
        await navigator.share({
          files,
          title: 'Images',
          text: 'Beautiful images'
        })
        console.log('Shared!')
      } catch (error) {
        console.log(`Error: ${error.message}`)
      }
    },
  } 
})
