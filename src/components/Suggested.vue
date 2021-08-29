<template>
    <v-col cols="3">
            <!-- style="position: fixed" -->
            <v-sheet rounded="lg" >
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
                </v-list-item>
                
              </v-list>
            </v-sheet>
          </v-col>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default ({
  name: 'Suggested',
  computed: mapGetters(['allUsers']),
  methods: {
    ...mapActions(['fetchUsers'])
  },
  created() {
    this.fetchUsers()
  }
  //random: {{allUsers[Math.floor(Math.random() * allUsers.length)]}}
})
</script>
