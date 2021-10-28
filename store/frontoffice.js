export const state = () => ({
    articles: null,
    articles_details: null,
    streetsPhoton: null,
  });
  
  export const mutations = {
    setArticles(state, payload) {
      state.articles = payload;
    },
    setDetailsArticles(state, payload) {
      state.articles_details = payload;
  },
  };
  
  export const actions = {
    async contactApi(payload) {
      console.log(payload);
      try {
        let response = await this.$axios.$post(
          `${this.$axios.defaults.baseURL}/contact-transnet`,
          payload,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        console.log(response);
        return response;
      } catch (error) {
        return error;
      }
    },
    async getArticles({ commit }) {
      const reponse = await this.$axios.$get(`${this.$axios.defaults.baseURL}/api/blog`)
          .then(response => {
              // console.log(response.data);
              commit('setArticles', response.data);
              // console.log(response);
              return response.data;
          })
          .catch(error => ({ error: JSON.stringify(error) }));
      return reponse;
  },

    async getArticleBySlug({ commit }, payload) {
      const reponse = await this.$axios.$get(`${this.$axios.defaults.baseURL}/api/blog/${payload}`)
          .then(response => {
              // console.log(response.data);
              commit('setDetailsArticles', response.data);
              return response.data;
          })
          .catch(error => ({ error: JSON.stringify(error) }));
      return reponse;
    },

    async postComment({ commit }, payload) {
      const requestOptions = {
          method: "POST",
          body: payload
      };
      const response = await fetch(`${this.$axios.defaults.baseURL}/comment-universcity`, requestOptions);
      var  data = {};
      if (response.status == 500) {
          data = {
              type: "error",
              data: ""
          };
      }else {
          var test = response.json();
          var self = this;
          data = test.then(function(result) {
              var dat = {
                  type: result.type,
                  data: result.data,
                  message: result.message,
              };
              return dat;
          });
      }
      return data;
  },

    async searchCity({ commit }, payload) {
        const reponse = await this.$axios.$get(`https://photon.komoot.io/api/?q=`+ payload)
            .then(response => {
                // console.log(response.data);
                console.log(response);
                // commit('setArticles', response.data);
                // console.log(response);
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    },
  }