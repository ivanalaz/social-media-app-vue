<template>
<v-col class="ml-2">
  <v-container>
    <v-form>
        <v-text-field
        label="First name"
        hide-details
        color="gray"
        v-model="user.firstName"/>
        <v-text-field 
        label="Last name" 
        hide-details
        color="gray"
        v-model="user.lastName"/>
        <v-text-field
        label="Username"
        hide-details
        color="gray"
        v-model="user.username"/>
        <v-text-field
        label="Password"
        hide-details
        color="gray"
        type="password"
        v-model="user.password"/>
        <v-file-input
        :rules="rules"
        accept="image/png, image/jpeg, image/bmp"
        placeholder="Click here to choose a photo"
        prepend-icon="mdi-camera"
        label="Upload a photo"
        color="gray"
        v-model="user.imageName"/>
        <v-btn
        class="mr-4"
        @click="updateUser"
        >
        Save changes
        </v-btn>
    </v-form>
  </v-container>
</v-col>
</template>
<script>
import axios from 'axios'
export default {
    name: 'EditProfile',
    data() {
        return {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            imageName: '',
            rules: [
                value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
            ],
        }
    },
    props: {
        user: Object
    },
    methods: {
        async updateUser() {
            await axios.put('user', {
                firstName: this.firstName,
                lastName: this.lastName,
                username: this.username,
                password: this.password,
            })
        }
    }
}
</script>