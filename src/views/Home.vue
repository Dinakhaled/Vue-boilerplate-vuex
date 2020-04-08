<template>
  <div class="container-fluid d-flex align-items-center flex-column justify-content-center h-100">
    <img src="../assets/images/logo.png" />
    <h1 class="mb-4">Welcome to Vue boilerplate</h1>
    <Button class="mb-4" :text="'Sample button component'" />
    <p>Created by: <a href="https://www.github.com/Dinakhaled" target="_blank">Dina Khaled</a></p>
  </div>
</template>

<script>
import Button from "../components/Button";

  export default {
    name: 'Home',
    components: { Button }
  }
</script>

<style lang="scss">
body {
  height: 100vh;
}
</style>