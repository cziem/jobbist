<template>
  <div>
    <Hero />
    <About />
    <!-- Featured Jobs -->
    <!-- Timeline (How you land your next job) [1. search 2. Journal 3. interview 4a. accept letter 4b. Repeat process] -->
    <!-- Actively Recruiting (Companies actively hiring now!) -->
    <!-- Featured blogs -->
    <Subscribe />
    <!-- Quote of the day -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Hero from "./Hero.vue";
import About from "./About.vue";
import Subscribe from "@/components/Subscribe/Subscribe.vue";

export default Vue.extend({
  name: "Home",

  components: {
    Hero,
    About,
    Subscribe,
  },
});
</script>
