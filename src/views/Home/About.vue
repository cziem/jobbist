<template>
  <section class="about">
    <v-container class="about-container px-3">
      <v-row>
        <v-col md="5" class="px-xs-10">
          <div class="about-content d-flex">
            <div>
              <h2
                class="text-h5 text-md-h4 text-uppercase font-weight-light mb-5"
              >
                about the <strong>jobbist</strong>
              </h2>
              <p class="text-body-1 text--secondary mb-5 caption-about">
                JOBBIST is dynamic, high-performance and easy to use
                <em>Job Application Platform</em>. Jobbist is built with your
                flexibility in mind, easy customizable job filters and a great
                personal journal to accompany you on your journey.
              </p>
              <div class="row">
                <div class="col-6 info-ticks">
                  <v-list color="transparent">
                    <v-list-item class="px-0 mb-7 about-list">
                      <div class="about-icon">
                        <div class="icon-hover">
                          <v-icon>mdi-tune-vertical</v-icon>
                        </div>
                      </div>
                      <div class="text-capitalize">
                        <h3 class="font-weight-regular">Easy customize</h3>
                      </div>
                    </v-list-item>
                    <v-list-item class="px-0 mb-7 about-list">
                      <div class="about-icon">
                        <div class="icon-hover">
                          <v-icon>mdi-cached</v-icon>
                        </div>
                      </div>
                      <div class="text-capitalize">
                        <h3 class="font-weight-regular">Upgrade You</h3>
                      </div>
                    </v-list-item>
                  </v-list>
                </div>
                <div class="col-6 info-ticks">
                  <v-list color="transparent">
                    <v-list-item class="px-0 mb-7 about-list">
                      <div class="about-icon">
                        <div class="icon-hover">
                          <v-icon>mdi-code-tags-check</v-icon>
                        </div>
                      </div>
                      <div class="text-capitalize">
                        <h3 class="font-weight-regular">Nice Design</h3>
                      </div>
                    </v-list-item>
                    <v-list-item class="px-0 mb-7 about-list">
                      <div class="about-icon">
                        <div class="icon-hover">
                          <v-icon>mdi-tune-variant</v-icon>
                        </div>
                      </div>
                      <div class="text-capitalize">
                        <h3 class="font-weight-regular">Stay Ahead</h3>
                      </div>
                    </v-list-item>
                  </v-list>
                </div>
              </div>
              <div class="top-margin">
                <Button text="View More" type="button" />
              </div>
            </div>
          </div>
        </v-col>
        <v-spacer></v-spacer>
        <v-col md="6" class="d-none d-md-flex">
          <div class="about-right">
            <div class="about-phone">
              <v-img
                src="../../assets/phone.png"
                alt="about us"
                class="img-fluid"
              >
              </v-img>
            </div>
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
  name: "About Section",
  components: {
    Button,
  },
});
</script>

<style lang="scss" scoped>
.about {
  padding: 100px 0;
  background: url("../../assets/about-bg.png") no-repeat;
  background-size: cover;
}
.about-container {
  @media screen and (min-width: 1200px) {
    max-width: 1140px;
  }
}
.about-content {
  height: 100%;
  align-items: center;
}
.caption-about {
  line-height: 1.8em;
}
.about-right {
  background: #18e7d3;
  background: linear-gradient(to bottom, #18e7d3 0, #19d0de 99%);
  border-radius: 100%;
  height: 550px;
  width: 550px;
  float: right;
  display: flex;
  align-items: center;
  justify-content: center;
}
.info-ticks {
  position: relative;
}
.about-icon {
  margin-right: 1rem;
}
.icon-hover {
  height: 45px;
  width: 45px;
  border-radius: 50%;
  border: 1px solid #e6e6e6;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
}
.about-list:hover .icon-hover {
  background: linear-gradient(to bottom, #18e7d3 0, #19d0de 99%);

  i.v-icon {
    color: white;
  }
}
</style>
