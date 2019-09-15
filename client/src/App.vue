<template>
<div id="container">
  <component :is="layout">
    <router-view></router-view>
  </component>
  <base-modal></base-modal>
</div>
</template>

<script>
import LayoutDefault from '@/shared/layouts/default.vue';
import LayoutNoBars from '@/shared/layouts/no-bars.vue';
import BaseModal from '@/shared/components/base/modal';

export default {
  name: 'App',
  computed: {
    layout() {
      return 'layout-' + (this.$route.meta.layout || 'default');
    }
  },
  components: {
    LayoutDefault, LayoutNoBars, BaseModal
  }
};
</script>

<style lang="scss">
html {
  height: 100%;
}
body {
  height: 100%;
}
#container {
  font-family: $fontFamilySystem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $color-content;
  height: 100%;
}
</style>
