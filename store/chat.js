export const state = () => ({
    chat_conversation: null
});

export const mutations = {
    setChatUser(state, payload) {
        state.chat_conversation = payload;
    }
};

export const actions = {
    async getChatUser({ commit }, payload) {
        const reponse = await this.$axios.get(`${this.$axios.defaults.baseURL}/api/chat_user/${payload}`)
            .then(response => {
                commit('setChatUser', response.data.data);
                return response.data.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }
};
