<template>
            <v-card max-height="300">
                 <v-container>
                 <v-avatar
                  class="mr-2"
                  color="grey darken-1"
                  size="32"
                  ><img :src="require(`@/assets/${post.image}`)" alt=""></v-avatar>
                 <!--<v-card-title style="display: inline-block" class="pa-2"> {{ post.author }} 
                     <v-card-subtitle class="ma-1 pa-0 caption">21.6.2021.</v-card-subtitle>
                 </v-card-title>
                 -->
                 <v-list-item two-line style="display: inline-block">
      <v-list-item-content>
        <v-list-item-title class="text-h5">
         {{ post.firstName }} {{ post.lastName }}
        </v-list-item-title>
        <v-list-item-subtitle class="caption">{{ post.created }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
                 <v-card-text class="ma-0 pt-1">
                   {{ post.content }}
                 </v-card-text>
                 <small v-if="!liked" @click="likePost(post.id)">Like</small> 
                 <small v-else @click="dislikePost(post.id)">Dislike</small>
                 </v-container>
               </v-card>
</template>
<script>


export default ({
    name: 'Post',
    props: ['post'],
    data: () => ({
      liked: false,
      likeCounter: 0
    }),
    methods: {
      likePost(id) {
        this.liked = !this.liked
        this.likeCounter++
        console.log(id + ": " + this.likeCounter)
      },
      dislikePost(id) {
        this.liked = !this.liked
        this.likeCounter--
        console.log(this.likeCounter)
      },
      
    },
    
})
</script>

<style scoped>
small {
  cursor: pointer;
}
</style>