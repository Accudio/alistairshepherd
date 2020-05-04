<template>
  <div class="root">
    <div class="main">
      <div :style="{ opacity: headerOpacity }" class="header">
        <transition name="page">
          <Head v-show="route"/>
        </transition>
      </div>
      <Video />
      <div class="main-content">
        <nuxt />
      </div>
    </div>
    <Menu :page-scroll="pageScroll"/>
    <vue-cookie-accept-decline
      ref="consent"
      :debug="false"
      :position="'bottom-left'"
      element-id="consent"
      @status="consentStart"
      @clicked-accept="consentAccept"
      @clicked-decline="consentDecline">
      <div slot="message">
        We collect and process your personal information for the following purposes: Analytics. <nuxt-link to="/privacy-policy/">Learn More...</nuxt-link>
      </div>
      <div slot="declineContent">
        Decline
      </div>
      <div slot="acceptContent">
        Accept
      </div>
    </vue-cookie-accept-decline>
  </div>
</template>

<script>
// simplebar
import SimpleBar from 'simplebar'
import 'simplebar/dist/simplebar.css'

// cookie notice
import VueCookieAcceptDecline from 'vue-cookie-accept-decline'
import 'vue-cookie-accept-decline/dist/vue-cookie-accept-decline.css'

// components
import Menu from '../components/Menu'
import Video from '../components/Video'
import Head from '../components/Head'

export default {
  components: {
    VueCookieAcceptDecline,
    Menu,
    Video,
    Head
  },
  data: () => ({
    pageScroll: 0,
    route: false,
    loaded: false,
    countlyConsent: [
      'sessions',
      'events',
      'views',
      'crashes'
    ]
  }),
  computed: {
    headerOpacity() {
      return (this.pageScroll >=54) ? 0 : (1 - this.pageScroll / 54).toFixed(2);
    }
  },
  watch: {
    $route() {
      this.pageScroll = 0
      this.$bus.$emit('route-change')
      this.route = ($nuxt.$route.path !== '/') ? true : false

      if (typeof Countly !== 'undefined') {
        Countly.q.push(['track_pageview'])
      }
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
    document.addEventListener('click', this.openConsent);
  },
  created() {
    this.$bus.$on('page-mount', () => { this.scrollbar() })
    this.$bus.$on('page-load', () => { this.loaded = true })
  },
  destroyed() {
    window.removeEventListener('load', () => {
      this.$nuxt.$loading.finish()
    })
  },
  methods: {
    scrollbar() {
      if (document.getElementById('page')) {
        var el = new SimpleBar(document.getElementById('page'))
        el.getScrollElement().addEventListener('scroll', () => {
          this.pageScroll = el.getScrollElement().scrollTop
        })
      }
    },
    consentStart(value) {
      if (process.client && value !== 'decline') {
        Countly.q.push(['add_consent', this.countlyConsent]);
      }
    },
    consentAccept() {
      Countly.q.push(['add_consent', this.countlyConsent]);
    },
    consentDecline() {
      Countly.q.push(['remove_consent', this.countlyConsent]);
    },
    openConsent(e) {
      let target = e.target || e.srcElement;
      if (target.tagName === 'A' && target.getAttribute('href') === '#consent') {
        e.preventDefault()
        this.$refs.consent.removeCookie()
        this.$refs.consent.init()
        return false
      }
    }
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
        max-width: calc(100vw - 120px);
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

      .page, .page-home {
        height: 100vh;
        margin-left: auto;
        margin-right: auto;
        overflow-x: hidden;
        overflow-y: auto;
        position: relative;
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

          h1 {
            font-size: 2rem;
            margin-bottom: 2rem;
          }

          p {
            margin-bottom: 1.5rem;
          }

          hr {
            margin: 2rem 0;
            opacity: .5;
          }
        }
      }
    }
  }

  .cookie {
    background: #0f1514;
    border: 0;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .4);
    color: #fff;

    &__floating {
      &__content {
        font-size: .75rem;
        margin: 0;
        padding: 10px 15px;

        a {
          color: rgba(#fff, .75);
          text-decoration: underline;
        }
      }

      &__buttons {
        justify-content: flex-end;
        padding: 0 15px 10px;

        &__button {
          border-radius: 5px;
          font-size: .75rem;
          min-height: 0;
          width: auto;

          &:not(.dud) {
            border: 0;
          }

          &--accept {
            background: #4caf50;
            color: #fff;
            margin-right: .5ch;
            transition: background .2s;

            &:hover {
              background: darken(#4caf50, 15%);
              color: #fff;
            }
          }

          &--decline {
            font-weight: normal;

            &:not(.dud) {
              background: none;
              color: #fff;
            }
          }
        }
      }
    }
  }
}

.page-enter-active, .page-leave-active {
  transition: opacity .2s;
}

.page-enter, .page-leave-active {
  opacity: 0;
}

// internet explorer displays header incorrectly, center through alternative means
@media all and (-ms-high-contrast: none) {
  .root .main .header .head-text {
    left: 50%;
    position: absolute;
    top: 0;
    transform: translate(-50%);
  }
}
</style>
