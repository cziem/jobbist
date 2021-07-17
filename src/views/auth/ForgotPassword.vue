<template>
  <div>
    <div class="mx-12 mx-md-15 text-center">
      <h3 class="text-uppercase text-h4 font-weight-light mb-4">
        Reset Your <strong>Password</strong>
      </h3>
      <p class="text-capitalize text-body-2 text--secondary mb-4 subtitle">
        Let's help you get your JOB<span>BIST</span> account back
      </p>
    </div>

    <div class="mx-6 mt-12 hide__away__main">
      <div class="floating__btn__wrap">
        <v-btn
          @click="goLogin"
          class="text-uppercase text--white text-caption"
          dark
          >Login</v-btn
        >
      </div>

      <v-card class="pa-12 auth-card" rounded="0" flat>
        <v-form>
          <p class="text--secondary mb-2 text-uppercase">Enter your e-mail</p>
          <TextField placeholder="hello@jobbist.com" model="email" required />
          <Button text="Send" class="send" />
        </v-form>

        <v-row align="center" justify="center" class="my-8">
          <p class="text--secondary text-uppercase text-body-2">
            If you didn't recieve the OTP?
            <a
              href="/#resend"
              class="
                text-decoration-none
                red--text
                text--lighten-1
                font-weight-bold
              "
              >RESEND</a
            >
          </p>
        </v-row>

        <v-row
          align="center"
          justify="center"
          class="grey lighten-4 my-8 px-4 py-8 otp__wrap"
        >
          <p class="text--secondary text-capitalized text-body-2 mb-4">
            Enter OTP
          </p>

          <v-row align="center" justify="center" class="otp__input__wrap">
            <v-otp-input
              ref="otpInput"
              class="otp-input"
              separator=""
              :num-inputs="4"
              :should-auto-focus="true"
              :is-input-num="true"
              @on-change="handleOnChange"
              @on-complete="handleOnComplete"
            />
          </v-row>
        </v-row>

        <v-form>
          <TextField
            type="password"
            placeholder="Password"
            model="password"
            required
          />
          <TextField
            type="password"
            placeholder="Retype Password"
            model="confirm-password"
            append-icon="mdi-eye-off"
            required
          />
          <v-row align="center" justify="center">
            <Button text="Done" />
          </v-row>
        </v-form>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TextField from "@/components/Input/TextField.vue";
import Button from "@/components/Button/index.vue";

export default Vue.extend({
  name: "ForgotPassword",
  components: {
    TextField,
    Button,
  },
  data: () => ({
    valid: false,
    acceptTC: false,
    email: "",
    username: "",
    password: "",
  }),
  methods: {
    goLogin() {
      this.$router.push("/login");
    },
    handleOnComplete(value) {
      console.log("OTP completed: ", value);
    },
    handleOnChange(value) {
      console.log("OTP changed: ", value);
    },
  },
});
</script>

<style lang="scss" scoped>
.signup__text {
  font-weight: 300;
}
.subtitle {
  line-height: 1.8;
  span {
    font-weight: 500;
  }
}
.hide__away__main {
  position: relative;

  &:hover .floating__btn__wrap {
    display: block;
    transform: translateY(0);
  }
}

.floating__btn__wrap {
  position: absolute;
  top: -32px;
  right: 10px;
  transition: transform 0.3s ease-in-out;
  transform: translateY(100%);

  button {
    background: linear-gradient(to bottom, #18e7d3 0, #19d0de 99%);
  }
}

.auth-card {
  border-top: 3px solid #1ad7dd;
}
.forgot-password {
  color: #1ad7dd;
}

.send {
  width: 100%;
}

.otp__wrap {
  flex-direction: column;
  border-radius: 5px;
}
.otp__input__wrap {
  width: 100%;
  margin: 0.5em auto;
}
</style>
