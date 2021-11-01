<template>
  <div>
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
        <input class="input100" type="text" v-model.trim="$v.username.$model" />
        <span class="focus-input100" data-placeholder="Nom d'utilisateur ou email"></span>
      </div>
      <div
        class="error m-b-35"
        :style="
          usernameErrors != '' ? { visibility: 'visible' } : { visibility: 'hidden' }
        "
      >
        Entrez le nom d'utilisateur ou l'email
      </div>

      <div class="wrap-input100 validate-input m-b-0" data-validate="Enter password">
        <input
          class="input100"
          type="password"
          v-model.trim="$v.password.$model"
          autocomplete="new-password"
        />
        <span class="focus-input100" data-placeholder="Mot de passe"></span>
      </div>
      <div
        class="error m-b-50"
        :style="
          passwordErrors != '' ? { visibility: 'visible' } : { visibility: 'hidden' }
        "
      >
        Entrez le nom d'utilisateur ou l'email
      </div>
      <div class="container-login100-form-btn">
        <button
          class="login100-form-btn"
          :class="submitStatus == 'PENDING' ? 'pending' : ''"
        >
          <pulse-loader
            :color="colorLaoder"
            :size="sizeLoader"
            v-if="submitStatus == 'PENDING'"
          ></pulse-loader>
          <span v-if="submitStatus != 'PENDING'">Se connecter</span>
        </button>
      </div>
      <ul class="login-more p-t-50 text-center">
        <NuxtLink :to="'/forgot-password'" class="txt2"> Mot de passe oublié </NuxtLink>
        <br />
        <span class="txt1"> Je n'ai pas de compte </span>
        <NuxtLink :to="'/register'" class="txt2"> S'inscrire </NuxtLink>
      </ul>
    </form>
  </div>
</template>
<script>
import Vue from "vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);
import { required, email, sameAs } from "vuelidate/lib/validators";

export default {
  components: { PulseLoader },
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
      !this.$v.username.required && errors.push("Le nom d'utilisateur est obligatoire");
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
      !this.$v.cpassword.sameAsPassword && errors.push("header_fo.pwd_error_different");
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
        await this.registerApi(this.username, this.email, this.typeUser, this.cpassword);
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
        if (response.type == "success") {
          setTimeout(() => {
            this.$router.push("/login");
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
