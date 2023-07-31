<template>
<v-col >
    <v-sheet rounded="lg" class="mb-4" max-width="120vh" min-height="22vh">
        <v-container class="pb-1">
            <v-row>
         <v-avatar
            class="mt-4 ml-4"
            tile
            size="100"
        ><img :src="require(`@/assets/${user.imageName}`)" alt=""></v-avatar>  
        <v-col cols="6">  
        <v-row><v-card-title class="pb-1 text-h5">
            {{user.firstName}} {{ user.lastName }}
        </v-card-title></v-row>
        <v-row>
            <span class="pl-4 pt-2">
                <v-icon>mdi-cake-variant</v-icon>
            </span>
            <div class="pl-2 pt-3" style="display: inline-block;">{{ user.birthday }} </div>
        </v-row>
        </v-col><v-row align="center" justify-content="center">
        <v-col v-if="!friend">
            <v-btn v-if="added" class="ml-3" @click.prevent="deleteRequest(userId)">Delete request</v-btn>
            <v-btn v-if="!added" class="ml-3" @click.prevent="addFriend(userId)">Add friend</v-btn>
        </v-col></v-row>
        </v-row>
</v-container>
    <div v-if="friend">
        <UserPost :userId="`${user.id}`"/>
    </div>
    </v-sheet>
</v-col>
</template>
<script>
import UserPost from '../components/UserPost.vue'
import axios from 'axios'
export default {
    components: {
        UserPost
    },
    data() {
        return {
            user: null,
            added: false
        }
    },
    props: ['userId', 'friend'],
    async created() {
        const response = await axios.get(`user/${this.userId}`)
        this.user = response.data
    },
    methods: {
        async addFriend(id) {
            const response = await axios.post(`user/add-friend/${id}`)
            this.added = true
            console.log(response.data.message)
        },
        async deleteRequest(id) {
            const response = await axios.delete(`remove-friend/${id}`)
            this.added = false
            console.log(response.data.message)
        }
    }
}
</script>