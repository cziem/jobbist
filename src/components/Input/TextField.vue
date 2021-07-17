<template>
  <v-text-field
    v-bind="$attrs"
    :v-model="model"
    :placeholder="placeholder"
    class="custom__textfield"
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

<style lang="scss">
.custom__textfield {
  .v-input__control .v-input__slot {
    min-height: 45px;

    .v-input__append-outer,
    .v-input__append-inner,
    .v-input__prepend-outer,
    .v-input__prepend-inner {
      margin-top: 10px;
    }
  }
}
</style>
