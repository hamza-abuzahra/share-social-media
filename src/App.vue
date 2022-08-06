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
    <img alt="Vue logo" id="shared" class="logo" src="./assets/WhatsApp Image 2022-07-27 at 2.52.30 PM.jpeg" width="125" height="125" />

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

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
