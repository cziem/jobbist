<template>
  <v-app class="auth-main">
    <v-row justify="center" align="center" class="ma-0">
      <v-col sm="5" md="4">
        <slot />
      </v-col>
    </v-row>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AuthLayout",
});
</script>

<style lang="scss" scoped>
.auth-main {
  background: url("../../assets/auth-bg.jpg") no-repeat;
  background-size: cover;
  height: 100vh;
}
</style>
