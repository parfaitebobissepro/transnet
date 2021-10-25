<template>
  <div>
    <HEADERFO></HEADERFO>
    <main>
      <Nuxt />
    </main>
    <mesFonctions />
  </div>
</template>

<script>
import Vue from "vue";
import HEADERFO from "../components/headerFo.vue";

export default {
  name: "frontLayoutNoFooter",
  components: {
    HEADERFO,
  },
  created() {
    const cookieLog = this.$cookies.get("auth", { parseJSON: true });
    console.log(cookieLog);
    if (cookieLog) {
      if (cookieLog.isLoggedIn) {
        // this.userData = cookieLog.user;
        let payload = {
          isLoggedIn: cookieLog.isLoggedIn,
          user: cookieLog.user,
        };
        this.$store.dispatch("auth/setAuthStatusMiddle", payload);
      }
    }
  },
};
</script>
<style>
.header-style01 .navbar-default .navbar-nav > li > a:hover,
.header-style01 .nav > li > a.current-menu-item {
  border-color: #006db7;
}

.error {
  color: #fc7b7b !important;
}
</style>
