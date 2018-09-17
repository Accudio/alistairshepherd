<template>
  <div :style="{'opacity': loading ? 1 : 0}" class="loading">
    <div :style="{'width': percent+'%'}" class="bar" />
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  data() {
    return {
      percent: 0,
      loading: false,
      canSuccess: true,
      duration: 3000
    }
  },
  methods: {
    start() {
      this.loading = true
      if (this._timer) {
        clearInterval(this._timer)
        this.percent = 0
      }
      this._cut = 10000 / Math.floor(this.duration)
      this._timer = setInterval(() => {
        this.increase(this._cut * Math.random())
        if (this.percent > 95) {
          this.finish()
        }
      }, 100)
      return this
    },
    set(num) {
      this.loading = true
      this.percent = Math.floor(num)
      return this
    },
    get() {
      return Math.floor(this.percent)
    },
    increase(num) {
      this.percent = this.percent + Math.floor(num)
      return this
    },
    decrease(num) {
      this.percent = this.percent - Math.floor(num)
      return this
    },
    finish() {
      this.percent = 100
      this.hide()
      this.$bus.$emit('page-load', 1)
      return this
    },
    pause() {
      clearInterval(this._timer)
      return this
    },
    hide() {
      clearInterval(this._timer)
      this._timer = null
      setTimeout(() => {
        this.loading = false
        Vue.nextTick(() => {
          setTimeout(() => {
            this.percent = 0
          }, 200)
        })
      }, 500)
      return this
    }
  }
}
</script>

<style lang="scss" scoped>
.loading {
  height: 4px;
  left: 0;
  position: fixed;
  top: 0;
  transition: opacity .4s;
  width: 100vw;
  z-index: 999;

  @media screen and (min-width: 900px) {
    width: 75vw;
  }

  .bar {
    background: linear-gradient(90deg, rgba(#37a1ff, .4), rgba(#37a1ff, 1));
    height: 100%;
    position: absolute;
    transition: width .2s;
    width: 50%;
  }
}
</style>