<template>
  <section class="subscribe">
    <v-container class="subscribe-container">
      <v-row align="center" justify="center">
        <v-col sm="8" lg="6" class="text-center">
          <div class="centralize px-5 px-sm-1">
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
            <Button text="Send" type="button" size="large" large />
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
.subscribe {
  height: 40em;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, #18e7d3 0, #19d0de 99%);

  &:before {
    content: "";
    top: 35px;
    right: 0;
    left: 0;
    bottom: -20px;
    position: absolute;
    /* background: white; */
    background-image: linear-gradient(45deg, #f5f5f5, #ffffff);
    transform: skewY(-10deg);

    &:hover {
      background: red;
    }
  }
}
.subscribe-container {
  position: relative;
}
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
