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
        const response = await fetch(`src\\assets\\WhatsApp Image 2022-07-27 at 2.52.30 PM.jpeg`);
        // here image is url/location of image
        const blob = await response.blob();
        const file = [new File([blob], 'image.jpg', {type: blob.type})];
        // console.log(file)
        return file
      }
      let file = urlToObject().then((file) => {
        console.log(file)
        const shareData = {
          text: "test", 
          title: "please work", 
          file
        }
        navigator.share(shareData)
        console.log("are you here")
      })

      // console.log(file)
      

    }
  }
})
