import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: 0
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    share() {
      console.log('activated')
      const urlToObject = async()=> {
        const response = await fetch("src\\assets\\logo.svg");
        // here image is url/location of image
        const blob = await response.blob();
        const file = new File([blob], 'image.jpg', {type: blob.type});
        return file
      }
      let file = urlToObject()

      const shareData = {
          text: "test", 
          title: "please work", 
          file
      }
      navigator.share(shareData)
      console.log("are you here")
    }
  }
})
