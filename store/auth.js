export const state = () => ({
    isLoggedIn: false,
});

export const mutations = {
    setIsLoggedIn(state, payload) {
        state.isLoggedIn = payload;
    },
};

export const actions = {
    async register({ commit, state }, payload){
        console.log(this.$axios.defaults.baseURL);
        try {
            let response = await this.$axios.$post(
              `${this.$axios.defaults.baseURL}/signup`,
              payload,
              {
                headers: { "Content-Type": "multipart/form-data" },
              }
            );

            return response;
            
            if (response.type == "error") {
            //   let instance = Vue.$toast.open({
            //     message: response.message,
            //     type: response.type,
            //     position: "top",
            //   });
              return response;
            //   this.submitStatus = "OK";
            } else {
              let instance = Vue.$toast.open({
                message: response.message,
                type: response.type,
                position: "top",
              });
              this.submitStatus = "OK";
              var self = this;
            //   setTimeout(async function () {
            //     await self.$store.dispatch("auth/setFirstTime", true);
            //     $("#iwj-register-popup").modal("hide");
            //     self.$router.push(self.localePath("/login"));
            //   }, 2000);
            }
          } catch (error) {
            return error;
            let instance = Vue.$toast.open({
              message: this.$i18n.t("header_fo.erreur_500"),
              type: error.response.data.type,
              position: "top",
            });
            this.submitStatus = "OK";
          }
    }
}