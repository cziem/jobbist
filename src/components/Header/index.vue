<template>
  <v-app-bar
    app
    flat
    color="white"
    class="px-16"
    elevate-on-scroll
    scroll-target="#main-content"
  >
    <v-app-bar-title>Jobbist</v-app-bar-title>

    <v-spacer />

    <v-list class="d-none d-sm-flex">
      <v-list-item v-for="nav in navList" :key="nav.name">
        <router-link class="navLinks text--primary" :to="nav.to" exact>{{
          nav.name
        }}</router-link>
      </v-list-item>
    </v-list>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
import { AppNavRoutes } from "@/types/navRoutes";

export default Vue.extend({
  name: "Header",
  data: () => ({
    navList: [
      {
        name: "Home",
        to: "/",
      },
      {
        name: "Blog",
        to: "/blog",
      },
      {
        name: "About",
        to: "/about",
      },
      {
        name: "GitHub",
        to: "https://github.com/phavor/jobbist",
      },
      {
        name: "Login",
        to: "/login",
      },
    ] as AppNavRoutes[],
  }),
});
</script>

<style lang="scss" scoped>
.navLinks {
  text-decoration: none;
}
</style>
