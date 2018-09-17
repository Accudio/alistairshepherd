<template>
  <div id="page">
    <section class="page-content">
      <h1>Contact Me</h1>
      <p>I am currently taking on work, so if you have any freelance, contract, or full time positions in website design or development I would be thrilled to discuss these with you!</p>
      <hr>
      <p>You can get in touch with me on <a href="https://twitter.com/accudio" target="_blank" rel="noopener">Twitter</a>, or by emailing me at <a href="mailto:alistair@accudio.com">alistair@accudio.com</a>.</p>
      <p>If you are an individual or business looking for a website, any design work or hosting needs then you can also get in touch with me through my brand <a href="https://accudio.com/">Accudio</a>. Please visit my website to get an idea of what I offer and my prices, and you can contact me through that using the <a href="https://accudio.com/contact">contact form</a>, by emailing <a href="mailto:info@accudio.com">info@accudio.com</a> or on <a href="https://facebook.com/accudio">Accudio's Facebook Page</a>.</p>
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
