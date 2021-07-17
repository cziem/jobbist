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
.otp-input {
  width: 100%;
  justify-content: space-between;

  div {
    width: 20%;
    height: 40px;

    input[type="tel"] {
      width: 100%;
      height: 100%;
      font-size: 1.25em;
      outline: none;
      color: #a5a5a5;
      border-radius: 28px;
      background: white;
      text-align: center;
      border: 2px solid #eeeeee;
    }
  }

  &.error {
    border: 1px solid red !important;
  }
}
.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
