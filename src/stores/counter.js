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
      fetch("src\\assets\\WhatsApp Image 2022-07-27 at 2.52.30 PM.jpeg")
      .then(function(response) {
        return response.blob()
      })
      .then(function(blob) {

        var file = new File([blob], "picture.jpg", {type: 'image/jpeg'});
        var filesArray = [file];

        try {
          navigator.share({
            text: 'some_text',
            files: filesArray,
            title: 'some_title',
            url: 'some_url'
          });
        } catch (err){
          console.log(err)
        }
      })

    },
  } 
})
