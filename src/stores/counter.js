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
      let files = []
      let url = 'src\\assets\\WhatsApp Image 2022-07-27 at 2.52.30 PM.jpeg'
      const toDataURL = async (url) => fetch(url)
      .then(response => response.blob())
      .then(blob => new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onloadend = () => resolve(reader.result)
      reader.onerror = reject
      reader.readAsDataURL(blob)
     }))
     function dataURLtoFile(dataurl, filename) {
      var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
      while(n--){
      u8arr[n] = bstr.charCodeAt(n);
      }
        return new File([u8arr], filename, {type:mime});
      }


      await toDataURL(url)
      .then(dataUrl => {
        console.log('Here is Base64 Url', dataUrl)
        var fileData = dataURLtoFile(dataUrl, "imageName.jpg");
        console.log("Here is JavaScript File Object",fileData)
        files.push(fileData)
      })

      console.log(files)
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
