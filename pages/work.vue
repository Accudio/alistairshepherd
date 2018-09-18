<template>
  <div id="page">
    <section class="page-content">
      <h1>Work</h1>
      <p>
        I do freelance development under by brand <a href="https://accudio.com">Accudio</a> for individuals and small businesses around Edinburgh and the Highlands of Scotland.
      </p>
      <p>
        You can find more about the work I do as Accudio on <a href="https://accudio.com">accudio.com</a>, particularly on the <a href="https://accudio.com/web/portfolio">portfolio</a>. If you are a business or individual looking for a bespoke website or website upgrade, please <a href="https://accudio.com/contact">get in touch</a>!
      </p>
      <p>
        I am also available for contract or full time work around Edinburgh. If you or your company are hiring I would love to hear from you!
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

<style>
.page-lengthener {
  height: 400vh;
}
</style>
