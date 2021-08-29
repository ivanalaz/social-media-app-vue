<template>
    <v-sheet rounded="lg" class="mb-4">
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
            user: null
        }
    },
    methods: { 
        ...mapActions(['addPost']),
        onSubmit(e) {
            console.log(this.content);
            e.preventDefault()
            const post = {
                content: this.content,
                userId: this.user.id
            }
            this.addPost(post)
        }
    },
    async created() {
        const response = await axios.get('http://localhost:9000/user', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        this.user = response.data
    }
})
</script>