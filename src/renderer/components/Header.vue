<template>
<div class="components-header c-003CA1 d-flex fd-row ai-center jc-between">
  <div class="components-header__title fs-35 fw-b d-inline-block">Pomodoro</div>
  <div class="components-header__display-time">
    <div class="components-header__date fs-35 fw-r d-inline-block">{{ time | displayDate }}</div>
    <div class="components-header__time fs-35 fw-r d-inline-block">{{ time | displayTime }}</div>
  </div>
  <div class="components-header__title fs-35 fw-b o-0">Pomodoro</div>
</div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  name: 'components-header',
  data () {
    return {
      time: Date.now(),
      interval: undefined
    }
  },
  filters: {
    displayDate (value) {
      return dayjs(value).format('YYYY.MM.DD')
    },
    displayTime (value) {
      return dayjs(value).format('dddd HH:mm')
    },
  },
  mounted () {
    this.interval = setInterval(() => this.updateTime(), 1000)
  },
  destroyed () {
    clearInterval(this.interval)
  },
  methods: {
    updateTime () {
      this.time = Date.now()
    }
  }
}
</script>

<style>
.components-header {
  padding-left: 4.625rem;
  padding-right: 4.625rem;
  height: 9rem;
}

.components-header__title {
  height: 3rem;
  line-height: 3rem;
}

.components-header__date {
  margin-right: 2rem;
}
</style>
