<template>
  <div>
    <Hero />
    <!-- <p>This is the home page</p> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Hero from "./Hero.vue";

export default Vue.extend({
  name: "Home",

  components: {
    Hero,
  },
});
</script>
