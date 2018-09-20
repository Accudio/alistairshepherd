<template>
  <div id="page" class="page">
    <section class="page-content">
      <h1>Projects</h1>
      <p>
        These are a few of my best and most recent projects. I like experimenting with different technologies and libraries, most recently in javascript frameworks like Vue.js and React.js.
      </p>
      <p>
        My open-source projects can be found on <a href="https://github.com/accudio">GitHub</a>, and you can find more information about my professional experience and work on the <nuxt-link to="/work">Work page</nuxt-link>.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$bus.$emit('page-mount', 1)
  }
}
</script>
