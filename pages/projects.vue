<template>
  <div id="page">
    <section class="page-content">
      <h1>Projects</h1>
      <p>
        This is a few of my best and most recent web development projects.
      </p>
      <p>
        My open-source projects can be found on <a href="https://github.com/accudio">GitHub</a>, and you can find more information about my professional experience and work on the <nuxt-link to="/work">Work page</nuxt-link>.
      </p>
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/5d/01R_26_October_2010.jpg" width="200">
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
