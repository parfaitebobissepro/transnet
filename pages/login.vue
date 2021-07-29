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
                                <div class="wrap-input100 validate-input m-t-85 m-b-35" data-validate="Enter username">
                                    <input class="input100" type="text" name="username">
                                    <span class="focus-input100" data-placeholder="Username"></span>
                                </div>
                                <div class="wrap-input100 validate-input m-b-50" data-validate="Enter password">
                                    <input class="input100" type="password" name="pass">
                                    <span class="focus-input100" data-placeholder="Password"></span>
                                </div>
                                <div class="container-login100-form-btn">
                                    <button class="login100-form-btn">
                                        Login
                                    </button>
                                </div>
                                <ul class="login-more p-t-100">
                                    <li class="m-b-8">
                                        <span class="txt1">
                                            Forgot
                                        </span>
                                        <a href="#" class="txt2">
                                            Username / Password?
                                        </a>
                                    </li>
                                    <li>
                                        <span class="txt1">
                                            Don’t have an account?
                                        </span>
                                        <a href="#" class="txt2">
                                            Sign up
                                        </a>
                                    </li>
                                </ul>
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
        name: 'Login',
        layout: 'frontLayoutNoFooter',
        head: {
            title: "Transnet -  Connnexion",
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