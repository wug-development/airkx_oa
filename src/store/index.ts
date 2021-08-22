import { createStore } from 'vuex'
export default createStore({
    state: {
        breadcrumb: {}
    },
    mutations: {
        setBreadcrumb (state, v) {
            state.breadcrumb = v
        }
    },
    actions: {
        setBreadcrumb ({commit}, v) {
            commit('setBreadcrumb', v)
        }
    },
    getters: {
        getBreadcrumb (state) {
            return state.breadcrumb
        }
    }
})