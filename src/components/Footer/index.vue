<template>
  <v-footer color="white" class="flex-column pb-5" padless>
    <v-container fluid>
      <v-row justify="center">
        <v-col class="teal lighten-2 col-12 col-sm-6 py-1 py-sm-12">
          <v-list class="teal lighten-2 px-5 px-md-16" dark>
            <v-list-item
              class="white--text"
              v-for="(contact, idx) in contactLinks"
              :key="`${idx}__${contact.text}`"
            >
              <v-icon left>{{ contact.icon }}</v-icon>
              <p>{{ contact.text }}</p>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col class="col-12 col-sm-6 d-flex grey lighten-4 py-5 py-sm-12">
          <v-list class="d-flex grey lighten-4 px-5 px-md-16 socialLinks">
            <v-list-item
              v-for="(socialLink, idx) in socialsLinks"
              :key="`${idx}__${socialLink.href}`"
            >
              <a
                class="text-decoration-none anchor"
                target="_blank"
                :href="socialLink.href"
                rel="noopener noreferrer"
              >
                <v-icon medium>{{ socialLink.icon }}</v-icon>
              </a>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>

    <v-row justify="center" class="mt-2">
      <v-col class="col-auto" justify="center" align-self="center">
        <p class="text-body-2 text--secondary">
          {{ copyright }} Copyright by
          <strong class="text-uppercase">
            <span class="font-weight-light">Job</span>
            <span>bist</span>
          </strong>
        </p>
      </v-col>
      <v-divider inset vertical />
      <v-col class="col-auto">
        <span class="teal--text">
          Powered by
          <strong class="text lighten-4">Kodeinstincts</strong>
        </span>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Footer",
  data: () => ({
    copyright: new Date().getFullYear(),
    contactLinks: [
      {
        text: "12 G. E. Emeh WBHE, Abia, Nigeria",
        icon: "mdi-map-marker-radius",
      },
      {
        text: "2347 038 0600 70",
        icon: "mdi-phone",
      },
      {
        text: "support@jobbist.com",
        icon: "mdi-email",
      },
      {
        text: "123-456 / 456-789",
        icon: "mdi-fax",
      },
    ],
    socialsLinks: [
      {
        href: "https://facebook.com/jobbist",
        icon: "mdi-facebook",
      },
      {
        href: "https://twitter.com/jobbist",
        icon: "mdi-twitter",
      },
      {
        href: "https://linkedin.com/in/jobbist",
        icon: "mdi-linkedin",
      },
      {
        href: "https://youtube.com/jobbist",
        icon: "mdi-youtube",
      },
      {
        href: "https://github.com/phavor/jobbist",
        icon: "mdi-github",
      },
    ],
  }),
});
</script>

<style lang="scss" scoped>
.socialLinks {
  width: 100%;
  /* flex-wrap: wrap; */
}
.anchor i.v-icon:hover {
  color: #4db6ac;
}
</style>
