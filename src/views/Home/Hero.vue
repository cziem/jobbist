<template>
  <v-container class="d-flex hero-container" fluid>
    <v-row
      align="center"
      justify="center"
      class="flex-column hero-content white--text"
      dark
    >
      <p class="text-h3 text-md-h1 mb-8 text-capitalize">End your job search</p>
      <p class="text-body-1 text-md-h5 font-weight-light lead-text">
        Put yourself in front of your next company, Jobbist makes job search
        elegant and stress-free
      </p>

      <v-col col="8" sm="8" md="6" class="mt-10">
        <search-box />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import SearchBox from "@/components/SearchBox.vue";
import Vue from "vue";

export default Vue.extend({
  name: "Hero",
  components: {
    SearchBox,
  },
});
</script>

<style lang="scss" scoped>
.hero-container {
  height: calc(100vh - 64px);
  align-items: center;
  background: url("../../assets/vr-1.jpg") no-repeat center center;
  background-size: cover;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.55);
  }
}
.hero-content {
  z-index: 4;
}
.lead-text {
  width: 40%;
  text-align: center;

  @media screen and (max-width: 960px) {
    width: 75%;
  }
}
</style>
