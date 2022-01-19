<template>
  <navbar></navbar>
  <router-view/>
</template>

<style lang="scss">
</style>
<script>
import Navbar from "./components/navbar";
export default {
  components: {Navbar}
}
</script>