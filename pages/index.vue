<template>
  <section class="container">
    <div>
      <h1 class="title">
        alistairshepherd
      </h1>
      <h2 class="subtitle">
        Website for Alistair Shepherd, frontend web developer, at alistairshepherd.co.uk
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/e/ed/016vallesmarineris_reduced0.5.jpg" style="width:300px;" defer >
    </div>
  </section>
</template>

<script>
export default {
  components: {
    
  }
}
</script>

<style>
.container {
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
}

.title {
  color: #35495e;
  display: block;
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; /* 1 */
  font-size: 100px;
  font-weight: 300;
  letter-spacing: 1px;
}

.subtitle {
  color: #526488;
  font-size: 42px;
  font-weight: 300;
  padding-bottom: 15px;
  word-spacing: 5px;
}

.links {
  padding-top: 15px;
}
</style>

