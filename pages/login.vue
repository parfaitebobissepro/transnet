<template>
  <div>
    <div class="page-content">
      <div class="container px-0 maxx">
        <div class="row mb-0">
          <div class="container-login100">
            <div class="wrap-login100 p-t-85 p-b-20">
              <form
                class="login100-form validate-form"
                action=""
                method="post"
                @submit.prevent="submit"
              >
                <span class="login100-form-avatar">
                  <img src="img/images.png" alt="AVATAR" />
                </span>
                <div
                  class="wrap-input100 validate-input m-t-50 m-b-0"
                  data-validate="Enter username"
                >
                  <input
                    class="input100"
                    type="text"
                    v-model.trim="$v.username.$model"
                  />
                  <span
                    class="focus-input100"
                    data-placeholder="Nom d'utilisateur ou email"
                  ></span>
                </div>
                <div
                  class="error m-b-35"
                  :style="
                    usernameErrors != ''
                      ? { visibility: 'visible' }
                      : { visibility: 'hidden' }
                  "
                >
                  Entrez le nom d'utilisateur ou l'email
                </div>

                <div
                  class="wrap-input100 validate-input m-b-0"
                  data-validate="Enter password"
                >
                  <input
                    class="input100"
                    type="password"
                    v-model.trim="$v.password.$model"
                    autocomplete="new-password"
                  />
                  <span
                    class="focus-input100"
                    data-placeholder="Mot de passe"
                  ></span>
                </div>
                <div
                  class="error m-b-50"
                  :style="
                    passwordErrors != ''
                      ? { visibility: 'visible' }
                      : { visibility: 'hidden' }
                  "
                >
                  Entrez le nom d'utilisateur ou l'email
                </div>
                <div class="container-login100-form-btn">
                  <button class="login100-form-btn">
                    <pulse-loader
                      :color="colorLaoder"
                      :size="sizeLoader"
                      v-if="submitStatus == 'PENDING'"
                      :class="submitStatus == 'PENDING' ? 'pending' : ''"
                    ></pulse-loader>
                    <span v-if="submitStatus != 'PENDING'">Se connecter</span>
                  </button>
                </div>
                <ul class="login-more p-t-50 text-center">
                  <NuxtLink :to="'/forgot-password'" class="txt2"> Mot de passe oublié </NuxtLink>
                  <br />
                  <span class="txt1"> Je n'ai pas de compte </span>
                  <NuxtLink :to="'/register'" class="txt2">
                    S'inscrire
                  </NuxtLink>
                </ul>
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
import { required} from "vuelidate/lib/validators";


export default {
  name: "Login",
  components: { PulseLoader },
  layout: "frontLayoutNoFooter",
  data() {
    return {
      username: "",
      password: "",
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
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (this.$v.username.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        this.submitStatus = "PENDING";
        this.loginApi(this.username, this.password);
      }
    },
    async loginApi(email, password) {
      var data = {
        email: email,
        password: password,
        // lang: this.$i18n.locale,
      };
      const response = await this.$store.dispatch("auth/login", data);
      console.log("login result", response);
      this.submitStatus = "OK";

      if (response.type == null) {
        this.$mesFonctions.toaster({
          message: "Une erreur est survenue",
          type: "error",
        });
      } else {
          console.log(response.type);
          console.log(this.$mesFonctions);
        this.$mesFonctions.toaster({
          message: response.message,
          type: response.type,
        });
        if (response.type == "success") {
          var user = {
            logged: true,
            data: response.data,
            welcome_message: response.welcome_message,
          };
          console.log(user);
          this.allowUser(user);
        }
      }
    },

    async allowUser(user) {
      this.$store.dispatch("auth/setAuthStatus", user);
      if (user.data.type == "client") {
        // this.$router.push("/dashboard/client");
        window.location.replace("/dashboard/client");
      } else {
        window.location.replace("/dashboard/tansporteur");
        // this.$router.push("/dashboard/tansporteur");
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
</style>