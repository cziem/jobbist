<template>
  <v-text-field
    dark
    outlined
    color="white"
    :placeholder="placeholder"
    append-icon="mdi-magnify"
    prepend-inner-icon="mdi-parachute"
  >
  </v-text-field>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Search Box",
  data: () => ({
    placeholder: "Search now...",
  }),
});
</script>

<style></style>
