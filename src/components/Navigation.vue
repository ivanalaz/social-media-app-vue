<template>
  <v-app-bar
      app
      color="white"
      flat
      class="nav-bar"
    >
      <v-container class="py-0 mr-4 fill-height">
        <v-avatar
          class="mr-10"
          color="grey darken-1"
          size="32"
        >
        <img :src="require(`@/assets/${user.imageName}`)">
        </v-avatar>

        <v-btn
          v-for="link in links"
          :key="link.name"
          text
          :to="{ name: `${link.name}`, params: {user: user}}"
        >
          <div v-if="link.name === 'NewsFeed'">News feed</div>
          <div v-else>{{ link.name }}</div>
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
      <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-icon
          v-bind="attrs"
          v-on="on"
          @click="logout"
          class="pr-6 pl-0"
        >
         {{ mdiLogout }}
        </v-icon>
      </template>
      <span>Logout</span>
    </v-tooltip>
    
    </v-app-bar>
</template>

<script>
import { mdiLogout } from '@mdi/js';
import axios from 'axios'
  export default {
    name: 'Navigation',
    data() {
      return {
        links: [
          {name: 'NewsFeed', route:'/news'},
          {name: 'Friends', route: '/friends'},
          {name: 'Profile', route: '/profile'}
        ],
        user: null,
        mdiLogout,
        searchOn: false
      }
    },
    async created() {
        const response = await axios.get('user')
        this.user = response.data
        //console.log(this.user);
    },
   // @click="logout"
    methods: {
      logout() {
        localStorage.removeItem('token')
        this.$router.push('/')
      }
    }
    //style="cursor: pointer;"
    
  }
</script>
<style>
.nav-bar {
  background-image: linear-gradient(to top,#f3f4f7 0,#c8cbd8 100%)
}
</style>
