<template>
  <v-app>
    <Header />
    <v-main id="main-content">
      <!-- <v-sheet id="main-content" class="overflow-y-auto" max-height="150vh"> -->
      <slot />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "@/components/Header/index.vue";

export default Vue.extend({
  name: "AppLayout",
  components: {
    Header,
  },
});
</script>
