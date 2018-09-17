<template>
  <div id="page">
    <section class="page-content">
      <h1>About Me</h1>
      <p>
        My name is Alistair Shepherd, I’m a self taught frontend web developer based in the Highlands of Scotland. I build modern websites for individuals and businesses!
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
