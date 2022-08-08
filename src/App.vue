<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useCounterStore } from './stores/counter';
import html2canvas from 'html2canvas'
import { compileScript } from '@vue/compiler-sfc';


const store = useCounterStore()
const share = async function() {
    let a =  window.performance.now()
    const canvas = await html2canvas(document.getElementById('shared'), {
    // useCORS: true,
    // allowTaint: true,
    // letterRendering: true,
    // onrendered: function(canvas) {
    // var ctx = canvas.getContext('2d');
    // ctx.webkitImageSmoothingEnabled = true;
    // ctx.mozImageSmoothingEnabled = true;
    // ctx.imageSmoothingEnabled = true;
    // },
    })
    
    const test = document.getElementById("test")
    console.log(test)


    canvas.toBlob(async (blob) => {
    const files = [new File([blob], 'image.jpeg', {type: blob.type})]
    const shareData = {
      files
    }
    try{

      await navigator.share(shareData)
      console.log('shared')
    }
    catch (e) {
      console.log(e.name, e.message)
    }
    
  })
  const time = window.performance.now()
  store.duration = time - a

}
</script>

<template>
  <header>
    <img alt="Vue logo" id="shared" class="logo" src="@\assets\test6.jpg"/>

    <div class="wrapper">
      <button @click="share">Share</button>
      <label for="">{{ store.duration }} ms</label>
      <!-- <input type="image" id="test"  src="src\assets\test3.jpeg"> -->
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>

    </div>
  </header>

  <RouterView />
</template>
