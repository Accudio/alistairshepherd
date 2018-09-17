<template>
  <div id="page">
    <section class="page-content">
      <h1>Work</h1>
      <p>
        Text here.
      </p>
      <div class="page-lengthener" />
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

<style>
.page-lengthener {
  height: 400vh;
}
</style>
