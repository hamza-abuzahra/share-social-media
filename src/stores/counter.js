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
      ;(async () => {
        if (!('share' in navigator)) {
          return
        }
        // `element` is the HTML element you want to share.
        // `backgroundColor` is the desired background color.
        fetch("src\\assets\\WhatsApp Image 2022-07-27 at 2.52.30 PM.jpeg").then(res => res.blob()).then(async (blob) => {
            // Even if you want to share just one file you need to
            // send them as an array of files.
            const files = [new File([blob], 'image.png', { type: blob.type })]
            const shareData = {
              text: 'Some text',
              title: 'Some title',
              files,
            }
            if (navigator.canShare(shareData)) {
              try {
                await navigator.share(shareData)
              } catch (err) {
                if (err.name !== 'AbortError') {
                  console.error(err.name, err.message)
                }
              }
            } else {
              console.warn('Sharing not supported', shareData)
            }
          })
    })()
  },
  }
})
