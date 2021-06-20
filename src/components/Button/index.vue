<template>
  <v-btn
    class="btn"
    :type="type"
    v-bind="$attrs"
    v-bind:props="$props"
    dark
    rounded
    depressed
    >{{ text }}</v-btn
  >
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true,
    },
    type: String,
  },
  name: "Button",
});
</script>

<style lang="scss" scoped>
.btn {
  background: linear-gradient(to bottom, #18e7d3 0, #19d0de 99%);
}
</style>
