<template>
  <div>
    <HEADERFO></HEADERFO>
    <main>
      <Nuxt />
    </main>
    <FOOTER></FOOTER>
    <mesFonctions />
  </div>
</template>

<script>
import Vue from "vue";
import FOOTER from "../components/footer.vue";
import HEADERFO from "../components/headerFo.vue";

export default {
  name: "LayoutFront",
  components: {
    HEADERFO,
    FOOTER,
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
button:disabled,
button:disabled:hover {
  background-color: #ccc;
  box-shadow: unset;
}

.pending {
  pointer-events: none;
}
</style>
