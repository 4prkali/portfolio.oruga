<template>
  <nav class="navbar is-white has-shadow is-fixed-top " role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <a class="has-text-black" href="#">Home</a>
          </div>
          <div class="navbar-item">
            <a  class="has-text-black" href="#">Projects</a>
          </div>
          <div class="navbar-item">
            <a href="#" class="has-text-black">Tools</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar"
}
</script>

<style scoped>

</style>