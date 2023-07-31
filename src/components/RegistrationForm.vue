<template>
  <v-dialog
    max-width="600px"
    v-model="dialog"
    >
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
      <!--    @submit.prevent="onSubmit"
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
                <DatePicker @date-picked="datePicked"/>
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
            @click.prevent="onSubmit(); snackbar = true"
          > Register
          </v-btn>
          <v-snackbar v-if="text"
      v-model="snackbar"
      
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          class="pr-2"
          @click="snackbar = false; dialog = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
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
      snackbar: false,
      text: '',
      timeout: 2000,
    }
  },
  methods: {
    //...mapActions(['addUser']),
    datePicked(date) {
      this.date = date
    },
    async onSubmit() {
      //console.log(this.firstName, this.lastName, this.date)
      const response = await axios.post('user', {
          firstName: this.firstName,
          lastName: this.lastName,
          username: this.username,
          password: this.password,
          birthday: this.date
      })
      this.text = response.data.message
      //this.dialog = false
      //console.log(response.data);
      //this.addUser(user)
      //this.$router.push('/') // redirect to login route
    }
  }
}
</script>