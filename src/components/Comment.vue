<template>
<div>
<v-card class="icon-hover">
    <v-sheet v-if="comments.length > 0" class="my-2 pt-3" rounded color="grey lighten-5">
        <v-container v-for="comment in comments"
            :key="comment.commentId"
            class="py-0 icon-hover">
            <v-avatar
             size="30"
             ><img :src="require(`@/assets/${comment.image}`)" alt="">
            </v-avatar> 
             <v-list-item three-line style="display: inline-block" class="py-0">
      <v-list-item-content>
        <v-list-item-title class="text-subtitle-2">
          <router-link :to="{ name: 'User', params: {userId: `${comment.userId}`}}">
            {{ comment.firstName }} {{ comment.lastName }}
          </router-link>
          <v-menu rounded="lg"
          :close-on-content-click="true">
          <template v-slot:activator="{ on: menu, attrs }">
            <v-icon v-if="me" dense class="float-right" 
            v-bind="attrs"
            v-on="{...menu}">mdi-dots-horizontal</v-icon>
          </template>
          <v-list>
          <v-dialog v-model="dialog" max-width="290">
            <template v-slot:activator="{ on: dialog, attrs }">
          <v-list-item v-bind="attrs"
          v-on="{...dialog}">Delete</v-list-item>
            </template>
            <v-card>
        <v-card-title class="text-h6">
          Are you sure you want to delete this comment?
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="grey darken-3"
            text
            @click="dialog = false; deleteComment(comment.commentId)"
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
        
        <v-list-item-subtitle class="text--primary">
            {{ comment.text }}
        </v-list-item-subtitle>
        <v-list-item-subtitle class="caption">
            {{ comment.added }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
   <!-- <v-card-text class="ma-0 pt-1">
        {{ comment.text }} • 
    </v-card-text>
  -->           
    </v-container>
    </v-sheet></v-card>
    <v-container v-if="showAddComment">
        <form @submit.prevent="addComment()">
        <v-text-field
            label="Write a comment..."
            hide-details
            clearable
            outlined
            dense
            rounded
            color="grey darken-2"
            append-outer-icon="mdi-send"
            @click:append-outer="addComment"
            v-model="text"
            class="py-1"
            ></v-text-field>
        </form>
    </v-container>
</div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'Comment',
    data: () => ({
        comments: [],
        text: '',
        dialog: false
    }),
    props: ['postId', 'showAddComment', 'me'],
   /* async created() {
        const response = await axios.get(`post/${this.postId}/comments`)
        this.comments = response.data
        console.log(this.comments)
    },*/
    beforeMount() {
		this.getComments()
	},
    methods: {
        async addComment() {
            const response = await axios.post(`post/${this.postId}/add-comment`, {
                text: this.text
            })
            this.showAddComment = false
            console.log(response.data)
        },
        deleteComment(id) {
            axios.delete(`comment/${id}`)
            .then(response =>
            { console.log(response.data.message);})
        },
        async getComments() {
            const response = await axios.get(`post/${this.postId}/comments`)
            this.comments = response.data
        } 
    },
    watch: {
        comments() {
            this.getComments()
        }
    }
}
</script>
<style scoped>
a:link, a:visited {
  color: rgb(44, 44, 44);
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
.icon-hover v-icon {
    visibility: hidden;
}
.icon-hover:hover v-icon{
    visibility: visible;
}
</style>