<template>
  <div class="logo-wrap">
    <div :class="{ 'load-vis': logoHidden }" class="loader">
      <div class="icon">
        Loading...
      </div>
    </div>
    <div id="logo" :class="{ 'logo-fill': logoFill, 'logo-hidden': logoHidden }" class="logo">
      <h1>
        <svg viewBox="0 0 442 169" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.4"><title>Alistair Shepherd</title><defs><mask id="text-mask">  <rect id="mask-rect" width="440" height="325" fill="#fff" transform="rotate(-30 100 150)" /></mask></defs><path class="text-background" mask="url(#text-mask)" fill="#fff" d="M24.6 168H23l-4.5-.2c-4.9-.1-9.5-1.2-14-3L1 163.2v-19l1.5 1.5c6.3 6.3 12.6 9.5 19 9.5 2 0 3.8-.4 5.4-1.2 1.9-1 2.8-2.3 2.8-4.2 0-1.7-.5-3-1.7-4-.4-.4-1.5-1.1-3.2-2.1l-1.2-.7-5.3-2.6a94.9 94.9 0 0 1-6-3.2c-2.2-1.3-4-2.7-5.4-4.2a21 21 0 0 1-6-14.5c0-8.1 4-14.2 12-18.3a51.5 51.5 0 0 1 31.1-2l1.1.4 1.3.3v19.2l-1.8-1.9c-4.4-4.9-9.6-7.4-15.7-7.4-4 0-6 1.4-6 4.3 0 1.7.7 3.1 2.2 4.3 1 .6 3 1.7 6.2 3.2l5.3 2.5c10 4.8 15.3 11.4 15.5 19.8v0l-.7-44h25.1l-.2 1.7v1.4l-.3 2.3-.1 3.5-.1 3.2v13.3h9.5l-.1-16.5-.2-3.5-.3-3.7-.2-1.7H194c6.7 0 12 1.9 16.1 5.7 4 3.6 6 8 6 14.2v0l-.3-19.9H241l-.2 1.7v1.4l-.3 2.3-.2 3.5v16.5h9.4v-16.5l-.3-3.5-.3-3.7-.1-1.7h110.2c1.4 0 3 .2 4.7.5 4.9 1 8.8 3 11.8 6.2a18 18 0 0 1 4.5 12.5c0 7.4-3.2 13.3-9.7 17.8l-1.2.8 9.5 22.3 3.6 7.4.8 1.4v-1.5l.1-1.3.4-10.6-.8-55.5h26.8c9.7 0 17.4 3 23 9.1 5.2 5.9 7.9 13.7 7.9 23.6 0 4.3-.6 9-1.7 14a27.7 27.7 0 0 1-10.4 16.6c-5.3 3.9-11.7 5.8-19.2 5.8h-52.5l-.4-1.7-.4-1.4-.8-2.3-1-3.6-1.2-3.4-5.3-14.5v18l.4 7.3.2 1.6h-99.2l.1-1.5.2-1.5.3-6v-21h-9.5v21l.4 7.5.2 1.5h-24.9l.2-1.6.2-1.4.5-9.3-.6-36.2c0 7.4-2.5 13.4-7.6 17-4.3 3-10.4 4.6-18 4.6h-7.3v18l.5 7.3.1 1.6H84.6v-1.5l.3-1.5.3-6v-21h-9.5v21l.4 7.5.1 1.5H51.4l.2-1.6.2-1.4.4-9.3-.2-12.2c0 2-.2 3.8-.7 5.8-1.4 6.2-4.9 11-10.5 14.5a31.5 31.5 0 0 1-16.2 4.2zm383.9-56.4h-1.3V155h1.6c5 0 7.6-5 7.6-15 0-8.8-.2-14.2-.4-16.3-1-8-3.5-12.1-7.5-12.1zm-102-.2h-8v15.4h5.4a84 84 0 0 0 9.7-.6l2.6-.3V140l-2.6-.3c-3.5-.4-6.8-.6-9.8-.6h-5.3v15.7h10.4l9-.3 3.2-.2 2.8-.3v-42l-3-.2-3-.2-11.4-.2zm-164.7 0h-8.1v15.4h5.4a84 84 0 0 0 9.8-.6l2.5-.3V140l-2.6-.3c-3.5-.4-6.7-.6-9.8-.6h-5.3v15.7h10.4l9-.3 3.2-.2 2.9-.3v-42l-3-.2-3.1-.2-11.3-.2zm207.6-.1h-2v16.4l1.4.1h.8c2.1 0 3.9-.8 5.1-2.4a9.9 9.9 0 0 0 1.9-6.3c0-5.2-2.4-7.8-7.2-7.8zm-164.6 0h-1.5v16.4h3.1c4-1 6-3.5 6-7.8 0-.4 0-1-.2-1.9-.7-4.5-3.1-6.7-7.4-6.7zM50.5 72H33.7l1.3-3 1-2.5 1.2-3.5 1-2.7.2-.7L55.3 8.9l-1.6-6h23.9l22.7 68.8.2-1.5V69l.6-9.3-.7-56.8h24.9l-.2 1.7-.2 1.4-.1 2.4-.2 3.5-.1 3.5v43.4h7.2l8.9-.2 3.2-.2 3-.3L147 3h25l-.2 1.7V6l-.3 2.5-.2 6.8.7 32.8 1.5 1.5c6.3 6.3 12.6 9.5 19 9.5 2 0 3.8-.4 5.4-1.2 1.9-1 2.8-2.3 2.8-4.2 0-1.7-.5-3-1.7-4-.5-.4-1.5-1.1-3.3-2.1l-1.1-.7-5.3-2.6a94.9 94.9 0 0 1-6-3.2c-2.2-1.3-4-2.7-5.4-4.2a21 21 0 0 1-6-14.5c0-8.1 4-14.2 12-18.3a51.5 51.5 0 0 1 31.1-2l1 .4 1.4.3h51.1v14.9l-2.5-.4a58 58 0 0 0-8.5-.7h-2.8V63l.4 4 .5 5 1-2.2.3-.8 1-2.5L259 63l1-2.7.3-.7 16.9-50.7-1.7-6h24l22.7 68.7.1-1.3.1-1.4.2-2.5.3-8-.8-55.5H384c1.4 0 3 .2 4.7.5 4.9 1 8.8 3 11.8 6.2a18 18 0 0 1 4.5 12.5c0 7.4-3.2 13.3-9.7 17.8l-1.2.8 9.5 22.3 3.6 7.4 1 1.6h-26.6l-.4-1.7-.4-1.4-.8-2.3-1-3.6-1.2-3.4-5.3-14.5v18l.4 7.3.2 1.6h-79.3l-.3-1.7-.3-1.4-.4-2.3-.8-3.6-.5-3-.2-.4-15.8-.2-.3.8-2.3 10.1-.3 1.7h-42.2l.2-1.7.2-1.3.6-9.4V16.7h-2.8c-2.8 0-5.7.3-8.7.7l-2.3.4-3.1-1.7c-7.1-3.3-8.5-3.3-14.5-3.3-4 0-6 1.4-6 4.3 0 1.7.7 3.1 2.2 4.3 1 .6 3 1.7 6.2 3.2l5.3 2.5c10.3 5 15.5 11.7 15.5 20.4 0 1.9-.2 3.8-.7 5.8-1.4 6.2-5 11-10.5 14.5a31.5 31.5 0 0 1-16.2 4.2H194l-4.5-.2c-4.9-.1-9.5-1.2-14-3l-3.6-1.6V72H71.7l-.3-1.7-.3-1.4-.3-2.3L70 63l-.6-3-.2-.4-15.7-.2-.3.8-2.4 10.1-.3 1.7zm15.3-26.2l-4.1-17.2-4.4 17.2h8.5zm213.5 0h8.4l-4-17.2-4.4 17.2zM374 15.3h-2v16.4l1.4.1h.8c2.1 0 3.9-.8 5.2-2.4a10 10 0 0 0 1.8-6.3c0-5.2-2.4-7.8-7.2-7.8z"/><g class="lines" fill="none" stroke="#fff" stroke-width="1.5"><path d="M100.3 71.7L77.6 2.9h-24l1.7 6-16.9 50.7-.2.7-1 2.7-1.3 3.5-1 2.5-1.2 3h16.8l.3-1.7 2.4-10 .3-1 15.7.3.2.5.6 3 .8 3.5.3 2.3.4 1.4.2 1.7h28.6m-43-26.2l4.4-17.2 4 17.2h-8.4z"/><path d="M100.4 72h46.3V58.1l-3 .3-3.1.2-9 .2h-7.1V11.9l.3-3.5.1-2.4.2-1.4.2-1.7h-25l.8 56.8-.5 9.3-.1 1.2v1.7"/><path d="M146.7 72V58.4L147 3h25l-.2 1.7V6l-.3 2.5-.2 6.8.7 56.6h-25.3z"/><path d="M172 67.2v-19l1.5 1.5c6.3 6.3 12.6 9.5 19 9.5 2 0 3.8-.4 5.4-1.2 1.9-1 2.8-2.3 2.8-4.2 0-1.7-.5-3-1.7-4-.5-.4-1.5-1.1-3.3-2.1l-1.1-.7-5.3-2.6a94.9 94.9 0 0 1-6-3.2c-2.2-1.3-4-2.7-5.4-4.2a21 21 0 0 1-6-14.5c0-8.1 4-14.2 12-18.3a51.5 51.5 0 0 1 31.1-2l1 .4 1.4.3v14.9l-4.3-2.3a22.8 22.8 0 0 0-13.2-2.7c-4 0-6 1.4-6 4.3 0 1.7.7 3.1 2.2 4.3 1 .6 3 1.7 6.2 3.2l5.3 2.5c10.3 5 15.5 11.7 15.5 20.4 0 1.9-.2 3.8-.7 5.8-1.4 6.2-5 11-10.5 14.5a31.5 31.5 0 0 1-16.2 4.2H194l-4.5-.2c-4.9-.1-9.5-1.2-14-3l-3.6-1.6z"/><path d="M217.4 17.8V2.9h51.1v14.9l-2.5-.4a58 58 0 0 0-8.5-.7h-2.8V63l.9 9h-25.3l.2-1.7.2-1.3.6-9.4V16.7h-2.8c-2.8 0-5.7.3-8.7.7l-2.4.4z"/><path d="M255.5 72l1-2.2.4-.8 1-2.5L259 63l1-2.7.3-.7 16.9-50.7-1.7-6h24L322.3 72h-28.7l-.3-1.7-.3-1.4-.4-2.3-.8-3.6-.5-3-.2-.4-15.8-.2-.3.8-2.3 10.1-.3 1.7h-17zm23.8-26.2h8.4l-4-17.2-4.4 17.2z"/><path d="M322.2 72l.2-1.7.1-1.4.2-2.5.3-8-.8-55.5h25V72h-25z"/><path d="M347.2 3h36.7c1.4 0 3 0 4.7.4 4.9 1 8.8 3 11.8 6.2a18 18 0 0 1 4.5 12.5c0 7.4-3.2 13.3-9.7 17.8l-1.2.8 9.5 22.3 3.6 7.4 1 1.6h-26.6l-.4-1.7-.4-1.4-.8-2.3-1-3.6-1.2-3.4-5.3-14.5v18l.4 7.3.2 1.6h-25.8V3zm25 28.7l1.3.1h.8c2.1 0 3.9-.8 5.2-2.4a10 10 0 0 0 1.8-6.3c0-5.2-2.4-7.8-7.2-7.8h-2v16.4z"/><path d="M1 163.2v-19l1.4 1.5c6.3 6.3 12.6 9.5 19 9.5 2 0 3.8-.4 5.4-1.2 1.9-1 2.8-2.3 2.8-4.2 0-1.7-.5-3-1.7-4-.4-.4-1.5-1.1-3.2-2.1l-1.2-.7-5.3-2.6a94.9 94.9 0 0 1-6-3.2c-2.2-1.3-4-2.7-5.4-4.2a21 21 0 0 1-6-14.5c0-8.1 4-14.2 12-18.3a51.5 51.5 0 0 1 31.1-2l1.1.4 1.3.3v19.2l-1.8-1.9c-4.4-4.9-9.6-7.4-15.7-7.4-4 0-6 1.4-6 4.3 0 1.7.7 3.1 2.2 4.3 1 .6 3 1.7 6.2 3.2l5.3 2.5c10.3 5 15.5 11.7 15.5 20.4 0 1.9-.2 3.8-.7 5.8-1.4 6.2-4.9 11-10.5 14.5a31.5 31.5 0 0 1-16.2 4.2H23l-4.5-.2c-4.9-.1-9.5-1.2-14-3L1 163.2z"/><path d="M51.3 99h25.1l-.2 1.6v1.4l-.3 2.3-.1 3.5-.1 3.2v13.3h9.5l-.1-16.5-.2-3.5-.3-3.7-.2-1.7h25.2l-.1 69.1h-25l.2-1.5.2-1.5.3-6v-21h-9.5v21l.4 7.5.1 1.5H51.4l.2-1.6.2-1.4.4-9.3-1-56.8z"/><path d="M109.6 168V99h49.6v13l-3-.2-3.1-.2-11.3-.2h-8.1v15.4h5.4a84 84 0 0 0 9.8-.6l2.5-.3V140l-2.6-.3c-3.5-.4-6.8-.6-9.8-.6h-5.3v15.7h10.4l9-.3 3.2-.2 2.9-.3v14h-49.6z"/><path d="M159.2 99H194c6.7 0 12 1.8 16.1 5.6 4 3.8 6 9 6 15.5 0 7.4-2.4 12.8-7.5 16.3-4.3 3.1-10.4 4.7-18 4.7h-7.3v18l.4 7.3.2 1.6h-24.7V99zm24 28.7h3.2c4-1 6-3.5 6-7.8 0-.4 0-1-.2-1.9-.7-4.5-3.1-6.7-7.4-6.7h-1.5v16.4z"/><path d="M216.2 99h25.1l-.2 1.6v1.4l-.3 2.3-.1 3.5-.1 3.2v13.3h9.5l-.1-16.5-.2-3.5-.3-3.7-.2-1.7h25.2V168h-25v-1.5l.3-1.5.3-6v-21h-9.5v21l.4 7.5.1 1.5h-24.8l.2-1.6.2-1.4.4-9.3-1-56.8z"/><path d="M274.5 168V99h49.8v13l-3-.2-3-.2-11.4-.2h-8v15.4h5.3a84 84 0 0 0 9.8-.6l2.5-.3V140l-2.6-.3c-3.5-.4-6.7-.6-9.8-.6h-5.3v15.7h10.4l9-.3 3.2-.2 2.9-.3v14h-49.8z"/><path d="M324.3 99h35.2c1.5 0 3 0 4.7.4 5 1 8.9 3 11.8 6.2a18 18 0 0 1 4.5 12.5c0 7.4-3.2 13.3-9.7 17.8l-1.2.8 9.6 22.3 3.5 7.4 1 1.6h-26.6l-.4-1.7-.3-1.4-.8-2.3-1-3.6-1.2-3.4L348 141l-.1 18 .5 7.3.2 1.6h-24.4V99zm23.5 28.7l1.3.1h.8c2.2 0 4-.8 5.2-2.4a9.9 9.9 0 0 0 1.8-6.3c0-5.2-2.4-7.8-7.2-7.8h-1.9v16.4z"/><path d="M383.7 168v-1.7l.1-1.3.4-10.6-.9-55.5h26.8c9.8 0 17.5 3 23 9.1 5.3 5.9 8 13.7 8 23.6 0 4.3-.6 9-1.8 14a27.7 27.7 0 0 1-10.4 16.6c-5.3 3.9-11.7 5.8-19.2 5.8h-26zm24-13h1.6c5 0 7.5-5 7.5-15 0-8.8 0-14.2-.3-16.3-1-8-3.5-12.1-7.5-12.1h-1.3V155z"/></g></svg>
      </h1>
    </div>
    <div class="subtitle">
      <div :class="{ 'subtitle-wrap-active': subtitleWrapActive }" class="subtitle-wrap">
        <h2>Full Stack Web Developer in the Scottish Highlands</h2>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data: () => ({
    logoHidden: true,
    logoFill: false,
    pageLoaded: false,
    subtitleWrapActive: false
  }),
  created: function() {
    this.subtitleWrapActive = false
    this.logoHidden = true
    this.logoFill = false
  },
  mounted: function() {
    if (this.$parent.$parent.$parent.loaded) {
      this.animate()
    } else {
      this.$bus.$on('page-load', () => { this.animate() })
    }
  },
  methods: {
    animate: function() {
      this.logoHidden = false
      var anime = require('animejs')
      var lineDrawing = anime({
        targets: '#logo .lines path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1000,
        autoplay: false,
        delay: function(el, i) { return i * 100 },
        complete: () => {
          setTimeout(() => { this.logoFill = true }, 300)
          setTimeout(() => { this.subtitleWrapActive = true }, 600)
        }
      })
      setTimeout(() => { lineDrawing.play() }, 300)
    }
  },
}

</script>

<style lang="scss" scoped>

.logo-wrap {
  max-width: 100%;

  .loader {
    left: 50%;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: opacity .2s;

    &.load-vis {
      opacity: 1;
    }

    .icon {
      animation: load 2s infinite linear;
      border: .4rem solid rgba(255, 255, 255, .15);
      border-left: .4rem solid rgba(255, 255, 255, .8);
      border-radius: 50%;
      font-size: 10px;
      height: 3rem;
      overflow: hidden;
      position: relative;
      text-indent: -9999em;
      transform: translateZ(0);
      width: 3rem;

      &::after {
        border-radius: 50%;
        height: 3rem;
        width: 3rem;
      }
    }
  }

  .logo {
    margin-left: auto;
    margin-right: auto;
    max-width: 90%;
    width: 30rem;

    .lines {
      stroke: #fff;
    }

    .text-background {
      fill: rgba(255, 255, 255, .2);
    }

    #mask-rect {
      width: 0;
    }

    &.logo-hidden {
      visibility: hidden;
    }

    &.logo-fill #mask-rect {
      animation: logo-fill .5s ease-in-out;
      width: 100%;
    }
  }

  .subtitle {
    perspective: 1000px;
    perspective-origin: top;
    position: relative;

    .subtitle-wrap {
      transform: rotateX(90deg);
      transform-origin: top center;
      transform-style: preserve-3d;
      transition: transform .5s ease-out;

      &.subtitle-wrap-active {
        transform: rotateX(0);
      }

      h2 {
        font-weight: 300;
        text-align: center;
      }
    }
  }
}

// firefox doesn't support animating the width of an svg mask with percentages, so using opacity
@-moz-document url-prefix() { 
  .logo-wrap .logo {
    #mask-rect {
      animation: none !important;
      width: 100% !important;
    }

    .text-background {
      fill: rgba(255, 255, 255, 0) !important;
      transition: fill .5s;
    }

    &.logo-fill .text-background {
      fill: rgba(255, 255, 255, .2) !important;
    }
  }
}

// microsoft edge and internet explorer don't support animating the width of an svg mask with percentages, so using opacity
_:-ms-lang(x), .logo-wrap .logo {
  #mask-rect {
    animation: none !important;
    width: 100% !important;
  }

  .text-background {
    fill: rgba(255, 255, 255, 0) !important;
    transition: fill .5s;
  }

  &.logo-fill .text-background {
    fill: rgba(255, 255, 255, .2) !important;
  }
}

@keyframes logo-fill {
  0% { width: 0; }
  100% { width: 100%; }
}

@keyframes load {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
