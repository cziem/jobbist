<template>
  <v-text-field
    v-bind="$attrs"
    :v-model="model"
    :placeholder="placeholder"
    rounded
    outlined
  ></v-text-field>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "TextField",
  props: {
    placeholder: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
  },
});
</script>
