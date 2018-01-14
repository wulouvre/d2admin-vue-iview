<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
// 公用 class
@import '~@/assets/style/public-class.scss';
// 补丁 iview
@import '~@/assets/style/fixed-iview.scss';
// 补丁 markdown
@import '~@/assets/style/fixed-markdown.scss';
// 补丁 vue-splitpane
@import '~@/assets/style/fixed-vue-splitpane.scss';
// 补丁 vue-grid-layout
@import '~@/assets/style/fixed-vue-grid-layout.scss';
</style>

