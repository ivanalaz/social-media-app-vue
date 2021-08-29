<template>
  <v-app id="inspire">
    <Navigation />
    <v-main class="grey lighten-3">      
      <v-container>
        <v-row>
          <Suggested />
          <router-view :key="$router.path"/>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from '../components/Navigation'
import Suggested from '../components/Suggested'

export default {
    components: {
      Navigation,
      Suggested
    },
  }
</script>
