<template>
  <v-app-bar
      app
      color="white"
      flat
      class="nav-bar"
    >
      <v-container class="py-0 fill-height">
        <v-avatar
          class="mr-10"
          color="grey darken-1"
          size="32"
        >
        <img src="../assets/default-profile-image.png">
        </v-avatar>

        <v-btn
          v-for="link in links"
          :key="link.name"
          text
          :to="`${link.route}`"
        >
          {{ link.name }}
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
            color="white"
            append-icon="mdi-magnify"
          >
          </v-text-field>
        </v-responsive>
        
      </v-container>
      <v-icon style="cursor: pointer;">{{ mdiLogout }}</v-icon>
    </v-app-bar>
</template>

<script>
import { mdiLogout } from '@mdi/js';
  export default {
    name: 'Navigation',
    data() {
      return {
        links: [
          {name: 'News feed', route:'/news'},
          {name: 'Friends', route: '/friends'},
          {name: 'Profile', route: '/profile'}
        ],
        mdiLogout
      }
    },
    //methods: 
      //logout()
    
  }
</script>
<style>
.nav-bar {
  background-image: linear-gradient(to top,#eeeeee 0,#3f3f3f 100%)
}
</style>
