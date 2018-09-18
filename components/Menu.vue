<template>
  <nav :class="{ 'active': menuActive }" :style="{ 'background-color': 'rgba(15, 21, 20, '+navOpacity+')' }" class="primary-menu" role="navigation" aria-label="Main Menu">
    
    <button class="toggle" aria-label="Mobile Menu Toggle" @click="toggleMenu">
      <div class="open">
        <div class="btn-text">
          MENU
        </div>
      </div>
      <div class="close">
        <div class="btn-text">
          CLOSE
        </div>
      </div>
    </button>

    <div class="menu">
      <div class="menu-main">
        <div class="menu-content">
          <div class="menu-nav">
            <ul class="menu-nav-contents">
              <li class="nav-item">
                <nuxt-link to="/">HOME</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link to="/about">ABOUT</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link to="/projects">PROJECTS</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link to="/work">WORK</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link to="/contact">CONTACT</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="menu-social">
          <ul class="social-buttons">
            <li>
              <a href="https://twitter.com/Accudio">
                <font-awesome-icon :icon="['fab', 'twitter']" />
              </a>
            </li>
            <li>
              <a href="https://github.com/Accudio">
                <font-awesome-icon :icon="['fab', 'github']" />
              </a>
            </li>
            <li>
              <a href="mailto:alistair@accudio.com">
                <font-awesome-icon :icon="['fas', 'envelope']" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/accudio">
                <font-awesome-icon :icon="['fab', 'instagram']" />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/alistairjshepherd">
                <font-awesome-icon :icon="['fab', 'linkedin']" />
              </a>
            </li>
          </ul>
          <div class="footer">
            <nuxt-link to="/privacy-policy" class="">Privacy Policy</nuxt-link>
          </div>
        </div>
      </div>
    </div>

  </nav>
</template>

<script>
export default {
  props: {
    pageScroll: {
      type: Number,
      default: 1
    }
  },
  data: () => ({
    menuActive: false,
  }),
  computed: {
    navOpacity() {
      return (this.pageScroll >=54) ? 1 : (0 + this.pageScroll / 54).toFixed(2);
    }
  },
  created() {
    this.$bus.$on('page-mount', () => { this.menuActive = false })
    this.$bus.$on('route-change', () => { this.toggleMenu(true) })
  },
  methods: {
    toggleMenu(inp) {
      if (this.menuActive === true || inp === true) {
        this.menuActive = false
      } else {
        this.menuActive = true
      }
    }
  },
}
</script>

<style lang="scss">

$nav-break: 900px;
$background: #0f1514;
$menu-height: 4.5rem;
$toggle-animation-time: .2s;

.primary-menu {
  height: $menu-height;
  position: absolute;
  top: 0;
  width: 100%;

  @media screen and (min-width: $nav-break) {
    position: relative;
    width: 25vw;
  }

  .toggle {
    background: none;
    border: 0;
    cursor: pointer;
    display: block;
    height: $menu-height;
    outline: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: $menu-height*1.4;
    z-index: 10;

    @media screen and (min-width: $nav-break) {
      display: none;
    }

    .open, .close {
      align-items: center;
      bottom: 0;
      display: flex;
      justify-content: center;
      left: 0;
      padding: .75rem .5rem;
      position: absolute;
      right: 0;
      top: 0;

      .btn-text {
        align-items: center;
        border-bottom: 2px solid #fff;
        border-top: 2px solid #fff;
        color: #fff;
        display: flex;
        font-family: 'Exo', sans-serif;
        font-size: 1.3rem;
        overflow: hidden;
        padding: 0 .4rem;
      }
    }

    .open .btn-text {
      height: 100%;
      transition-delay: $toggle-animation-time;
      transition-duration: $toggle-animation-time;
      transition-property: height, visibility;
      visibility: visible;
    }

    .close .btn-text {
      height: 0;
      transition-delay: 0s;
      transition-duration: $toggle-animation-time;
      transition-property: height, visibility;
      visibility: hidden;
    }
  }

  .menu {
    display: flex;
    height: 100vh;
    left: 100vw;
    position: absolute;
    right: 0;
    top: 0;
    transition: left .3s;
    width: 100%;

    @media screen and (min-width: $nav-break) {
      left: 0;
    }

    .menu-main {
      background: $background;
      width: 100%;

      .menu-content {
        align-items: center;
        bottom: 0;
        box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .4);
        display: flex;
        flex-flow: column;
        justify-content: center;
        margin-bottom: auto;
        margin-top: auto;
        position: absolute;
        text-align: center;
        top: 0;
        width: 100%;

        .menu-nav {
          position: relative;
          width: 100%;

          .menu-nav-contents {
            list-style: none;
            padding: 0;
            position: relative;
            width: 100%;

            .nav-item {
              border-top: 1px solid rgba(255, 255, 255, .1);
              height: 4rem;
              width: 100%;

              @media screen and (max-width: $nav-break - .1) and (min-aspect-ratio: 1/1) {
                height: 12vh;
              }

              &:last-child {
                border-bottom: 1px solid rgba(255, 255, 255, .1);
              }

              a {
                align-items: center;
                background: $background;
                color: rgba(255, 255, 255, .7);
                display: flex;
                font-family: 'Vollkorn', sans-serif;
                font-size: 1.5rem;
                height: 100%;
                justify-content: center;
                text-decoration: none;
                transition: all .3s;
                width: 100%;

                &.nuxt-link-exact-active, &:hover, &:focus {
                  background: rgba(0, 0, 0, .3);
                  box-shadow: inset 0 0 1.5rem 0 rgba(0, 0, 0, .3);
                  color: rgba(255, 255, 255, 1);
                }


                @media screen and (max-width: $nav-break - .1) and (min-aspect-ratio: 1/1) {
                  font-size: 6vh;
                }
              }
            }
          }
        }
      }

      .menu-social {
        bottom: 0;
        font-size: 2rem;
        left: 0;
        margin-bottom: .3rem;
        margin-left: auto;
        margin-right: auto;
        position: absolute;
        right: 0;
        width: fit-content;

        @media screen and (min-width: $nav-break) {
          font-size: 1.1rem;
        }

        @media screen and (max-width: $nav-break - .1) and (min-aspect-ratio: 1/1) {
          font-size: 1rem;
        }

        .social-buttons {
          list-style: none;
          margin-bottom: .3rem;
          padding: 0;

          li {
            display: inline-block;
            margin: 0 1rem;

            @media screen and (min-width: $nav-break) {
              margin: 0 .5rem;
            }

            a {
              color: rgba(255, 255, 255, .6);
              transition: color .2s;

              &:hover, &:focus {
                color: rgba(255, 255, 255, 1);
              }
            }
          }
        }

        .footer {
          font-size: .8rem;
          font-style: italic;
          text-align: center;

          a {
            color: rgba(255, 255, 255, .3);
            transition: color .2s;

            &:hover, &:focus {
              color: rgba(255, 255, 255, .6);
            }
          }
        }
      }
    }
  }

  &.active {
    .toggle {
      .open .btn-text {
        height: 0;
        transition-delay: 0s;
        transition-duration: $toggle-animation-time;
        transition-property: height, visibility;
        visibility: hidden;
      }

      .close .btn-text {
        height: 100%;
        transition-delay: $toggle-animation-time;
        transition-duration: $toggle-animation-time;
        transition-property: height, visibility;
        visibility: visible;
      }
    }

    .menu {
      left: 0 !important;
    }
  }
}

// internet explorer displays social media buttons incorrectly, center them through alternative means
@media all and (-ms-high-contrast: none) {
  .primary-menu .menu .menu-main .menu-social {
    left: 50%;
    transform: translate(-50%);
    
    .social-buttons {
      text-align: center;
    }
  }
}
</style>
