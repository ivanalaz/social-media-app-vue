<template>
  <v-col class="ml-2">
    <v-sheet
      min-height="70vh"
      rounded="lg"
      >
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
                            <v-col v-if="user" class="py-1"> {{user.firstName}}</v-col>
                        </v-row>
                        <v-row >
                            <v-col sm="4" class="py-1" >
                                <h4 >Last name</h4>
                            </v-col>
                            <v-col v-if="user" class="py-1"> {{user.lastName}}</v-col> 
                        </v-row>
                        <v-row>
                            <v-col sm="4" class="py-1">
                                <h4 >Username</h4>
                            </v-col>
                            <v-col v-if="user" class="py-1"> {{user.username}}</v-col>
                        </v-row>
                            <v-row>
                            <v-col sm="4" class="py-1">
                                <h4 >Birthday</h4>
                            </v-col>
                            <v-col v-if="user" class="py-1">{{user.birthday}}</v-col>
                        </v-row>
                        </v-col>
                        <v-col
                        class="pa-0"
                        cols="12"
                        sm="4"
                        >
          <v-avatar
            class="profile"
            color="grey"
            size="164"
            tile
          >
            <v-img src="../assets/default-profile-image.png"></v-img>
          </v-avatar>
        </v-col>
        
        <v-btn @click="showEditForm = !showEditForm">Edit profile</v-btn>
        
                      </v-row>
                  </v-container>
              </v-card-text>
          </v-card>
          <div v-if="showEditForm">
          <EditProfile />
          </div>
      </v-container>
    </v-sheet>
  </v-col>
</template>

<script>
import EditProfile from './EditProfile'
import axios from 'axios'
export default {
    name: 'UserProfile',
    data() {
        return {
            showEditForm: false,
            user: null
        }
    },
    components: {
        EditProfile
    },
    async created() {
        const response = await axios.get('http://localhost:9000/user', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        this.user = response.data
    }
   /* methods: {
        showEditForm() {
            this.showEditForm = !this.showEditForm

        }
    }*/
}
</script>

<style scoped>
h4 {
    display: inline-block;
}
</style>