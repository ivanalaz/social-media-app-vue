<template>
            <v-card>
                 <v-container>
                 <v-avatar
                  class="mr-2"
                  size="36"
                  ><img :src="require(`@/assets/${post.image}`)" alt=""></v-avatar>
                
                 <v-list-item two-line style="display: inline-block">
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          <router-link :to="{ name: 'User', params: {userId: `${post.userId}`}}">
            {{ post.firstName }} {{ post.lastName }}
          </router-link>
          <v-menu rounded="lg" :close-on-content-click="closeOnContentClick">
          <template v-slot:activator="{ on, attrs }">
            <v-icon v-if="me" dense class="float-right" 
            v-bind="attrs"
            v-on="on">mdi-dots-horizontal</v-icon>
          </template>
          <v-list>
        <!--  <v-dialog v-model="dialog" max-width="290"> 
            <template v-slot:activator="{ on, attrs }"> -->
          <v-list-item  @click="edit = !edit">Edit</v-list-item>
           
          <v-dialog v-model="dialog" max-width="290">
            <template v-slot:activator="{ on, attrs }">
          <v-list-item v-bind="attrs"
          v-on="on">Delete</v-list-item>
            </template>
            <v-card>
        <v-card-title class="text-h6">
          Are you sure you want to delete this post?
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="grey darken-3"
            text
            @click="dialog = false; deletePost(post.postId)"
          >Yes</v-btn>
          <v-btn
            color="grey darken-3"
            text
            @click="dialog = false"
          >No</v-btn>
        </v-card-actions>
      </v-card>
          </v-dialog>
          </v-list>
          </v-menu>
        </v-list-item-title>
        <v-list-item-subtitle class="caption">{{ date }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-card-text class="ma-0 pt-1">
    <div v-if="edit">
        <form @submit.prevent="editPost(post.postId)">
        <v-text-field
            label="Edit post..."
            :value="post.content"
            hide-details
            clearable
            outlined
            dense
            rounded
            color="grey darken-2"
            append-outer-icon="mdi-send"
            @click:append-outer="editPost(post.postId)"
            @keydown.esc="edit = !edit"
            v-model="text"
            class="py-1"
            ></v-text-field>
        </form>
    </div>
    <div v-else>
      {{ post.content }} </div>
    </v-card-text>
      
                 <small v-if="!likes.includes(post.postId) && !liked" @click="likePost(post.postId)">
                   <v-icon small class="pr-1 pb-1">mdi-thumb-up-outline</v-icon>Like</small> 
      
                 <small v-else @click="dislikePost(post.postId)" class="font-weight-bold">
                   <v-icon small class="pr-1 pb-1">mdi-thumb-up</v-icon>Like</small>

                 <small class="ml-4" @click="showAddComment = !showAddComment">
                   <v-icon small class="pr-1">mdi-comment-text-outline</v-icon>Comment</small>
                 <Comment :postId="`${post.postId}`" :showAddComment="showAddComment" :me="me"/>
                 </v-container>
               </v-card>
</template>
<script>
import axios from 'axios'
import { mdiThumbUpOutline, mdiThumbUp } from '@mdi/js'
import Comment from './Comment.vue'
export default ({
    name: 'Post',
    props: {
      post: {
        type: Object
      },
      me: { type: Boolean }
    },
    components: {
      Comment
    },
    data: () => ({
      likes: [],
      liked: false,
      showAddComment: false,
      mdiThumbUpOutline, 
      mdiThumbUp,
      dialog: false,
      edit: false,
      closeOnContentClick: true,
      text: ''
    }),
    methods: {
      likePost(id) {
        axios.get(`post/${id}/like`)
            .then (response =>
            {console.log(response.data.message)
            this.liked = !this.liked})
      },
      dislikePost(id) {
        axios.get(`post/${id}/dislike`)
            .then (response =>
            {console.log(response.data.message)
            this.liked = !this.liked})
      },
      deletePost(id) {
        axios.delete(`post/${id}`)
        .then(response =>
        { console.log(response.data.message);})
      },
      editPost(id) {
        axios.put(`post/${id}`, {
          content: this.text
        })
        this.edit = false
       /* .then(response =>
        { console.log(response.data.message);})*/
      }
    },
    async created() {
        const response = await axios.get('liked-posts')
        this.likes = response.data
    },
    computed: {
     /* liked(postId) {
        return this.likes.includes(postId)
      }*/
      date() {
        var d = new Date(this.post.created);
        return d.toLocaleString('en-GB', { timeZone: 'UTC' })
      }
    }
})
</script>

<style scoped>
small {
  cursor: pointer;
}
a:link, a:visited {
  color: rgb(44, 44, 44);
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>