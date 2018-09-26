<template>
  <div id="page" class="page">
    <section class="page-content">
      <div v-if="error.statusCode === 404">
        <h1>Page not found</h1>
        <p>Unfortunately, a 404 error was encountered while trying to find the page or asset you are looking for. This means the server cannot find the file specified in your address bar. This may be due to an incorrect link, mis-spelled URL, or deleted/moved page. All pages on my site are accessible from the menu on the left. If you can't find what you're looking for there or you believe this is a mistake, please email me on <a href="mailto:webmaster@alistairshepherd.uk">webmaster@alistairshepherd.uk</a>.</p>
      </div>
      <div v-else>
        <h1>An unknown error occurred</h1>
        <p>An unknown error occured trying to provide the page you are looking for. This is likely a temporary problem, so please try again later. If this has occurred more than once, I'd appreciate if you contacted me to let me know on <a href="mailto:webmaster@alistairshepherd.uk">webmaster@alistairshepherd.uk</a>.</p>
      </div>
      <nuxt-link to="/">Go back to the home page</nuxt-link>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true
    }
  },
  mounted() {
    this.$bus.$emit('page-mount', 1)
  }
}
</script>
