<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { useCounterStore } from './stores/counter';
import html2canvas from 'html2canvas'


const store = useCounterStore()
const share = async function() {
  const canvas = await html2canvas(document.getElementById('shared'))
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
}
</script>

<template>
  <header>
    <img alt="Vue logo" id="shared" class="logo" src="@\assets\test3.jpeg"/>

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <h1 @click="share">hellooo</h1>
      <input type="file" id="test">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
