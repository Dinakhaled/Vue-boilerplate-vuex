<template>
  <button type="button" class="btn btn-success" @click="click">{{text}}</button>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      text: {
        type: String,
        default: 'Button name'
      },
      click: {
        type: Function,
      }
    }
    // other syntax
    // props: ['text', 'click']
  }
</script>

<style lang="scss" scoped>
  .btn {
    background-color: #41b883;
    border: none;
  }
</style>