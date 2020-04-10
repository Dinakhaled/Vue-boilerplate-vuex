<template>
  <div class="p-4 h-100">
    <div class="d-flex position-absolute">
      <Button :class="'mb-4 mr-3 danger'" :text="'Login'" :click='login' v-if="!isLoggedIn" />
      <Button :class="'mb-4'" :text="'Logout'" :click='logout' v-if="isLoggedIn" />
    </div>
    <div class="container-fluid d-flex align-items-center flex-column justify-content-center h-100" v-if="isLoggedIn">
      <img src="../assets/images/logo.png" />
      <h1 class="mb-4">Welcome to Vue boilerplate</h1>
      <Button :class="'mb-4'" :text="'Fetch posts - API'" :click='getPosts' />
      <p>Number of posts: {{posts.length || 'Click to fetch'}}</p>
        <div class="form-group d-flex align-items-center">
          <select @change="handleSelectLangChange" class="form-control mr-3" id="exampleFormControlSelect2">
            <option value="en">English</option>
            <option value="ar">Arabic</option>
          </select>
          <h4 class="m-0">{{ $t('localText') }}</h4>
        </div>
      <p>Created by: <a href="https://www.github.com/Dinakhaled" target="_blank">Dina Khaled</a></p>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button";
import { mapActions, mapGetters } from "vuex";
import { i18n } from '@/assets/local/i18n';

export default {
  name: 'Home',
  components: { Button },
  methods: {
      ...mapActions(['login', 'logout', 'getPosts']),
      handleSelectLangChange({target: {value}}) {
        i18n.locale = value;
      }
  },
  computed: mapGetters(['isLoggedIn', 'posts'])
}
</script>

<style lang="scss">
body {
  height: 100vh;
}
</style>