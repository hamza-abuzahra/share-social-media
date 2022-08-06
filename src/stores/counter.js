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
      let shareimg = "src\\assets\\WhatsApp Image 2022-07-27 at 2.52.30 PM.jpeg"
      let sharetitle = "test"
      let sharetext = "please work"
      let shareurl = "whatever.com"
      try {
        const response = await fetch(shareimg);
        const blob = await response.blob();
        const file = new File([blob], 'rick.jpg', {type: blob.type});
  
        await navigator.share({
          files: [file]
        });
      } catch (err) {
        console.log(err.name, err.message);
      }
    },
  } 
})
