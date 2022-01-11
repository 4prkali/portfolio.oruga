<template>
  <section class="hero has-shadow is-fullheight-with-navbar">
    <div class="mx-5 mobile-device">
      <div class="container">
        <div class="columns ">
          <div class="column mx-auto is-7">
            <div class="is-size-2 is-size-4-mobile has-text-black">
              Junior Developer <span class="has-text-info">creating</span> and <span class="has-text-info">designing</span> solutions for your projects.
            </div>
            <div class=" is-size-5 is-size-6-mobile mt-5 has-text-justified has-text-grey">
              I'm Alberto Roselló, a passionate junior developer based on Spain with knowledge in multiple languages as Java, HTML, SQL, Kotlin and Swift.
              Seeking to start working and learn every day new ways to improve as a programmer.
            </div>
            <o-button class="mt-3">Email me</o-button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "mainView",
  components: {}
}
</script>

<style scoped>
.mobile-device{
  margin: auto;
}

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
  .mobile-device {
    margin-top: 1rem;
  }
}


</style>