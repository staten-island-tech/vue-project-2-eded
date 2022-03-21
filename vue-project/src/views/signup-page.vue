<template>
  <div class="columns">
      <div class="card">
        <div class="card-content">
          <div
            v-if="validationErrors.length"
            class="notification is-danger is-light"
          >
            <button @click="resetError()" class="delete"></button>
            <div class="content">
              Please resolve the following error(s) before proceeding.
              <ul>
                <li
                  v-for="(error, index) in validationErrors"
                  :key="`error-${index}`"
                  v-html="error"
                />
              </ul>
            </div>
          </div>
          <form>
            <div>
              <label>E-mail</label>
              <div class="control">
                <input
                  v-model="email"
                  class="input"
                  type="text"
                  autocomplete="email"
                  placeholder="example@email.com"
                />
              </div>
            </div>
            <div>
              <label >Password</label>
              <div>
                <input
                  v-model="password"
                  class="input"
                  type="password"
                  autocomplete="current-password"
                  placeholder="Password"
                />
              </div>
            </div>
            <div >
              <label class="label">Repeat password</label>
              <div class="control">
                <input
                  v-model="passwordRepeat"
                  class="input"
                  type="password"
                  autocomplete="new-password"
                  placeholder="Password"
                />
              </div>
            </div>
            <div class="field">
              <p class="control">
                <button @click.prevent="validate()">
                  Register
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
      passwordRepeat: null,
      validationErrors: []
    };
  },
  methods: {
  
    validate() {
              this.validationErrors = [];

      if (!this.email) {
        this.validationErrors.push("<strong>E-mail</strong> cannot be empty.");
      }
      if (/.+@.+/.test(this.email) != true) {
        this.validationErrors.push("<strong>E-mail</strong> must be valid.");
      }
      if (!this.password) {
        this.validationErrors.push("<strong>Password</strong> cannot be empty");
      }
      if (/.{6,}/.test(this.password) != true) {
        this.validationErrors.push(
          "<strong>Password</strong> must be at least 6 characters long"
        );
      }
      if (!(this.password === this.passwordRepeat)) {
        this.validationErrors.push("<strong>Passwords</strong> did not match");
      }
      if (this.validationErrors.length <= 0) {
        this.signUp();
      }
    },
    signUp() {
      console.log("sign up", this.email, this.password);
    }
  }
};
</script>