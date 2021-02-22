import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 10
    },
    mutations: {
        add(state){
            state.count += 1
        }
    },

    actions: {
        addAsyn(context){
            setTimeout(() => {
                context.commit('add')
            }, 1000)
        }
    }

})