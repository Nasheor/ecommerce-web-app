import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        login: false,
    },
    mutations: {
        switchLoggedInStatus(state, payload) {
            state.login = payload;
        }     
    },
    getters: {
        getLogStatus(state) {
            return state.login;
        }
    }
})