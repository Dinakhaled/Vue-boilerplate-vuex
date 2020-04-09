<template>
  <div class="p-4 h-100">
    <div class="d-flex position-absolute">
      <Button :class="'mb-4 mr-3 danger'" :text="'Login'" :click='login' v-if="!isLoggedIn" />
      <Button :class="'mb-4'" :text="'Logout'" :click='logout' v-if="isLoggedIn" />
    </div>
    <div class="container-fluid d-flex align-items-center flex-column justify-content-center h-100" v-if="isLoggedIn">
      <img src="../assets/images/logo.png" />
      <h1 class="mb-4">Welcome to Vue boilerplate</h1>
      <p>Created by: <a href="https://www.github.com/Dinakhaled" target="_blank">Dina Khaled</a></p>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button";
import { mapActions, mapGetters } from "vuex";

export default {
  name: 'Home',
  components: { Button },
  methods: mapActions(['login', 'logout']),
  computed: mapGetters(['isLoggedIn'])
}
</script>

<style lang="scss">
body {
  height: 100vh;
}
</style>