<template>
  <div>
    <div class="page-content">
      <div class="container px-0 maxx">
        <div class="row mb-0">
          <div class="container-login100">
            <div class="wrap-login100 p-t-85 p-b-20">
              <form
                action=""
                method="post"
                class="iwj-form iwj-login-form"
                @submit.prevent="submit"
              >
                <!-- <div class="iwj-respon-msg hide"></div> -->
                <h2>Mot de passe perdu</h2>

                <div class="container-field">
                  <div
                    class="iwj-field"
                    :class="{ 'form-group--error': $v.email.$error }"
                  ></div>
                  <div
                    class="wrap-input100 validate-input"
                    data-validate="Entrer l'adresse mail"
                  >
                    <input
                      class="input100"
                      type="email"
                      v-model.trim="$v.email.$model"
                    />
                    <span
                      class="focus-input100"
                      data-placeholder="Entrer l'adresse mail"
                    ></span>
                  </div>
                  <div
                    class="error m-b-35"
                    :style="
                      emailErrors != ''
                        ? { visibility: 'visible' }
                        : { visibility: 'hidden' }
                    "
                  >
                    {{ emailErrors[0] }}
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    class="login100-form-btn"
                    :disabled="!validForm"
                    :class="submitStatus == 'PENDING' ? 'pending' : ''"
                  >
                    <span v-if="submitStatus != 'PENDING'"
                      >OBTENIR UN NOUVEAU MOT DE PASSE</span
                    >
                    <pulse-loader
                      :color="colorLaoder"
                      :size="sizeLoader"
                      v-if="submitStatus == 'PENDING'"
                    ></pulse-loader>
                  </button>
                </div>
                <div class="login-register-account"></div>
              </form>
            </div>
          </div>
        </div>
        <!-- .row end -->
      </div>
      <!-- .container end -->
    </div>
    <!-- .page-content end -->
  </div>
</template>
<script>
import Vue from "vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "Login",
  components: { PulseLoader },
  layout: "frontLayoutNoFooter",
  data() {
    return {
      username: "",
      password: "",
      email: "",
      submitStatus: null,
      typeUser: "client",
      validForm: true,
      sizeLoader: "9px",
      colorLaoder: "#FFF",
    };
  },
  head: {
    title: "Transnet -  Connnexion",
    link: [
      {
        href: "/css/main.css",
        rel: "stylesheet",
        type: "text/css",
      },
      {
        href: "/css/util.css",
        rel: "stylesheet",
        type: "text/css",
      },
    ],
    script: [{ src: "/js/main.js" }],
  },
  validations: {
    username: {
      required,
    },
    password: {
      required,
    },
    email: {
      required,
      email,
    },
  },
  computed: {
    usernameErrors() {
      // this.test();
      const errors = [];
      if (!this.$v.username.$dirty) return errors;
      !this.$v.username.required &&
        errors.push("Le nom d'utilisateur est obligatoiree");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required &&
        errors.push("Le mot de passe est obigatoire");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.required && errors.push("L'email est obligatoire");
      this.$v.email.$invalid && errors.push("L'email incorrect");
      this.test();
      return errors;
    },
  },
  methods: {
    submit() {
      // this.$v.$touch();
      if (this.$v.email.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        this.submitStatus = "PENDING";
        this.registerApi(this.email);
      }
    },
    test() {
      if (!this.$v.email.$invalid) {
        this.validForm = true;
      } else {
        this.validForm = false;
      }
    },
    async registerApi(email) {
      var self = this;
      var data = new FormData();
      data.append("email", email);
      // data.append("lang", self.$i18n.locale);
      try {
        let response = await this.$axios.$post(
          `${this.$axios.defaults.baseURL}/forgot-pwd`,
          // 'https://f64ec901e40b.ngrok.io/api/login',
          {
            email: email,
            type: "api",
            route: "/confirmation-mot-passe",
          }
        );
        if (response.type == "error") {
          this.$mesFonctions.toaster({
            message: response.message,
            type: response.type,
          });
          this.submitStatus = "OK";
        } else {
          this.$mesFonctions.toaster({
            message: response.message,
            type: response.type,
          });
          this.submitStatus = "OK";
          self.$router.push('/login');
        }
      } catch (error) {
        this.$mesFonctions.toaster({
          message: "Une Erreur est survenue veuillez ressayer.",
          type: error.response.data.type,
        });
        this.submitStatus = "OK";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.container-login100 * {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.login100-form-avatar {
  width: 150px;
  height: 150px;
}

.container-login100 {
  padding: 10%;
}

h2 {
  margin-bottom: 80px;
  text-align: center;
  font-size: 30px;
  line-height: 30px;
  text-transform: none;
  text-align: center;
}
</style>