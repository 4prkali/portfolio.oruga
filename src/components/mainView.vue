<template>
  <section class="hero has-shadow is-fullheight-with-navbar">
    <div class="mx-5 mobile-device">
      <div class="container">
        <div class="columns ">
          <div class="column mx-auto is-7">
            <div class="is-size-2 is-size-4-mobile has-text-black">
              Junior Developer <span class="has-text-info">creating</span> and <span class="has-text-info">designing</span> solutions for your projects.
            </div>
            <div class="is-size-5 is-size-6-mobile mt-5 has-text-justified has-text-grey">
              I'm Alberto Roselló, a passionate junior developer based on Spain with knowledge in multiple languages as Java, HTML, SQL, Kotlin and Swift.
              Seeking to start working and learn every day new ways to improve as a programmer.
            </div>
            <div class="has-text-centered-mobile">
              <o-button @click="isCardModalActive = true" class="mt-5 mr-2">Email me</o-button>
              <a v-on:click="github" class="button is-white mt-5">
                <img :src="require('@/assets/github.png')" style="width:32px" alt="lg_github">
              </a>
              <a v-on:click="linkedin" class="button is-white mt-5">
                <img :src="require('@/assets/logotipo-de-linkedin.png')" style="width:32px" alt="lg_linkedin">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <o-modal animation="zoom-out" can-cancel="['escape', 'x', 'outside', 'button']" v-model:active="isCardModalActive">
    <contact-modal></contact-modal>
  </o-modal>
  
</template>

<script>
// eslint-disable-next-line no-unused-vars

import ContactModal from "./contactModal";
export default {
  name: "mainView",
  methods:{
    linkedin: function (){
      window.location.href = "https://www.linkedin.com/in/albertorosellomartin/";
    },
    github: function (){
      window.location.href = "https://github.com/4prKali";
    },
  },
  data() {
    return {
      isCardModalActive: false
    }
  },
  components: {ContactModal}
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