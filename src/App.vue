<template>
  <navbar></navbar>
  <main-view></main-view>
</template>

<script>

import MainView from "@/components/mainView";
import Navbar from "@/components/navbar";
export default {
  name: 'App',
  components: {
    Navbar,
    MainView
  }
}
</script>

<style>

</style>
