<template>
    <v-sheet rounded="lg" class="mb-4" max-width="120vh">
        <v-container class="pb-1">
        <v-card-title class="pb-1">
        Welcome, {{user.firstName}}!
      </v-card-title>
        </v-container>
        <v-container>
            <v-col>
                <form @submit.prevent="onSubmit">
                    <v-text-field
                    label="Write something..."
                    hide-details
                    clearable
                    filled
                    rounded
                    color="grey darken-2"
                    v-model="content"
                    ></v-text-field>
                    <v-btn
                      :disabled="this.content.length === 0"
                      rounded 
                      type="submit"
                      class="mt-2"
                      >Post</v-btn>
                </form>
            </v-col>
        </v-container>
    </v-sheet>
</template>

<script>
import { mapActions } from 'vuex'
import axios from 'axios'
export default ({
    name: 'Post',
    data() {
        return {
            content: '',
            user: null,
            //clearClicked: false
        }
    },
    methods: { 
        ...mapActions(['addPost']),
        onSubmit(e) {
            console.log(this.content);
            if (this.content.length === 0) {
                alert("Are you sure you want to submit empty post?")
            }
            e.preventDefault()
            const post = {
                content: this.content,
                userId: this.user.id
            }
            this.addPost(post)
            this.content = ''
        },
       /* clear () {
            this.clearClicked = true
        }*/
    },
    async created() {
        const response = await axios.get('user')
        this.user = response.data
    }
})
</script>