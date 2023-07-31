<template>
    <v-container v-if="friendRequests.length > 0" class="pb-1">
  
        <v-card-title class="pb-1">
        Friend requests:
      </v-card-title>
        
<v-list>
      <v-list-item
        v-for="user in friendRequests"
        :key="user[0]"
        link
        :to="{ name: 'User', params: {userId: `${user[0]}`}}"
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
        
        
        <v-btn class="ml-3" @click.prevent="acceptFriend(`${user[0]}`); snackbar = true">Accept</v-btn>
        <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
        <v-btn class="ml-3" @click.prevent="declineFriendship(`${user[0]}`); snackbar = true">Decline</v-btn>
<!--
  <v-btn>View profile</v-btn>
  <v-list-item-icon>
          <v-icon :color="chat.active ? 'deep-purple accent-4' : 'grey'">
            mdi-message-outline
          </v-icon>
        </v-list-item-icon>
         -->
      </v-list-item>
    </v-list>
</v-container>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import vm from 'vm'
export default {
    name: 'FriendRequests',
    methods: {
        async acceptFriend(id) {
            const response = await axios.put(`user/accept-friend/${id}`)
            this.text = response.data.message
            //setTimeout(() => {location.reload();}, 1500);
            vm.$forceUpdate
        },
        async declineFriendship(id) {
            const response = await axios.get(`user/decline-friend/${id}`)
            this.text = response.data.message
            setTimeout(() => {location.reload();}, 1500);
        },
    },
    data() {
        return {
            friendRequests: null,
            snackbar: false,
            text: '',
            timeout: 2000,
        }
    },
    async created() {
        const response = await axios.get('friend-requests')
       // Vue.set(this.friendRequests, response.data);
        this.friendRequests = response.data
        console.log(this.friendRequests);
    }
}
</script>