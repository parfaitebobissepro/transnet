<script>
import mesFonctions from "~/plugins/mesFonctions/mesFonctions";
import Vue from "vue";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-default.css";
import "vue-toast-notification/dist/theme-sugar.css";
Vue.use(VueToast);

export default {
  beforeMount() {
    mesFonctions.event.$on("toaster", (options) => {
      this.toaster(options.message, options.type);
    });
  },
  methods: {
    toaster(message, type) {
        console.log(message);
        console.log(type);
         Vue.$toast.open({
            message: message,
            type: type,
            position: "top",
        });
    }
  },
};
</script>
<style>
    .v-toast *{
        color: white !important;
    }
</style>