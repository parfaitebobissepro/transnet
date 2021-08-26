<template>
    <div>
        <div class="page-content">
            <div class="container px-0 maxx">
                <div class="row mb-0">
                    <div class="container-login100">
                        <div class="wrap-login100 p-t-85 p-b-20">
                            <form class="login100-form validate-form">
                                <span class="login100-form-avatar">
                                    <img src="img/unsplash/avatar-01.jpg" alt="AVATAR">
                                </span>
                                <div class="wrap-input100 validate-input m-t-85" data-validate="Entrer le nom d'utilisateur">
                                    <input class="input100" type="text" v-model.trim="$v.username.$model">
                                    <span class="focus-input100" data-placeholder="Entrer le nom d'utilisateur"></span>
                                </div>
                                <div class="error m-b-35" :style="usernameErrors != '' ? {'visibility':'visible'} : {'visibility':'hidden'}">
                                    Le nom d'utilisateur est obligatoire
                                </div>
                                <div class="wrap-input100 validate-input" data-validate="Entrer l'adresse mail">
                                    <input class="input100" type="email" v-model.trim="$v.email.$model">
                                    <span class="focus-input100" data-placeholder="Entrer l'adresse mail"></span>
                                </div>
                                <div class="error m-b-35" :style="emailErrors != '' ? {'visibility':'visible'} : {'visibility':'hidden'}">
                                    L'email est obligatoire
                                </div>
                                <div class="wrap-input100 validate-input" data-validate="Entrer le mot de passe">
                                    <input class="input100" type="password" v-model.trim="$v.password.$model">
                                    <span class="focus-input100" data-placeholder="Entrer le mot de passe"></span>
                                </div>
                                <div class="error m-b-35" :style="passwordErrors != '' ? {'visibility':'visible'} : {'visibility':'hidden'}">
                                    {{ passwordErrors[0] }}
                                </div>
                                <div class="wrap-input100 validate-input" data-validate="Confirmer le mot de passe">
                                    <input class="input100" type="password" v-model.trim="$v.cpassword.$model" autocomplete="new-password">
                                    <span class="focus-input100" data-placeholder="Confirmer le mot de passe"></span>
                                </div>
                                <div class="error m-b-50" :style="cpasswordErrors != '' ? {'visibility':'visible'} : {'visibility':'hidden'}">
                                    Les mots de passes ne correspondent pas
                                </div>
                                <div class="container-login100-form-btn">
                                    <button class="login100-form-btn">
                                        S'inscrire
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div><!-- .row end -->
            </div><!-- .container end -->
        </div><!-- .page-content end -->
    </div>
</template>
<script>
import Vue from "vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
  import {
    required,
    minLength,
    between,
    email,
    sameAs
  } from "vuelidate/lib/validators";
export default {
    name: 'Signin',
    layout: 'frontLayoutNoFooter',
    head: {
        title: "Transnet -  Inscription",
        link: [
            {
                href: "/css/main.css",
                rel: "stylesheet",
                type: "text/css"
            },
            {
                href: "/css/util.css",
                rel: "stylesheet",
                type: "text/css"
            },
        ],
        script: [
            { src: "/js/main.js" },
        ]
    },
    data() {
        return {
            username: "",
            email: "",
            password: "",
            cpassword: "",
            submitStatus: null,
            validForm: true,
        };
    },
    validations: {
      username: {
        required
      },
      email: {
        required,
        email
      },
      password: {
        required,
        goodPassword: password => {
          return /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W|_]){1,})(?!.*\s).{8,50}$/.test(
            password
          );
        }
      },
      cpassword: {
        sameAsPassword: sameAs("password")
      }
    },
        computed: {
      usernameErrors() {
        const errors = [];
        if (!this.$v.username.$dirty) return errors;
        !this.$v.username.required && errors.push("header_fo.username_error_requis");
        return errors;
      },

      emailErrors() {
        const errors = [];
        if (!this.$v.email.$dirty) return errors;
        !this.$v.email.required && errors.push("header_fo.email_error_requis");
        return errors;
      },

      passwordErrors() {
        const errors = [];
        if (!this.$v.password.$dirty) return errors;
        !this.$v.password.required && errors.push("le mot de passe est requis");
        !this.$v.password.goodPassword && errors.push("header_fo.pwd_error");
        return errors;
      },

      cpasswordErrors() {
        const errors = [];
        if (!this.$v.cpassword.$dirty) return errors;
        !this.$v.cpassword.sameAsPassword &&
          errors.push("header_fo.pwd_error_different");
        return errors;
      },
    }
}
</script>
<style lang="scss" scoped>
    .container-login100 *{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .login100-form-avatar{
        width: 150px;
        height: 150px;
    }

    .container-login100{
        padding: 10%;
    }
</style>