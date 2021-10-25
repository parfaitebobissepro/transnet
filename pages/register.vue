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
                class="login100-form validate-form"
                @submit.prevent="submit"
              >
                <span class="login100-form-avatar">
                  <img src="img/images.png" alt="AVATAR" />
                </span>
                <div
                  class="wrap-input100 validate-input m-t-50"
                  data-validate="Entrer le nom d'utilisateur"
                >
                  <input
                    class="input100"
                    type="text"
                    v-model.trim="$v.username.$model"
                  />
                  <span
                    class="focus-input100"
                    data-placeholder="Entrer le nom d'utilisateur"
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
                  {{ usernameErrors[0] }}
                </div>
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
                <div
                  class="wrap-input100 validate-input"
                  data-validate="Entrer le mot de passe"
                >
                  <input
                    class="input100"
                    type="password"
                    v-model.trim="$v.password.$model"
                    autocomplete="new-password"
                  />
                  <span
                    class="focus-input100"
                    data-placeholder="Entrer le mot de passe"
                  ></span>
                </div>
                <div
                  class="error m-b-35"
                  :style="
                    passwordErrors != ''
                      ? { visibility: 'visible' }
                      : { visibility: 'hidden' }
                  "
                >
                  {{ passwordErrors[0] }}
                </div>
                <div
                  class="wrap-input100 validate-input"
                  data-validate="Confirmer le mot de passe"
                >
                  <input
                    class="input100"
                    type="password"
                    v-model.trim="$v.cpassword.$model"
                    autocomplete="new-password"
                  />
                  <span
                    class="focus-input100"
                    data-placeholder="Confirmer le mot de passe"
                  ></span>
                </div>
                <div
                  class="error m-b-5"
                  :style="
                    cpasswordErrors != ''
                      ? { visibility: 'visible' }
                      : { visibility: 'hidden' }
                  "
                >
                  Les mots de passes ne correspondent pas
                </div>
                <div class="toggle m-b-50">
                  <input
                    type="radio"
                    v-model.trim="typeUser"
                    value="client"
                    id="client"
                    checked="checked"
                  />
                  <label for="client">Client</label>
                  <input
                    type="radio"
                    v-model.trim="typeUser"
                    value="transporteur"
                    id="transporteur"
                  />
                  <label for="transporteur">Transporteur</label>
                </div>
                <div class="container-login100-form-btn">
                  <button
                    class="login100-form-btn"
                    type="submit"
                    :disabled="!validForm"
                    :class="submitStatus == 'PENDING' ? 'pending' : ''"
                  >
                    <pulse-loader
                      :color="colorLaoder"
                      :size="sizeLoader"
                      v-if="submitStatus == 'PENDING'"
                    ></pulse-loader>
                    <span v-if="submitStatus != 'PENDING'">S'inscrire</span>
                  </button>
                </div>
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
import { required, email, sameAs } from "vuelidate/lib/validators";

export default {
  name: "Signin",
  layout: "frontLayoutNoFooter",
  components:{PulseLoader},
  head: {
    title: "Transnet -  Inscription",
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
  data() {
    return {
      username: "",
      email: "",
      password: "",
      cpassword: "",
      typeUser: "client",
      submitStatus: null,
      validForm: false,
      sizeLoader: "9px",
      colorLaoder: "#FFF",
    };
  },
  validations: {
    username: {
      required,
    },
    email: {
      required,
      email,
    },
    password: {
      required,
      goodPassword: (password) => {
        return /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W|_]){1,})(?!.*\s).{8,50}$/.test(
          password
        );
      },
    },
    cpassword: {
      sameAsPassword: sameAs("password"),
    },
  },
  computed: {
    usernameErrors() {
      const errors = [];
      if (!this.$v.username.$dirty) return errors;
      !this.$v.username.required &&
        errors.push("Le nom d'utilisateur est obligatoire");
      this.test();
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

    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push("le mot de passe est requis");
      !this.$v.password.goodPassword &&
        errors.push(
          "Le mot de passe doit comporter, au moins 08 caractères dont au minimum une majuscule, une minuscule, un chiffre et un caractère spécial"
        );
      this.test();
      return errors;
    },

    cpasswordErrors() {
      const errors = [];
      if (!this.$v.cpassword.$dirty) return errors;
      !this.$v.cpassword.sameAsPassword &&
        errors.push("header_fo.pwd_error_different");
      this.test();
      return errors;
    },
  },
  methods: {
    async submit() {
      if (
        !this.$v.username.$invalid &&
        !this.$v.email.$invalid &&
        !this.$v.password.$invalid &&
        !this.$v.cpassword.$invalid
      ) {
        this.submitStatus = "PENDING";
        await this.registerApi(
          this.username,
          this.email,
          this.typeUser,
          this.cpassword
        );
        this.submitStatus = "OK";
      }
    },

    test() {
      if (
        !this.$v.username.$invalid &&
        !this.$v.email.$invalid &&
        !this.$v.password.$invalid &&
        !this.$v.cpassword.$invalid
      ) {
        this.validForm = true;
      } else {
        this.validForm = false;
      }
    },

    async registerApi(name, email, type, password) {
      var data = new FormData();
      data.append("username", this.slugify(name));
      data.append("name", name);
      data.append("email", email);
      data.append("type", type);
      data.append("password", password);
      //   data.append("lang", this.$i18n.locale);
      // console.log(data);
      let response = await this.$store.dispatch("auth/register", data);

      if (response.type == null) {
        this.$mesFonctions.toaster({
          message: "Une erreur est survenue",
          type: "error",
        });
      } else {
        this.$mesFonctions.toaster({
          message: response.message,
          type: response.type,
        });
        if( response.type == 'success'){
          setTimeout(() => {
            this.$router.push('/login');
          }, 1000);
        }
      }

    },
    slugify(text) {
      return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, "-") // Replace spaces with -
        .replace(/[^\w\-]+/g, "") // Remove all non-word chars
        .replace(/\-\-+/g, "-") // Replace multiple - with single -
        .replace(/^-+/, "") // Trim - from start of text
        .replace(/-+$/, ""); // Trim - from end of text
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

/* Toogle */

@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600");

/* VARS */
$open-sans: "Open Sans", "Helvetica", sans-serif;

$darkNavy: #213140;
$teal1: #66b3fb;
$teal2: #4b9dea;
$charcoal: #555555;
$gold: #b6985a;

$activeShadow: 0 0 10px rgba($teal1, 0.5);

/* MIXINS */
@mixin focusOutline {
  outline: dotted 1px #ccc;
  outline-offset: 0.45rem;
}
@mixin hideInput {
  width: 0;
  height: 0;
  position: absolute;
  left: -9999px;
}
@mixin breakpoint($point) {
  @if $point == 1100 {
    @media (max-width: 1100px) {
      @content;
    }
  } @else if $point == 800 {
    @media (max-width: 800px) {
      @content;
    }
  }
}

/* STYLE THE HTML ELEMENTS (INCLUDES RESETS FOR THE DEFAULT FIELDSET AND LEGEND STYLES) */
body,
html {
  margin: 0;
  padding: 1rem;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-family: $open-sans;
  -webkit-font-smoothing: antialiased;
  background-color: #eee;
}
fieldset {
  margin: 0;
  padding: 2rem;
  box-sizing: border-box;
  display: block;
  border: none;
  border: solid 1px #ccc;
  min-width: 0;
  background-color: #fff;
  legend {
    margin: 0 0 1.5rem;
    padding: 0;
    width: 100%;
    float: left;
    display: table;
    font-size: 1.5rem;
    line-height: 140%;
    font-weight: 600;
    color: #333;
    + * {
      clear: both;
    }
  }
}
body:not(:-moz-handler-blocked) fieldset {
  display: table-cell;
}

/* TOGGLE STYLING */
.toggle {
  margin: 0 0 1.5rem;
  box-sizing: border-box;
  font-size: 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: stretch;
  margin-bottom: 50px;
  margin-top: 15px;
  input {
    @include hideInput;
  }
  input + label {
    margin: 0;
    padding: 0.75rem 2rem;
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    border: solid 1px #ddd;
    background-color: #fff;
    font-size: 1rem;
    line-height: 140%;
    font-weight: 600;
    text-align: center;
    box-shadow: 0 0 0 rgba(255, 255, 255, 0);
    transition: border-color 0.15s ease-out, color 0.25s ease-out,
      background-color 0.15s ease-out, box-shadow 0.15s ease-out;
    cursor: pointer;

    /* ADD THESE PROPERTIES TO SWITCH FROM AUTO WIDTH TO FULL WIDTH */
    /*flex: 0 0 50%; display: flex; justify-content: center; align-items: center;*/
    /* ----- */

    &:first-of-type {
      border-radius: 6px 0 0 6px;
      border-right: none;
    }
    &:last-of-type {
      border-radius: 0 6px 6px 0;
      border-left: none;
    }
  }
  input:hover + label {
    border-color: $darkNavy;
  }
  input:checked + label {
    background-color: $teal2;
    color: #fff;
    box-shadow: $activeShadow;
    border-color: $teal2;
    z-index: 1;
  }
  input:focus + label {
    @include focusOutline;
  }

  @include breakpoint(800) {
    input + label {
      padding: 0.75rem 0.25rem;
      flex: 0 0 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

/* STYLING FOR THE STATUS HELPER TEXT FOR THE DEMO */
.status {
  margin: 0;
  font-size: 1rem;
  font-weight: 400;
  span {
    font-weight: 600;
    color: $gold;
    &:first-of-type {
      display: inline;
    }
    &:last-of-type {
      display: none;
    }
  }
  @include breakpoint(800) {
    span {
      &:first-of-type {
        display: none;
      }
      &:last-of-type {
        display: inline;
      }
    }
  }
}
</style>