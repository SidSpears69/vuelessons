import { createStore } from 'vuex'
import axios from '@/axios.js'
export default createStore({
  state: {
    navbarTitle: 'Vuex title',
    users: []
  },
  strict: process.env.NODE_ENV !== 'production',
  mutations: {
    changeTitle: (state, payload) => (state.navbarTitle = payload),
    clearTitle: (state) => (state.navbarTitle = ''),
    setUsers: (state, payload) => (state.users = payload)
  },
  getters: {
    titleCount: (state) => state.navbarTitle.length
  },
  actions: {
    loadUsers({ commit }) {
      axios
        .get('users')
        .then((response) => commit('setUsers', response.data))
        .catch((error) => console.error(error))
    }
  }
})
