<template>
  <div id="page" class="page">
    <section class="page-content">
      <h1>About Me</h1>
      <p>
        I'm Alistair Shepherd, freelance Frontend and Full-Stack web developer. Based in the stunning city of Edinburgh and from the even more beautiful Highlands of Scotland, I build small frontend projects and full stack websites for individuals and businesses.
      </p>
      <p>
        I previously studied Computational Physics at the University of Dundee, but my web development knowledge is self-taught. I take huge pride and joy in creating things that look and feel great!
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
