import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'

const options = { path: '/socket.io/' };
// var urlApi = axios.defaults.baseURL;
Vue.use(new VueSocketIO({
    debug: true,
    connection: "http://localhost:7001",
    // vuex: {
    //     store,
    //     actionPrefix: 'SOCKET_',
    //     mutationPrefix: 'SOCKET_'
    // },
    // options: options
  })
);