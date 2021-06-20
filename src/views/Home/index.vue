<template>
  <div>
    <Hero />
    <About />
    <Subscribe />
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
