import Vue         from 'vue'
import Vuex        from 'vuex'
import VuexPersist from 'vuex-persist'

import list  from './list'


Vue.use(Vuex);

const vuexPersist = new VuexPersist({
    key:     'test-authenticated-list',
    storage: window.localStorage
});


const store = new Vuex.Store({
    modules: {
        list
    },
    plugins: [vuexPersist.plugin],
    state: {
        loggedIn: false
    },
    mutations: {
        setLoggedIn: (state, setTo) => {
            state.loggedIn = setTo;
        }
    }
})

export default store;
