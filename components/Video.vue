<template>
  <div :class="{ 'high': bgImageHigh }" class="video-wrap">
    <div class="video-container">
      <video id="bgvideo" ref="bgvideo" class="video" poster="/video/scotland-waterfalls.jpg" preload="meta" muted loop playsinline>
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
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='1500' height='823' viewBox='0 0 1500 823'%3E%3Cfilter id='blur' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20 20' edgeMode='duplicate' /%3E%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1' /%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Cimage filter='url(%23blur)' xlink:href='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAcHBwcIBwgJCQgMDAsMDBEQDg4QERoSFBIUEhonGB0YGB0YJyMqIiAiKiM+MSsrMT5IPDk8SFdOTldtaG2Pj8D/2wBDAQcHBwcIBwgJCQgMDAsMDBEQDg4QERoSFBIUEhonGB0YGB0YJyMqIiAiKiM+MSsrMT5IPDk8SFdOTldtaG2Pj8D/wAARCAAkAEADASIAAhEBAxEB/8QAHAAAAgIDAQEAAAAAAAAAAAAABQcABAEDBgII/8QALRAAAgEDBAEEAQEJAAAAAAAAAQIDAAQRBRIhUTEGIjJBghMUI0JDUmFxocH/xAAYAQEBAQEBAAAAAAAAAAAAAAABAwIABP/EACERAAICAgEEAwAAAAAAAAAAAAABESECA0EEMUKBEjJx/9oADAMBAAIRAxEAPwBQWqOH/dnccDOP+iuhtLgAD/dAxFdWzKxvNmBlHA9pGaJ6ZCs7SC4YAA+1gw9ufrB+jXh24qJboohmejb6OPUWgncqs+BGW+nFPmK3j2LtXx3Xy5bblYhAsuOV52timVaetb2OJI57wJgbBujBORTr6jHBQzT1zaG481raR5nuEiRvt2ArRE0F1GZLW4jlXtWzSYu9WM5/aLtpp2RCV3jAA6HVArTV9UglMkMbRFv6CU4/zVHuTuK/THxjkc+tatb6RCJbtsFvgg+TUjdd9Wahf3MoNzJHb+BAnjH9yPNa76e5umZ5nllY4zuy2OuaA3MGoS5Igf8ALAqT3tuEhh8SYXQJLqGOSfUokxgqMePxBIq7B6atoX3iZWf6fgg/iwofaahYfqKzzKo69zE10CXsTRn9G7TnjDJkkGjPalUNei2GublNl60021JcuZJnxgBsIUHYIFF4bCyCgNBIxiH8xs78990MgYBtjBOce9eCe6IQsbZFjTJXPAz3QmnbSF4wZubm2iYRrpVwzH4lVLKT0TzVrEGBNcWbRIq+7neV7+NbFuivDYWstd8nOMH7NNT9QgAT3ECW2FuYnk8ttbdgA5zjxjFCbGRr1pJMrOsbgBIiEOezzRtrXTPmsFuu1i3CBMHsEV5Cwo28TeR4BJzQlMybbgVVpgchRmjhnkWDYCME9VKldnbsxh2OmtcpHIAT8sZNX0dlcAH7qVKm0iy4Lhlc4rSzF4mJ891KlcvEH2ZoiuZoWO1+GzkEAiqD3BmndXjjwAf4alSr+foh4n//2Q==' x='0' y='0' height='100%25' width='100%25'/%3E%3C/svg%3E");
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
    background-image: url('/video/scotland-waterfalls.jpg');
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
