<template>
  <div id="page">
    <section class="page-content">
      <h1>Privacy Policy</h1>
      <p>
        Privacy Policy
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
