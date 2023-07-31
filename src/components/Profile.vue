<template>
<div>
  <v-col class="ml-2">
    <v-sheet rounded="lg" width="120vh">
      <v-container>
          <v-card>
              <v-card-title>
                <h3>User info</h3>
              </v-card-title>
              <v-card-text>
                  <v-container>
                      <v-row>
                        <v-col
                        cols="12"
                        sm="6">
                        <v-row>
                            <v-col sm="4" class="py-1">
                                <h4 >First name</h4>
                            </v-col>
                            <v-col v-if="user" class="py-1 text-body-1"> {{user.firstName}}</v-col>
                        </v-row>
                        <v-row >
                            <v-col sm="4" class="py-1" >
                                <h4 >Last name</h4>
                            </v-col>
                            <v-col v-if="user" class="py-1 text-body-1"> {{user.lastName}}</v-col> 
                        </v-row>
                        <v-row>
                            <v-col sm="4" class="py-1">
                                <h4 >Username</h4>
                            </v-col>
                            <v-col v-if="user" class="py-1 text-body-1"> {{user.username}}</v-col>
                        </v-row>
                            <v-row>
                            <v-col sm="4" class="py-1">
                                <h4 >Birthday</h4>
                            </v-col>
                            <v-col v-if="user" class="py-1 text-body-1">{{user.birthday}}</v-col>
                            <span class="pb-2 pr-10">
                                <v-icon>mdi-cake-variant</v-icon>
                            </span>
                            
                        </v-row>
                        </v-col>
                        <v-col
                        class="pl-15 pt-0"
                        cols="12"
                        sm="4"
                        >
          <v-avatar
            size="180"
            tile
            v-if="user.imageName"
          >               
              <v-img :src="require(`@/assets/${ user.imageName }`)"></v-img>
          </v-avatar>
        </v-col>
        
        <v-btn @click="showEditForm = !showEditForm">Edit profile</v-btn>
        
                      </v-row>
                  </v-container>
              </v-card-text>
          </v-card>
          <div v-if="showEditForm">
          <EditProfile :user="user" />
          </div>
      </v-container>
    </v-sheet>
    
  </v-col>
 
   <!-- <v-col class="ml-2"> 
       <v-sheet rounded="lg" max-width="100vh">
      <v-container>
          
      </v-container>
    </v-sheet> 
    </v-col>-->
    <UserPost :userId="`${user.id}`"/>
   
  
</div>
</template>

<script>
import EditProfile from './EditProfile.vue'
import UserPost from './UserPost.vue'
//import axios from 'axios'
export default {
    name: 'Profile',
    data() {
        return {
            showEditForm: false,
           // user: null
        }
    },
    components: {
        EditProfile,
        UserPost
    },
    props: {
        user: Object
    },
 /*   async created() {
        const response = await axios.get('user')
        this.user = response.data
        //console.log("imageName:" + this.user.imageName);
    }*/
}
</script>

<style scoped>
h4 {
    display: inline-block;
}
</style>