export const state = () => ({
  isLoggedIn: false,
  user: {},
});

export const mutations = {
  setIsLoggedIn(state, payload) {
    state.isLoggedIn = payload;
  },
  setUser(state, payload) {
    state.user = payload;
  },
};

export const actions = {
  async register({ commit, state }, payload) {
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
    } catch (error) {
      return error;
    }
  },
  async login({ commit }, payload) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    };
    try {
      console.log(payload);
      const response = await fetch(`${this.$axios.defaults.baseURL}/api/login`, requestOptions);
      var data = {};
      if (response.status == 500) {
        data = {
          type: "error",
          data: "",
          message: "Une erreur est survenue, veuillez reessayer plutard.",
        };
      } else {
        var test = response.json();
        data = test.then(function (result) {
          var dat = {
            type: result.type,
            data: result.data,
            message: result.message,
          };
          return dat;
        });
      }
      return data;
    } catch (error) {
      return error;
    }
  },

  setAuthStatus({ commit, state }, payload) {
    console.log(payload);
    commit('setIsLoggedIn', payload.logged);
    commit('setUser', payload.data);
    var test = {};
    if (payload.data == "No") {
      test = {};
    } else {
      test = payload.data
    }
    const cookieParams = {
      isLoggedIn: state.isLoggedIn,
      user: {
        _id: test._id,
        type: test.type
      }
    };
    this.$cookies.set('auth', cookieParams, {
      path: '/',
      maxAge: 60 * 60 * 24 * 7
    });
  },
  async setAuthStatusMiddle({ commit, state }, payload) {
    console.log(payload);
    commit('setIsLoggedIn', payload.isLoggedIn);
    if (payload.user == {}) {
      commit('setUser', payload.user);
    } else {
      console.log(payload.user._id);
      const reponse = await this.$axios.$get(`${this.$axios.defaults.baseURL}/user/details/${payload.user._id}`)
        .then(response => {
          console.log("la reponse");
          console.log(response);
          console.log(response.data.data);
          commit('setUser', response.data);
          console.log(state.user);
          return response.data;
        })
        .catch(error => ({ error: JSON.stringify(error) }));
      return reponse;
    }
  },

  // async contactApi(payload) {
  //   console.log(payload);
  //   try {
  //     let response = await this.$axios.$post(
  //       `${this.$axios.defaults.baseURL}/contact-transnet`,
  //       payload,
  //       {
  //         headers: { "Content-Type": "multipart/form-data" },
  //       }
  //     );
  //     console.log(response);
  //     return response;
  //   } catch (error) {
  //     return error;
  //   }
  // },
}