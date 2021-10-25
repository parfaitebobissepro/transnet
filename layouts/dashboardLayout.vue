<template>
  <div class="light">
    <!-- <loading
      :active.sync="isLoading"
      :loader="loadertype"
      :color="color"
      :can-cancel="false"
      :opacity="1"
      :is-full-page="fullPage"
    ></loading> -->
    <!-- Page Loader -->
    <!-- <div class="page-loader-wrapper">
      <div class="loader">
        <div class="m-t-30">
          <img
            class="loading-img-spin"
            src="assets/images/loading.png"
            width="20"
            height="20"
            alt="admin"
          />
        </div>
        <p>Please wait...</p>
      </div>
    </div> -->
    <!-- #END# Page Loader -->
    <!-- Overlay For Sidebars -->
    <div class="overlay"></div>
    <!-- #END# Overlay For Sidebars -->
    <!-- Top Bar -->

    <NavbarDashboard />
    <!-- #Top Bar -->
    <AsidesDashboard />
    <Nuxt />
  </div>
</template>

<script>
import NavbarDashboard from "../components/dashboard/navbarDashboard";
import AsidesDashboard from "../components/dashboard/asidesDashboard";


export default {
  middleware: 'authentication',
  components: {
    NavbarDashboard,
    AsidesDashboard,
  },
  head: {
    title: "Dashboard",
    meta: [
      {
        content: "width=device-width, initial-scale=1",
        name: "viewport"
      }
    ],
    link:[
      {
        href: "/dashbord_assets/css/app.min.css",
        rel: "stylesheet"
      },
      {
        href: "/dashbord_assets/css/style.css",
        rel: "stylesheet"
      },
      {
        href: "/dashbord_assets/css/styles/all-themes.css",
        rel: "stylesheet"
      }
    ],
    script: [
      {
        src: "/dashbord_assets/js/app.min.js",
        callback: ()=> {
            const script = document.createElement("script");
            script.type = "text/javascript";
            script.src = "/dashbord_assets/js/admin.js";
            document.body.appendChild(script);
        }
      },
      // { src: "/dashbord_assets/js/admin.js" },
      // { src: "/dashbord_assets/js/chart.min.js" },
      // { src: "/dashbord_assets/js/table.min.js" },
    ],
    plugins: [
    // { src: '~/plugins/appmin.js', ssr: false },
    { src: '~/plugins/app.min.js', ssr: false },
    // { src: '~/plugins/admin.js', ssr: false },
      // { src: "/dashbord_assets/js/table.min.js" },
  ],
  },
  data() {
    return {
      // isLoading: true,
      // loadertype: "dots",
      // fullPage: true,
      // color: "#2980b9"
    };
  },

  async created() {
    console.log("created");
    const cookieLog = this.$cookies.get("auth", { parseJSON: true });
    console.log(cookieLog);
    if (cookieLog) {
      if (cookieLog.isLoggedIn) {
        // console.log(cookieLog.user);
        // this.$socket.emit("login", { userId: cookieLog.user._id });
        let payload = {
          isLoggedIn: cookieLog.isLoggedIn,
          user: cookieLog.user
        };
        let data = await this.$store.dispatch(
          "auth/setAuthStatusMiddle",
          payload
        );
      }
    }
  
  },

  mounted() {
    setTimeout(() => {
      const script2 = document.createElement("script");
      script2.type = "text/javascript";
      script2.src = "/dashbord_assets/js/admin.js";
      document.body.appendChild(script2);
    }, 4000);
  },
};
</script>
<style>
.bloc_recherche {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 25px;
}

.bloc_recherche input {
  width: 300px;
}

.link-bloc {
  display: flex;
  align-items: center;
  justify-content: center;
}

.link-bloc:hover {
  color: initial;
}

@media only screen and (max-width: 767px){
    /*Tablets [601px -> 1200px]*/
    .table-responsive{
      overflow: auto !important;
    }
}

/* .table-responsive{
    overflow: inherit !important;
  } */

/*** copy Vgrid for same online ***/

.col-xl,
.col-xl-auto,
.col-xl-12,
.col-xl-11,
.col-xl-10,
.col-xl-9,
.col-xl-8,
.col-xl-7,
.col-xl-6,
.col-xl-5,
.col-xl-4,
.col-xl-3,
.col-xl-2,
.col-xl-1,
.col-lg,
.col-lg-auto,
.col-lg-12,
.col-lg-11,
.col-lg-10,
.col-lg-9,
.col-lg-8,
.col-lg-7,
.col-lg-6,
.col-lg-5,
.col-lg-4,
.col-lg-3,
.col-lg-2,
.col-lg-1,
.col-md,
.col-md-auto,
.col-md-12,
.col-md-11,
.col-md-10,
.col-md-9,
.col-md-8,
.col-md-7,
.col-md-6,
.col-md-5,
.col-md-4,
.col-md-3,
.col-md-2,
.col-md-1,
.col-sm,
.col-sm-auto,
.col-sm-12,
.col-sm-11,
.col-sm-10,
.col-sm-9,
.col-sm-8,
.col-sm-7,
.col-sm-6,
.col-sm-5,
.col-sm-4,
.col-sm-3,
.col-sm-2,
.col-sm-1,
.col,
.col-auto,
.col-12,
.col-11,
.col-10,
.col-9,
.col-8,
.col-7,
.col-6,
.col-5,
.col-4,
.col-3,
.col-2,
.col-1 {
  padding: 12px;
}
</style>
