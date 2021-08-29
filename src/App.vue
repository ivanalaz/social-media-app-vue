<template>
<div>
  <router-view />
  
</div>
</template>

<script>
  import LoginForm from "./components/LoginForm";
  import Home from "./views/Home.vue"
  export default {
    components: {
      LoginForm,
      Home
    }
  }
</script>

<style>

body {
  background-image: url("./assets/background2.jpg");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
</style>