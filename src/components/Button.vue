<template>
  <button type="button" class="btn btn-success">{{text}}</button>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      text: String
    }
  }
</script>

<style lang="scss" scoped>
  .btn {
    background-color: #41b883;
    border: none;
  }
</style>