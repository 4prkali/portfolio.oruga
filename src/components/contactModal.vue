<template>
  <div class="card">
    <form class="card-content" ref="form" @submit.prevent="sendEmail">
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input name="user_name" class="input" type="text" placeholder="Text input">
        </div>
      </div>

      <div class="field">
        <label class="label">Subject</label>
        <div class="control">
          <input name="subject" class="input" type="text" placeholder="Subject input">
        </div>
      </div>

      <div class="field">
        <label class="label">Email</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input"  name="user_email" type="email" placeholder="Email input" value="">
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
        </div>
      </div>



      <div class="field">
        <label class="label">Message</label>
        <div class="control">
          <textarea name="message" class="textarea" placeholder="Textarea"></textarea>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <input type="submit"  class="button" value="Send email" />
        </div>
      </div>
    </form>

  </div>

</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  methods: {
    sendEmail() {
      emailjs.sendForm('service_dycrr2y', 'template_y6ncltx', this.$refs.form, 'user_rouNg7WFBELx4sABhSp2i')
          .then((result) => {
            console.log('SUCCESS!', result.text);
          }, (error) => {
            console.log('FAILED...', error.text);
          });
    }
  }
}
</script>
