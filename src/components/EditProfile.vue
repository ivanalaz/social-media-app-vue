<template>
<v-col class="ml-2">
  <v-container>
    <v-card outlined>
        <v-form>
            <v-text-field
            label="First name"
            hide-details
            v-model="firstName"
            ></v-text-field>
            <v-text-field 
            label="Last name" 
            hide-details
            v-model="lastName"/>
        </v-form>
    </v-card>
  </v-container>
</v-col>
</template>
<script>
export default {
    name: 'EditProfile',
    data() {
        return {
            firstName: '',
            lastName: '',

        }
    }
}
</script>