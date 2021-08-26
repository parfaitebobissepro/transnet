export const state = () => ({
    isLoggedIn: false,
});

export const mutations = {
    setIsLoggedIn(state, payload) {
        state.isLoggedIn = payload;
    },
};

export const actions = {
}