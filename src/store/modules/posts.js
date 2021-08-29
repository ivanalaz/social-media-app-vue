import axios from 'axios'

const resource_uri = 'http://localhost:9000/post'

export default {
    state: {
        posts: []
    },
    getters: {
        allPosts: state => state.posts
    },
    actions: {
        async fetchPosts({ commit }) {
            const response = await axios.get(resource_uri)
            commit('setPosts', response.data);
        },
        async addPost({ commit }, post) {
            const response = await axios.post(resource_uri, post)
            console.log("response.data:" + response.data);
            commit('addPost', response.data)
        },
        async postsByUser({ commit }, post) {
            const response = await axios.get(`${resource_uri}`, post)
            console.log(response.data);
            commit('postsByUser', response.data)
        }
    },
    mutations: {
        setPosts: (state, posts) => (state.posts = posts),
        addPost: (state, post) => state.posts.unshift(post),
        postsByUser: (state, post) =>
         state.posts = state.posts.filter(p => post.userId === p.userId)
    }
}