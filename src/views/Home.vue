<template>
<div>
  <v-app id="inspire" v-if="user">
    <Navigation />
    <v-main class="background" >
      <v-container class="">
        <v-row>
          <Suggested />
          <router-view :key="$route.path"/>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
  <v-app id="inspire" v-if="!user">
    <v-main class="background" >
      <v-container class="">
        <v-sheet rounded="lg" class="center" max-width="120vh">
        
        <v-row justify="center">
        
            <v-card-title class="pa-2 text-h5">
              You're not logged in!
            </v-card-title>
        
        </v-row>
        <v-row >
          
          <v-card-text class="text-center">
              Go to <router-link to="/" class="font-weight-medium login" style="color: rgb(44, 44, 44);">login</router-link> page.
          </v-card-text>
          
        </v-row> 
        
        </v-sheet>
      </v-container>
    </v-main>
  </v-app>
</div>
</template>

<script>
import Navigation from '../components/Navigation'
import Suggested from '../components/Suggested'
import axios from 'axios'

export default {
    components: {
      Navigation,
      Suggested
    },
    data() {
      return { user: null}
    },
   /* methods: {
      async getUser() {
        const response = await axios.get('user')
        this.user = response.data
      }
    },
    beforeMount() {
      this.getUser()
    }*/
    async created() {
        const response = await axios.get('user')
        this.user = response.data
    }
  }
</script>
<style >
.background {
  background: url("../assets/background1.jpg") !important;
  /*background-attachment: fixed;*/
}
.center {
  margin-left: auto;
  margin-right: auto;
  margin-top: 20vh;
}
a:link, a:visited {
  color: rgb(44, 44, 44);
  text-decoration: none;
}
a.login:hover {
  text-decoration: underline;
}
</style>
