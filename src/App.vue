<template>
  <container :is="this.$route.meta.layout || 'v-main'">
    <router-view />
  </container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    //
  }),
});
</script>

<style lang="scss">
.v-application p {
  margin-bottom: 0 !important;
}
</style>
