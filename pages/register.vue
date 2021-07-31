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
                                <div class="wrap-input100 validate-input m-t-85 m-b-35" data-validate="Entrer le nom d'utilisateur">
                                    <input class="input100" type="text" name="username">
                                    <span class="focus-input100" data-placeholder="Entrer le nom d'utilisateur"></span>
                                </div>
                                <div class="wrap-input100 validate-input m-b-35" data-validate="Entrer le mot de passe">
                                    <input class="input100" type="password" name="pass">
                                    <span class="focus-input100" data-placeholder="Entrer le mot de passe"></span>
                                </div>
                                <div class="wrap-input100 validate-input m-b-50" data-validate="Confirmer le mot de passe">
                                    <input class="input100" type="password" name="pass">
                                    <span class="focus-input100" data-placeholder="Confirmer le mot de passe"></span>
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
    }
</script>
<style lang="scss" scoped>
    .container-login100 *{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
</style>