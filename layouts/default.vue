<template>
  <div class="root">
    <div class="main">
      <div :style="{ opacity: headerOpacity }" class="header">
        <transition name="header">
          <Head v-show="route"/>
        </transition>
      </div>
      <!-- <Video /> -->
      <div class="main-content">
        <nuxt />
      </div>
    </div>
    <Menu />
  </div>
</template>

<script>
import Menu from '../components/Menu'
// import Video from '../components/Video'
import Head from '../components/Head'

export default {
  components: {
    Menu,
    // Video,
    Head
  },
  data: () => ({
    LPActive: false,
    LPDown: false,
    pageScroll: 0,
    route: false
  }),
  computed: {
    headerOpacity() {
      if (this.pageScroll >= 54) {
        return 0
      } else {
        return (1 - this.pageScroll / 54).toFixed(2)
      }
    }
  },
  watch: {
    $route() {
      this.pageScroll = 0
      this.$bus.$emit('routeChange')
      this.route = ($nuxt.$route.path !== '/') ? true : false
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      window.addEventListener('load', () => {
        this.$nuxt.$loading.finish()
      })
    })
    this.route = ($nuxt.$route.path !== '/') ? true : false
  },
  created() {
    this.$bus.$on('page-mount', () => { this.Scrollbar() })
  },
  destroyed() {
    window.removeEventListener('load', () => {})
  },
  methods: {
    // Scrollbar: function () {
    //   var SimpleBar = require('simplebar')
    //   if (document.getElementById('page')) {
    //     var el = new SimpleBar(document.getElementById('page'))
    //     el.getScrollElement().addEventListener('scroll', () => {
    //       this.pageScroll = el.getScrollElement().scrollTop
    //     })
    //   }
    // }
  }
}
</script>

<style lang="scss">

$page-top: 5rem;
$nav-break: 900px;

.root {
  display: flex;
  height: 100vh;
  overflow: hidden;
  width: 100vw;

  .main {
    flex: 1;
    height: 100vh;
    position: relative;
    width: 100%;

    .header {
      align-items: center;
      display: flex;
      height: $page-top;
      justify-content: center;

      opacity: 1;
      position: absolute;
      top: 0;
      transition: opacity .1s;
      width: 100%;

      .head-text {
        display: block;
        margin-left: .5rem;
        margin-right: auto;
        max-height: 5rem;
        max-width: calc(100vw - 96px);
        width: 100%;
      }

      @media screen and (min-width: 680px) {
        .head-text {
          margin-left: auto;
          max-width: 30rem;
        }
      }
    }

    .main-content {
      height: 100vh;
      opacity: 1;
      transition: opacity 1s;
      width: 100%;

      a {
        color: currentColor;
        font-style: italic;
        transition: all .2s;

        &:hover, &:focus {
          color: rgba(255, 255, 255, .7);
        }
      }

      .simplebar-track.horizontal {
        display: none;
      }

      #page, #page-home {
        height: 100vh;
        margin-left: auto;
        margin-right: auto;
        opacity: 1;
        overflow-x: hidden;
        overflow-y: auto;
        position: relative;
        transition: opacity 1s;
        width: 100%;

        .page-content {
          color: #fff;
          line-height: 1.4;
          margin-left: auto;
          margin-right: auto;
          margin-top: $page-top;
          min-height: 50vh;
          position: relative;
          text-align: center;
          width: 95%;
          @media screen and (min-width: $nav-break) {
            padding: 2rem 3rem;
            width: 90%;
          }

          hr {
            margin: 2rem 0;
            opacity: .5;
          }
        }
      }
    }
  }
}


.header-enter-active, .header-leave-active {
  transition: opacity .2s;
}

.header-enter, .header-leave-to {
  opacity: 0;
}

</style>

