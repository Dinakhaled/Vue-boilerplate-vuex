<template>
  <button type="button" class="btn btn-primary">{{text}}</button>
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

</style>