<template>
    <v-col class="ml-2">
            <AddPost />
            <v-sheet
              max-width="120vh"
              min-height="70vh"
              rounded="lg"
              v-if="posts.length > 0"
            >
              <!-- <v-col
            v-for="n in 24"
            :key="n"
            cols="4"
          >
           -->
         <v-container >
           <v-row>
             <v-col
                v-for="post in posts"
                :key="post.id"
                cols="12"
             >
              <Post :post="post"/>
              <!--  -->
              </v-col>
           </v-row>
           </v-container>
            </v-sheet>
          </v-col>
        
</template>

<script>
import Post from '../components/Post'
import AddPost from '../components/AddPost'
import { mapActions, mapGetters } from 'vuex'
import axios from 'axios'

export default {
  name: 'NewsFeed',
  components: {
    Post,
    AddPost
  },
  data() {
    return {
      posts: []
    }
  },
  computed: mapGetters(['allPosts']),
  methods: {
    async getPosts() {
      const response = await axios.get('post-friends')
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
    const response = await axios.get('post-friends')
    this.posts = response.data
  }*/
}
</script>