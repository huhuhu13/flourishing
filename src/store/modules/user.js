// import { Login } from '../../api/user'
export default ({
    namespaced: true,
    state: {
        token: '',
    },
    getters: {
    
    },
    mutations: {
        SET_TOKEN(state,token) {
            state.token = token
        }
    },
    actions: {
        // login({commit}, param) {
        //     return new Promise ((resolve, reject) => {
        //         Login(param).then((res) => {
        //             console.log('res', res.data)
        //             if (res.code == 1) {
        //             commit('SET_TOKEN',res.data)
        //             uni.setStorageSync('token', res.data)
        //             }
        //         })
        //     })
        // }
    }
})