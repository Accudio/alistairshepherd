<template>
  <div :class="{ 'a': active, 't': btnTransition }" class="btn-border">
    <div class="btn-text">
      {{ btnText }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      required: true
    },
    btnText: {
      type: String,
      required: true
    },
    btnTransition: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">

.btn-border {
  align-items: center;
  border-bottom: 2px solid #fff;
  border-top: 2px solid #fff;
  display: flex;
  height: 100%;
  justify-content: center;
  overflow: hidden;
  padding: 0 .5rem;
  transition: all .3s;
  width: 4rem;

  &.t {
    height: 0;
  }
}

.btn-text {
  color: #fff;
}

</style>
