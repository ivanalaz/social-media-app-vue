<template>

<v-container data-app style="margin-top: 7%; text-align: center; font-family: 'Roboto', sans-serif;" >
<v-card
  shaped
  outlined
  max-width="400">
    <v-card-title style="flex-direction: column; margin-top: 12px">
        <h1>Login to Socialite</h1>
    </v-card-title>
<v-form
    ref="form"
    lazy-validation
    class="add-form"
    @submit.prevent="handleSubmit"
    id="handle-submit-form"
  >
  <v-container >
    <v-text-field
      v-model="username"
      
      label="Username"
      prepend-icon="mdi-account-circle"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
      :type="show ? 'text' : 'password'"
      label="Password"
      @click:append="show = !show"
      prepend-icon="mdi-lock"
      required
    ></v-text-field>
    <v-btn  >
     <!-- @click="submit" type="submit"
       <router-link to="/home"> -->
    <input type="submit" value="LOGIN" class="btn btn-block" 
      form="handle-submit-form"/>
      
    </v-btn>

</v-container>
  </v-form>
  <v-container >
    <h4>Don't have a profile?</h4>
    <v-flex class="mt-4 mb-3" style="margin-top: 10px;">
          <RegistrationForm/>
        </v-flex>
    </v-container>
  </v-card>
  </v-container>
  
</template>

<script>
import RegistrationForm from './RegistrationForm.vue'
import axios from 'axios'
  export default {
    components: { RegistrationForm },
    name: 'LoginForm',
    data: () => ({
      username: '',
      password: '',
      show: false,
      /*nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ]*/
    }),
    methods: {
     /* validate () {
        this.$refs.form.validate()
      },*/
      async handleSubmit () {
        const response = await axios.post('login', {
          username: this.username,
          password: this.password
        })
        console.log(response.data);
        localStorage.setItem('token', response.data)
        this.$router.push({ name: 'NewsFeed' })
      }
    }
  }
</script>
<style scoped>
.add-form {
  /*margin-bottom: 20px;*/
  padding: 20px 30px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}
a.router-link-exact{
  color: black;
}/*
body {
  background-image: url("../assets/background2.jpg");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}*/
</style>