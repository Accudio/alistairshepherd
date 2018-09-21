<template>
  <div :class="{ 'high': bgImageHigh }" class="video-wrap">
    <div class="video-container">
      <video id="bgvideo" ref="bgvideo" :poster="require('~/assets/scotland-waterfalls.jpg')" class="video" preload="meta" muted loop playsinline>
        <source src="~assets/scotland-waterfalls.mp4" type="video/mp4">
        <source src="~assets/scotland-waterfalls.webm" type="video/webm">
      </video>
    </div>
    <div class="video-overlay" />
  </div>
</template>

<script>
export default {
  data: () => ({
    bgImageHigh: false,
    hidden: true
  }),
  mounted() {
    this.$bus.$on('page-load', () => { this.bgImageHigh = true })
    this.$refs.bgvideo.addEventListener('canplaythrough', () => {
      this.videoActivity()
    })
    if(this.$refs.bgvideo.readyState > 3) {
      this.videoActivity()
    }

  },
  methods: {
    videoActivity() {
      const video = this.$refs.bgvideo
      let t
      video.play()
      window.onload = resetTimer
      window.onmousemove = resetTimer
      window.onmousedown = resetTimer
      window.ontouchstart = resetTimer
      window.onclick = resetTimer
      window.onkeypress = resetTimer
      window.addEventListener('scroll', resetTimer, true)
      function resetTimer() {
        if (video.paused) { video.play() }
        clearTimeout(t)
        t = setTimeout(() => { video.pause() }, 60000)
      }
    }
  }
}

</script>

<style lang="scss">
.video-wrap {
  background-image: url('~assets/scotland-waterfalls.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -2;

  &.high {
    background-image: url('~/assets/scotland-waterfalls.jpg');
  }

  .video-container {
    height: 100vh;
    left: 0;
    opacity: 1;
    position: absolute;
    top: 0;
    width: 100%;

    &.hidden {
      opacity: 0;
      transition: opacity 1s;
    }

    .video {
      display: block;
      left: 50%;
      pointer-events: none;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
      @media screen and (max-aspect-ratio: 2600/1080) {
        height: 100%;
      }
      @media screen and (min-aspect-ratio: 2600/1080) {
        width: 100%;
      }
      @media screen and (max-width: 499.9px) {
        display: none;
      }
    }
  }

  .video-overlay {
    background: rgba(0, 0, 0, .6);
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 2;
  }
}
</style>
