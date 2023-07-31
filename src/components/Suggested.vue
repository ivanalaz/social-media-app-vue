<template>
    <v-col cols="3">
            <!-- style="position: fixed" -->
            <v-sheet rounded="lg" style="position: fixed" min-width="40vh">
              <v-list color="transparent" >
                <v-list-item
                  color="grey lighten-4"
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      People you may know
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item
                  v-for="user in randomUsers(notFriends)"
                  :key="user[0]"
                  link
                  :to="{ name: 'User', params: {userId: `${user[0]}`, friend: false}}"     
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
                </v-list-item>
                
              </v-list>
            </v-sheet>
          </v-col>

</template>

<script>
//import { mapActions, mapGetters } from 'vuex'
import axios from 'axios'

export default ({
  name: 'Suggested',
  //computed: mapGetters(['allUsers']),
  data() {
    return {
      notFriends: null
    }
  },
  methods: {
    randomUsers(array) {
      //return notFriends[Math.floor(Math.random() * notFriends.length)]
      // Shuffle array
      const shuffled = array.sort(() => 0.5 - Math.random());

      // Get sub-array of first n elements after shuffled
      let selected = shuffled.slice(0, 5);
      return selected
    }
  },
  computed: {
    randomList() {
      //const shuffled = array.sort(() => 0.5 - Math.random());
    }
  },
  async created() {
      const response = await axios.get('not-friends')
      this.notFriends = response.data
      console.log(this.notFriends);
  }
  //random: {{allUsers[Math.floor(Math.random() * allUsers.length)]}}
})
</script>

<style scoped>
body {
  position: fixed;
}
</style>
