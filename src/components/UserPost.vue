<template>
<v-col >

    <v-sheet rounded="lg" v-if="posts.length > 0" max-width="137vh">
        <v-container>
           <v-row>
             <v-col
                v-for="post in posts"
                :key="post.id"
                cols="12"
             >
              <Post :post="post" :me="true"/>
              
              </v-col>
           </v-row>
           </v-container>
        </v-sheet>
    </v-col>
</template>

<script>
import Post from '../components/Post'
//import { mapActions, mapGetters } from 'vuex'
import axios from 'axios'

export default {
  name: 'UserPost',
  components: {
    Post
  },
  data() {
    return {
      posts: []
    }
  },
  props: ['userId'],
  methods: {
    async getPosts() {
      const response = await axios.get(`posts/${this.userId}`)
      this.posts = response.data
   }
  },
  beforeMount() {
    this.getPosts()
  },
  watch: {
    posts() {
      this.getPosts()
    }
  }
 /* async created() {
        const response = await axios.get(`posts/${this.userId}`)
        this.posts = response.data
    }*/
}
</script>
