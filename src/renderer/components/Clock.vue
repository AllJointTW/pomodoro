<template>
  <div class="components-clock p-relative bs-border-box">
    <div class="components-clock__plate p-absolute bgc-003CA1 br-50-percentage t-50-percentage l-50-percentage t-XY-minus-50-percentage" />
    <div
      class="components-clock__minute-hand p-absolute bgc-F7F5F1 t-50-percentage r-50-percentage o-8"
      :style="getMinuteHandTransform"
    />
    <div class="components-clock__mask p-absolute bgc-F7F5F1 t-50-percentage" />
  </div>
</template>

<script>
export default {
  name: 'components-clock',
  computed: {
    getMinuteHandTransform () {
      return `transform: translate(0.15625rem, -50%) rotate(${180}deg);`
    }
  }
}
</script>

<style>
.components-clock {
  width: 37.5rem;
  height: 37.5rem;
  padding-left: 0.15625rem;
  padding-right: 0.15625rem;
}

.components-clock__plate {
  width: 29.34375rem;
  height: 29.34375rem;
}

.components-clock__minute-hand {
  width: 16rem;
  height: 32rem;
  border: 0.3125rem solid #003CA1;
  border-radius: 16rem 0rem 0rem 16rem;
  transform-origin: center right;
}

.components-clock__mask {
  width: 18.75rem;
  height: 37.5rem;
  border: 0.3125rem solid #003CA1;
  border-radius: 18.75rem 0rem 0rem 18.75rem;
  transform: translate(-0.15625rem, -50%)
}
</style>
