import mesFonctions from "~/plugins/mesFonctions/mesFonctions.vue";

const Plugin = {
  install(Vue, options = {}) {
    /**
     * Makes sure that plugin can be installed only once
     */
    if (this.installed) {
      return;
    }
    this.installed = true;

    /**
     * Create event bus
     */

    this.event = new Vue();

    /**
     * Plugin methods
     */
    Vue.prototype.$mesFonctions = {
        toaster(options = {}) {
        Plugin.event.$emit("toaster", options, true);
      }
    };

    /**
     * Registration of <snackbar/> component
     */
    Vue.component("mesFonctions", mesFonctions);
  }
};

export default Plugin;