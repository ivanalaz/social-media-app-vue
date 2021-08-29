import axios from 'axios'

const resource_uri = 'http://localhost:9000/user'

export default {
    state: {
        users: []
    },
    getters: {
        allUsers: state => state.users
    },
    actions: {
        async fetchUsers({ commit }) {
            const response = await axios.get(`${resource_uri}s`)
            commit('setUsers', response.data)
        },
        async addUser({ commit }, user) {
            const response = await axios.post(`${resource_uri}/create`, { user })
            commit('newUser', response.data)
        },
        async getUser({ commit }, id) {
            
        }
    },
    mutations: {
        setUsers: (state, users) => (state.users = users),
        newUser: (state, user) => state.users.push(user)
    }
}