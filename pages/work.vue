<template>
  <div id="page" class="page">
    <section class="page-content">
      <h1>Work</h1>
      <p>
        I have recently (January 2019) started working as a Developer at <a href="https://www.thecoveyagency.com">The Covey Agency</a>, a creative and digital agency in Portobello. Although I am continuing to serve existing clients of Accudio, I'm not taking on any further work. However if you're looking for a website, branding, marketing, SEO or pretty much any other creative or digital service I would of course highly recommend <a href="https://www.thecoveyagency.com">The Covey Agency</a>!
      </p>
      <p>
        Previously I did freelance development under by brand <a href="https://accudio.com">Accudio</a> for individuals and small businesses around Edinburgh and the Highlands of Scotland, or remotely.
      </p>
      <p>
        You can find more about the work I did as Accudio on <a href="https://accudio.com">accudio.com</a>, particularly on the <a href="https://accudio.com/web/portfolio">portfolio</a>.
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
