import {
  Login
} from '../../api/user'
import router from '../../router/index'
export default ({
  namespaced: true,
  state: {
    token: '',
  },
  getters: {

  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    }
  },
  actions: {
    login({
      commit
    }, param) {
      return new Promise((resolve, reject) => {
        Login(param).then((res) => {
          if (res.data.code === 1000) {
            commit('SET_TOKEN', res.data)
            window.localStorage.setItem('token', res.data.data.token)
            router.push({
                path: '/home'
            })
          }
        })
      })
    }
  }
})
