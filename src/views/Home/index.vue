<template>
  <div>
    <Hero />
    <About />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Hero from "./Hero.vue";
import About from "./About.vue";

export default Vue.extend({
  name: "Home",

  components: {
    Hero,
    About,
  },
});
</script>
