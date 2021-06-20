<template>
  <div>
    <div class="mx-12 mx-md-15 text-center">
      <h3 class="text-uppercase text-h4 font-weight-400 mb-4">Login</h3>
      <p class="text-capitalize text-body-2 text--secondary mb-4 subtitle">
        Welcome To JOB<span>BIST</span>, Please Login With Your Personal Account
        Information.
      </p>
    </div>

    <v-card class="pa-12 mx-6 mt-12 auth-card" rounded="0" flat>
      <v-form>
        <TextField
          placeholder="hello@jobbist.com"
          model="email"
          :rules="rules.email"
          required
        />
        <TextField
          placeholder="password"
          model="password"
          :rules="rules.password"
          append-icon="mdi-eye-off"
          required
        />

        <v-row align="center" justify="center" class="px-2">
          <v-col>
            <v-checkbox v-model="rememberMe" label="Remember me"></v-checkbox>
          </v-col>
          <v-col>
            <v-row justify="end" class="mr-1">
              <router-link
                color="#1ad7dd"
                class="text-decoration-none forgot-password"
                to="/forgot-password"
                >forgot password?</router-link
              >
            </v-row>
          </v-col>
        </v-row>

        <v-row align="center" justify="center">
          <Button text="Login" />
        </v-row>
      </v-form>

      <v-row align="center" justify="center" class="my-5">
        <div class="or-separtor">
          <span>or</span>
        </div>
        <v-col sm="12">
          <v-row align="center" justify="center">
            <p class="text-uppercase text--secondary text-caption">
              sign up with:
            </p>
          </v-row>
        </v-col>

        <v-col sm="8" class="mt-2">
          <v-row align="center" justify="space-around">
            <v-btn class="text--white btn-facebook" dark rounded depressed
              >Facebook</v-btn
            >
            <v-btn class="text--white btn-google" dark rounded depressed
              >Google</v-btn
            >
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TextField from "@/components/Input/TextField.vue";
import Button from "@/components/Button/index.vue";

export default Vue.extend({
  name: "Login",
  components: {
    TextField,
    Button,
  },
  data: () => ({
    valid: false,
    rememberMe: false,
    email: "",
    password: "",
    rules: {
      email: [
        (v: KeyboardEvent) => !!v || "E-mail is required",
        (v: KeyboardEvent) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      password: [(v: KeyboardEvent) => !!v || "Password is required"],
    },
  }),
});
</script>

<style lang="scss" scoped>
.subtitle {
  line-height: 1.8;
  span {
    font-weight: 500;
  }
}
.auth-card {
  border-top: 3px solid #1ad7dd;
}
.forgot-password {
  color: #1ad7dd;
}
.or-separtor {
  position: relative;
  padding: 10px 0;
  text-align: center;
  width: 90%;

  &:before {
    top: 50%;
    left: 0;
    z-index: 1;
    height: 1px;
    width: 100%;
    content: "";
    margin-top: 1px;
    position: absolute;
    background: rgba(40, 56, 76, 0.1);
  }

  span {
    text-transform: uppercase;
    display: inline-block;
    background: #fff;
    position: relative;
    font-size: 0.81em;
    color: #868686;
    padding: 0 8px;
    z-index: 2;
  }
}
.btn-facebook {
  background-color: #3b5998;
  background-image: linear-gradient(45deg, #3b5998, #3c769c);
}
.btn-google {
  background-color: #d85040;
  background-image: linear-gradient(45deg, #d85040, #ff6e63);
}
</style>
