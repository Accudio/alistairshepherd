<template>
  <div id="page" class="page">
    <section class="page-content">
      <h1>Contact Me</h1>
      <p>I am currently available for work, so if you have any freelance, contract, or full time positions in website design or development I would be thrilled to discuss these with you!</p>
      <div class="social-flash">
        <ul ref="social">
          <li>
            <button :ref="[ tab === 'email' ? 'active' : '' ]" :class="[ tab === 'email' ? 'active' : '' ]" class="email" @click="tab='email'">
              <font-awesome-icon :icon="['fas', 'envelope-open']" />
            </button>
          </li>
          <li>
            <button :ref="[ tab === 'twitter' ? 'active' : '' ]" :class="[ tab === 'twitter' ? 'active' : '' ]" class="twitter" @click="tab='twitter'">
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </button>
          </li>
          <li>
            <button :ref="[ tab === 'phone' ? 'active' : '' ]" :class="[ tab === 'phone' ? 'active' : '' ]" class="phone" @click="tab='phone'">
              <font-awesome-icon :icon="['fas', 'phone']" />
            </button>
          </li>
          <li>
            <button :ref="[ tab === 'form' ? 'active' : '' ]" :class="[ tab === 'form' ? 'active' : '' ]" class="form" @click="tab='form'">
              <font-awesome-icon :icon="['far', 'comment-alt']" />
            </button>
          </li>
        </ul>
        <div class="pointer">
          <div :style="{ transform: 'translate(' + pointerX + 'px)' }" class="arrow">
            <div class="inner" />
          </div>
        </div>
      </div>
      <div class="tab-contents">
        <transition-group name="fade" mode="out-in">
          <div v-show="tab === ''" key="none">
            You can contact me through one of the methods above
          </div>
          <div v-show="tab === 'email'" key="email">
            Email me at <a href="mailto:alistair@accudio.com" title="Email: alistair@accudio.com">alistair@accudio.com</a>
          </div>
          <div v-show="tab === 'twitter'" key="twitter">
            Find me on Twitter, <a href="https://twitter.com/accudio" title="Twitter: @accudio">@Accudio</a>
          </div>
          <div v-show="tab === 'phone'" key="phone">
            You can call me on my mobile at <a href="tel:+447484272335" title="Call: 07484 272 335">07484 272 335</a>
          </div>
          <div v-show="tab === 'form'" key="form">
            <ContactForm />
          </div>
        </transition-group>
      </div>
    </section>
  </div>
</template>

<script>
import ContactForm from '../components/ContactForm'

export default {
  components: {
    ContactForm
  },
  data: () => ({
    tab: '',
    pointerX: 0
  }),
  watch: {
    tab() {
      setTimeout(this.updateArrow, 100)
    }
  },
  mounted() {
    this.$bus.$emit('page-mount', 1)
    this.$nextTick(function() {
      window.addEventListener('resize', this.updateArrow);
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateArrow);
  },
  methods: {
    updateArrow() {
      let mid = this.$refs.social.offsetLeft + this.$refs.social.offsetWidth / 2
      let center = (typeof(this.$refs.active) !== 'undefined') ? this.$refs.active.offsetLeft + this.$refs.active.offsetWidth / 2 : mid
      this.pointerX = center - mid
    }
  }
}
</script>

<style lang="scss">

$linecol: #bbb;

.social-flash {
  ul {
    display: flex;
    list-style: none;
    margin-top: 3rem;
    padding: 0;

    li {
      flex: 1;

      button {
        background: none;
        border: 0;
        color: #fff;
        cursor: pointer;
        display: inline-block;
        font-size: 4rem;
        opacity: .5;
        outline: none;
        transition: color .3s, opacity .3s;

        &.active {
          opacity: 1;
        }

        &.email {
          &:hover, &.active {
            color: #68de00;
          }
        }

        &.twitter {
          &:hover, &.active {
            color: #1da1f3;
          }
        }

        &.phone {
          &:hover, &.active {
            color: #fff132;
          }
        }

        &.form {
          &:hover, &.active {
            color: #ff8400;
          }
        }
      }
    }
  }

  .pointer {
    overflow: hidden;
    padding: .5rem;

    .arrow {
      display: inline-block;
      position: relative;
      transition: transform .6s cubic-bezier(.68, -.55, .27, 1.55);

      .inner {
        border-left: 3px solid $linecol;
        border-top: 3px solid $linecol;
        height: 19px;
        transform: rotate(45deg);
        width: 19px;
      }

      &::before, &::after {
        background: $linecol;
        content: '';
        height: 3px;
        position: absolute;
        top: calc(50% - 2px);
        width: 100vw;
      }

      &::before {
        right: 110%;
      }

      &::after {
        left: 110%;
      }
    }
  }
}

.tab-contents {
  position: relative;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  position: absolute;
  top: 0;
  width: 100%;
}

</style>
