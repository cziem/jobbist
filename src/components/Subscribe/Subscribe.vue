<template>
  <section class="subscribe mb-5">
    <v-container>
      <v-row align="center" justify="center">
        <v-col sm="8" lg="6" class="text-center">
          <div class="centralize">
            <div class="icon-wrap">
              <v-img
                src="../../assets/newsletter.png"
                alt="newsletter"
                class="img-fluid"
              ></v-img>
            </div>
            <h3 class="text-uppercase text-md-h4 font-weight-light my-4">
              Subscribe to <strong>NewsLetter</strong>
            </h3>
            <p class="grey--text">
              There Are Many Variations Of Passages Of Lorem Ipsum Available,
              But The Majority Have Suffered Alteration In Some Form, By
              Injected Humour.
            </p>
            <div class="mt-8 input-wrap">
              <v-text-field
                placeholder="YOUR EMAIL ADDRESS:"
                rounded
                outlined
              ></v-text-field>
            </div>
            <Button text="Send" type="button" size="large" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import Button from "@/components/Button/index.vue";

export default Vue.extend({
  name: "Subscribe",
  components: {
    Button,
  },
});
</script>

<style lang="scss" scoped>
.centralize {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.icon-wrap {
  width: 55px;
  height: 55px;
}
.input-wrap {
  width: 100%;
}
</style>
