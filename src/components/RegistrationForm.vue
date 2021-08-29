<template>
  <v-dialog
    persistent
    max-width="600px"
    v-model="dialog"
    @keydown.esc="dialog = false"
    @submit="onSubmit">
    <template v-slot:activator="{ on, attrs }"
    class="mt-4">
        <v-btn
          color="grey"
          dark
          v-bind="attrs"
          v-on="on"
        >
         Register
        </v-btn>
      </template>
    <v-card>
      <v-card-title>
        <h2>Register</h2>
      </v-card-title>
      <!--
      <v-card-text>
        <v-form class="px-3">
          <v-text-field v-model="title" label="Title" prepend-icon="mdi-folder"></v-text-field>
          <v-textarea v-model="content" label="Information" prepend-icon="mdi-edit"></v-textarea>
          <v-spacer></v-spacer>
          <v-btn @click="submit" color="grey" class="mx-0 mt-3">Add Project</v-btn>
        </v-form>
      </v-card-text> -->
     
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
              >
                <v-text-field
                  v-model="firstName"
                  label="First name*"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-text-field
                  v-model="lastName"
                  label="Last name*"
                ></v-text-field>
              </v-col>
              
              <v-col cols="12">
                <v-text-field
                  v-model="username"
                  label="Username*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="password"
                  label="Password*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <DatePicker />
              </v-col>
              
            </v-row>
          </v-container>
          <v-col style="text-align: left">
          <small>*indicates required field</small>
          </v-col>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="grey darken-1"
            text
            @click="dialog = false"
          > Close
          </v-btn>
          <v-btn
            color="grey darken-1"
            text
            @click="onSubmit"
          > Register
          </v-btn>
        </v-card-actions>
      </v-card>
   
  </v-dialog>
</template>

<script>
import DatePicker from './DatePicker.vue'
import { mapActions } from 'vuex'
import axios from 'axios'
export default {
  components: {
      DatePicker
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      date: '',
      dialog: false,
    }
  },
  methods: {
    ...mapActions(['addUser']),
    onSubmit(e) {
      console.log(this.firstName, this.lastName)
      e.preventDefault()
      const user = {
          firstName: this.firstName,
          lastName: this.lastName,
          username: this.username,
          password: this.password,
         // birthday: this.date
      }
      this.addUser(user)
     // this.$router.push('/home')
    }
  }
}
</script>