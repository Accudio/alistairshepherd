<template>
  <div id="page-home" class="page-home">
    <section class="home">
      <animated-text />
    </section>
  </div>
</template>

<script>
import AnimatedText from '../components/AnimatedText'

export default {
  components: {
    AnimatedText
  },
  mounted() {
    this.$bus.$emit('page-mount', 1)
  }
}
</script>

<style lang="scss">
.home {
  align-items: center;
  color: #fff;
  display: flex;
  flex-flow: column;
  height: 100%;
  justify-content: center;
  width: 100%;
}
</style>
