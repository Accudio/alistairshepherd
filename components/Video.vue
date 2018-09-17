<template>
  <div class="video-wrap">
    <div class="video-container">
      <video id="bgvideo" poster="/video/scotland-waterfalls.jpg" preload="meta" autoplay muted loop playsinline>
        <source src="/video/scotland-waterfalls.mp4" type="video/mp4">
        <source src="/video/scotland-waterfalls.webm" type="video/webm">
      </video>
    </div>
    <div class="video-overlay" />
  </div>
</template>

<script>
export default {
  data: () => ({
    hidden: true
  }),
  mounted() {
    this.videoActivity()
  },
  methods: {
    videoActivity() {
      var video = document.getElementById('bgvideo')
      var t
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
  background: url('/video/scotland-waterfalls.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -2;

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

    #bgvideo {
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
