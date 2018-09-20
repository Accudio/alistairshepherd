<template>
  <form ref="contactform" class="form contact-form" method="post" name="alistair-shepherd-contact" role="form" novalidate="novalidate" netlify netlify-honeypot="oh-dear" @submit.prevent="onSubmit">
    <input type="hidden" name="form-name" value="alistair-shepherd-contact">
    <div class="message">
      {{ message }}
    </div>
    <div class="d-none">
      <label>Don’t fill this out if you're human: <input name="oh-dear"></label>
    </div>
    <div class="row">
      <div class="form-input">
        <label for="form_name">Name</label>
        <input id="form_name" :class="{ 'focused': fields.name }" v-model="form.name" name="name" type="text" placeholder="Please enter your name" required="required" @focus="fields.name = true">
      </div>
      <div class="form-input">
        <label for="form_email">Email Address</label>
        <input id="form_email" :class="{ 'focused': fields.email }" v-model="form.email" name="email" type="email" placeholder="Please enter your email address" required="required" @focus="fields.email = true">
      </div>
    </div>
    <div class="row">
      <div class="form-input">
        <label for="form_message">Message</label>
        <textarea id="form_message" :class="{ 'focused': fields.message }" v-model="form.message" name="message" placeholder="Please enter a message" rows="5" required="required" @focus="fields.message = true"/>
      </div>
    </div>
    <div class="row">
      <div class="form-input">
        <label class="check">
          <input id="form_privacy" :class="{ 'focused': fields.privacy }" name="privacy" type="checkbox" required="required" @focus="fields.privacy = true">
          <span class="checkmark" />
          By submitting this form I agree that Alistair Shepherd can store my submitted information in accordance with the <nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link> in order to respond to my enquiry.
        </label>
      </div>
    </div>
    <div class="row">
      <div class="form-input">
        <input class="btn" type="submit" value="Send form" name="submitted">
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data: () => ({
    fields: {
      name: false,
      email: false,
      message: false,
      privacy: false
    },
    form: {
      name: '',
      email: '',
      message: ''
    },
    message: 'Please complete the required fields before submitting'
  }),
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&');
    },
    onSubmit(e) {
      const form = this.$refs.contactform
      if(form.checkValidity() === false) {
        form.classList.add('was-validated')
      } else {
        fetch('/', {
          method: 'POST',
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: this.encode({'form-name': 'alistair-shepherd-contact', ...this.form})
        }).then(() => {
          this.message = 'Thanks! I\'ll get back to you as soon as I can!'
          form.classList.add('was-validated')
        }).catch((error) => {
          this.message = 'It appears there was an error in submitting the form. Please try again later'
          form.classList.add('was-validated')
        });
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-form {
  .row {
    align-items: flex-end;
    display: flex;
    flex-wrap: wrap;

    .form-input {
      flex: 1;
      flex-basis: 100%;
      padding: 0 1rem 1.5rem;

      @media screen and (min-width: 500px) {
        flex-basis: 50%;
      }

      label {
        display: block;
      }

      input:not([type='checkbox']):not([type='submit']), select, textarea {
        background: none;
        border: 0;
        border-bottom: 2px solid rgba(255, 255, 255, .4);
        color: #eee;
        font-family: 'Exo', sans-serif;
        font-size: 1rem;
        outline: none;
        padding: 10px;
        resize: none;
        text-align: center;
        transition: all .3s;
        width: 100%;

        @media screen and (min-width: 500px) {
          text-align: left;
        }

        &:focus {
          border-color: #fff;
        }

        &::placeholder {
          color: rgba(255, 255, 255, .6);
        }

        &.focused:invalid {
          border-color: #dc3545 !important;
        }

        &:-webkit-autofill {
          -webkit-animation-fill-mode: both;
          -webkit-animation-name: autofill;
        }

        @-webkit-keyframes autofill {
          to {
            background: transparent;
            color: #eee;
          }
        }
      }

      .check {
        display: block;
        padding-left: 35px;
        position: relative;
        user-select: none;

        .checkmark {
          border: 2px solid rgba(255, 255, 255, .4);
          border-radius: 5px;
          cursor: pointer;
          height: 22px;
          left: 0;
          position: absolute;
          top: 0;
          transition: border-color .1s;
          width: 22px;

          &::after {
            border: solid #fff;
            border-width: 0 3px 3px 0;
            content: '';
            height: 7px;
            left: 6px;
            opacity: 0;
            position: absolute;
            top: 3px;
            transform: rotate(45deg);
            transition: opacity .1s;
            width: 3px;
          }
        }

        input {
          cursor: default;
          opacity: 0;
          position: absolute;

          &.focused:not(:checked) ~.checkmark {
            border-color: #dc3545;
          }

          &:checked ~.checkmark {
            border-color: rgba(255, 255, 255, 1);

            &::after {
              opacity: 1;
            }
          }
        }
      }

      .btn {
        background: none;
        border: solid 2px #fff;
        border-radius: 6px;
        color: #fff;
        cursor: pointer;
        font-family: 'Exo', sans-serif;
        font-size: 1rem;
        padding: .5rem;
      }
    }
  }

  .message {
    margin-bottom: 1rem;
    opacity: 0;
    transition: opacity .3s, visibility .3s;
    visibility: hidden;
  }

  &.was-validated {
    .message {
      opacity: 1;
      visibility: visible;
    }

    .form-input {
      input:invalid, textarea:invalid, select:invalid {
        border-color: #dc3545 !important;
      }

      input[type='checkbox']:invalid {
        ~.checkmark {
          border-color: #dc3545;
        }
      }
    }
  }

  &.sent .message {
    opacity: 1;
    visibility: visible;
  }

  .d-none {
    display: none;
  }
}
</style>
