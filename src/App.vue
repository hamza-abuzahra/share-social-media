<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useCounterStore } from './stores/counter';
import html2canvas from 'html2canvas'
import { compileScript } from '@vue/compiler-sfc';


const store = useCounterStore()
const share = async function() {
    let a =  window.performance.now()
    const canvas = await html2canvas(document.getElementById('shared'), {
    useCORS: true,
    allowTaint: true,
    letterRendering: true,
    onrendered: function(canvas) {
    var ctx = canvas.getContext('2d');
    ctx.webkitImageSmoothingEnabled = true;
    ctx.mozImageSmoothingEnabled = true;
    ctx.imageSmoothingEnabled = true;
    },
    })
    const test = document.getElementById("test")
    console.log(test)
    canvas.toBlob(async (blob) => {
    const files = [new File([blob], 'image.jpeg', {type: blob.type})]
    const shareData = {
      files
    }
    try{
      const time = window.performance.now()
      store.duration = time - a
      await navigator.share(shareData)
      console.log('shared')
      
    }
    catch (e) {
      console.log(e.name, e.message)
    }
  })
}
const share1 = async function() {
    let a =  window.performance.now()
    const canvas = await html2canvas(document.getElementById('shared1'), {
    useCORS: true,
    allowTaint: true,
    letterRendering: true,
    onrendered: function(canvas) {
    var ctx = canvas.getContext('2d');
    ctx.webkitImageSmoothingEnabled = true;
    ctx.mozImageSmoothingEnabled = true;
    ctx.imageSmoothingEnabled = true;
    },
    })
    const test = document.getElementById("test1")
    console.log(test)
    canvas.toBlob(async (blob) => {
    const files = [new File([blob], 'image.jpeg', {type: blob.type})]
    const shareData = {
      files
    }
    try{
      const time = window.performance.now()
      store.duration1 = time - a
      await navigator.share(shareData)
      console.log('shared')
      
    }
    catch (e) {
      console.log(e.name, e.message)
    }
  })
}
const share2 = async function() {
    let a =  window.performance.now()
    const canvas = await html2canvas(document.getElementById('shared2'), {
    useCORS: true,
    allowTaint: true,
    letterRendering: true,
    onrendered: function(canvas) {
    var ctx = canvas.getContext('2d');
    ctx.webkitImageSmoothingEnabled = true;
    ctx.mozImageSmoothingEnabled = true;
    ctx.imageSmoothingEnabled = true;
    },
    })
    const test = document.getElementById("test2")
    console.log(test)
    canvas.toBlob(async (blob) => {
    const files = [new File([blob], 'image.jpeg', {type: blob.type})]
    const shareData = {
      files
    }
    try{
      const time = window.performance.now()
      store.duration2 = time - a
      await navigator.share(shareData)
      console.log('shared')
      
    }
    catch (e) {
      console.log(e.name, e.message)
    }
  })
}
const share3 = async function() {
    let a =  window.performance.now()
    const canvas = await html2canvas(document.getElementById('shared3'), {
    useCORS: true,
    allowTaint: true,
    letterRendering: true,
    onrendered: function(canvas) {
    var ctx = canvas.getContext('2d');
    ctx.webkitImageSmoothingEnabled = true;
    ctx.mozImageSmoothingEnabled = true;
    ctx.imageSmoothingEnabled = true;
    },
    })
    canvas.toBlob(async (blob) => {
    const files = [new File([blob], 'image.jpeg', {type: blob.type})]
    const shareData = {
      files
    }
    try{
      const time = window.performance.now()
      store.duration3 = time - a
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
    <img alt="Vue logo" id="shared" src="@\assets\test3.jpeg" width="1080" height="1080">

    <div class="wrapper">
      <button @click="share">Share</button>
      <label for="">{{ store.duration }} ms</label>

    </div>
    <img alt="Vue logo" id="shared1" class="logo" src="@\assets\test4.jpg"/>

    <div class="wrapper">
      <button @click="share1">Share</button>
      <label for="">{{ store.duration1 }} ms</label>


    </div>
    <img alt="Vue logo" id="shared2" class="logo" src="@\assets\test5.jpg"/>

    <div class="wrapper">
      <button @click="share2">Share</button>
      <label for="">{{ store.duration2 }} ms</label>


    </div>
    <img alt="Vue logo" id="shared3" class="logo" src="@\assets\test6.jpg"/>

    <div class="wrapper">
      <button @click="share3">Share</button>
      <label for="">{{ store.duration3 }} ms</label>


    </div>
  </header>

  <RouterView />
</template>
