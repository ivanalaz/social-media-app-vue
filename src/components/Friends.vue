<template>
 <v-col class="ml-2">
   <v-sheet
              min-height="70vh"
              rounded="lg"
            >

<v-container>
   <v-sheet rounded="lg" class="mb-4">
    <v-list>
      <v-list-item
        v-for="user in allUsers"
        :key="user.id"
        link
      >
        <v-list-item-avatar>
          <v-img
            :alt="`${user.firstName} avatar`"
            :src="require(`@/assets/${user.imageName}`)"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>
            {{ user.firstName }} {{ user.lastName }}
          </v-list-item-title>
        </v-list-item-content>
        <v-btn>View profile</v-btn>
        <v-btn class="ml-3">Remove friend</v-btn>
<!--
        <v-list-item-icon>
          <v-icon :color="chat.active ? 'deep-purple accent-4' : 'grey'">
            mdi-message-outline
          </v-icon>
        </v-list-item-icon> -->
      </v-list-item>
    </v-list>
   </v-sheet>
</v-container>
   </v-sheet>
 </v-col>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Friends',
  computed: mapGetters(['allUsers']),
  methods: {
    ...mapActions(['fetchUsers'])
  },
  created() {
    this.fetchUsers()
  }
}
</script>