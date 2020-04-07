<template>
  <div class="container-fluid">
    <Button :text="'Sample button'" />
  </div>
</template>

<script>
import Button from "../components/Button";

  export default {
    name: 'Home',
    components: { Button }
  }
</script>

<style lang="scss" scoped>

</style>