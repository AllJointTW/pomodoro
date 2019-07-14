<template>
  <div id="app" class="default-layout bgc-F7F5F1">
    <components-header class="default-layout__header" />
    <components-clock class="default-layout__clock" />
    <router-view class="default-layout__content" />
    <components-sidebar class="default-layout__sidebar" />
  </div>
</template>

<script>
import ComponentsHeader from './components/Header'
import ComponentsClock from './components/Clock'
import ComponentsSidebar from './components/Sidebar'

export default {
  components: { ComponentsHeader, ComponentsClock, ComponentsSidebar },
  name: 'Pomodoro'
}
</script>

<style src="normalize.css" />
<style src="./assets/base.css" />

<style>
.default-layout__header { min-height: 9rem; }

.default-layout__clock,
.default-layout__content,
.default-layout__sidebar { min-height: calc(100vh - 9rem); }
</style>
