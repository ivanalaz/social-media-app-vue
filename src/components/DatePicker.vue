<template>
    <div>
        <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="date"
          label="Birthday date"
          prepend-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        style="background-color: #272727"
        v-model="date"
        :active-picker.sync="activePicker"
        :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
        min="1940-01-01"
        @change="save"
      ></v-date-picker>
    </v-menu>
    </div>
</template>

<script>
  export default {
    name: 'DatePicker',
    data: () => ({
      activePicker: null,
      date: null,
      menu: false,
    }),
    watch: {
      menu (val) {
        val && setTimeout(() => (this.activePicker = 'YEAR'))
      },
    },
    methods: {
      save (date) {
        //console.log(date);
        this.$emit('date-picked', date)
        this.$refs.menu.save(date)
      },
    },
  }
</script>