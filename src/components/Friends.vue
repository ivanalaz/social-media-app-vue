<template>
 <v-col class="ml-2">
  <v-sheet rounded="lg" max-width="120vh">
  <v-card-title v-if="friends.length === 0">&#60;-- Add some people to your friends list.</v-card-title>
<v-container v-if="friends.length > 0">
   <v-sheet rounded="lg" class="mb-4">
    <v-list>
      <v-list-item
        v-for="user in friends"
        :key="user[0]"
        link
        :to="{ name: 'User', params: {userId: `${user[0]}`, friend: true}}"
      >
        <v-list-item-avatar>
          <v-img
            :alt="`${user[1]} avatar`"
            :src="require(`@/assets/${user[3]}`)"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>
            
              {{ user[1] }} {{ user[2] }}
            
          </v-list-item-title>
        </v-list-item-content>
        
        <v-btn
          @click.prevent="dialog = true"
          
        >
          Remove friend
        </v-btn>
        
        <v-dialog
      v-model="dialog"
      max-width="290"
      
    >
   <!--   <template v-slot:activator="{ on, attrs }"> 
     v-bind="attrs"
          v-on.prevent="on"-->
        
     
      <v-card>
        <v-card-title class="text-h5">
          Are you sure?
        </v-card-title>
       
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="gray darken-1"
            text
            @click="dialog = false; removeFriend(user[0])"
          >
            Yes
          </v-btn>
          <v-btn
            color="gray darken-1"
            text
            @click="dialog = false"
          >
            No
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
<!--
  <v-btn class="ml-3">Remove friend</v-btn>
  <v-btn>View profile</v-btn>
  <v-list-item-icon>
          <v-icon :color="chat.active ? 'deep-purple accent-4' : 'grey'">
            mdi-message-outline
          </v-icon>
        </v-list-item-icon>


        
         -->
      </v-list-item>
    </v-list>
   </v-sheet>
</v-container>

<FriendRequests />

   </v-sheet>
 </v-col>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import axios from 'axios'
import FriendRequests from './FriendRequests.vue'

export default {
  name: 'Friends',
 // computed: mapGetters(['allUsers']),
  methods: {
   // ...mapActions(['fetchUsers'])   
    removeFriend(id) {
      axios.delete(`remove-friend/${id}`)
      .then (response =>
            {console.log(response.data.message)
              this.friends.splice(id, 1)
              console.log(this.friends)
              
              }
            )
      //location.reload();
      this.$forceUpdate();
    }
  },
  components: {
    FriendRequests
  },
  data() {
    return {
        friends: null,
        dialog: false 
        }
    },
  async created() {
        const response = await axios.get('friends')
        this.friends = response.data
    }
}
</script>