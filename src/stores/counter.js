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
      const res = await fetch("src\\assets\\WhatsApp Image 2022-07-27 at 2.52.30 PM.jpeg")
      const blob = await res.blob()
      const files = [new File([blob], 'img.jpeg', {type: blob.type })]

      console.log(files)
      if (files.length === 0) {
        console.log('No files selected.')
        return
      }
    
      // feature detecting navigator.canShare() also implies
      // the same for the navigator.share()
      // if (!navigator.canShare) {
      //   output.textContent = `Your browser doesn't support the Web Share API.`
      //   return
      // }
    
      // if (navigator.canShare({ files })) {
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
      // } else {
      //   output.textContent = `Your system doesn't support sharing these files.`
      // }
    },
  } 
})
