<template>
    <v-col class="ml-2">

            <AddPost />

            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
              <!-- <v-col
            v-for="n in 24"
            :key="n"
            cols="4"
          >
           -->
         <v-container>
           <v-row>
             <v-col
                v-for="post in allPosts"
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
import Suggested from '../components/Suggested'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'NewsFeed',
  components: {
    Post,
    AddPost,
    Suggested
  },
  computed: mapGetters(['allPosts']),
  methods: {
    ...mapActions([/* 'postsByUser',  */'fetchPosts'])
  },
  created() {
      this.fetchPosts()
  }
}
</script>
