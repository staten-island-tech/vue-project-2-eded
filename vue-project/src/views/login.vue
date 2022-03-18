<template>
  <div class="columns">
    <div class="column is-half is-offset-one-quarter">
      <div class="card">
        <div class="card-content">
          <div
            v-if="validationErrors.length"
            class="notification is-danger is-light"
          >
            <div class="content">
              Please resolve the following error(s) before proceeding.
              <ul style="margin-top:0.3em; margin-left: 1em">
                <li
                  v-for="(error, index) in validationErrors"
                  :key="`error-${index}`"
                  v-html="error"
                />
              </ul>
            </div>
          </div>
          <form>
            <div class="field">
              <label class="label">E-mail</label>
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
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input
                  v-model="password"
                  class="input"
                  type="password"
                  autocomplete="current-password"
                  placeholder="Password"
                />
              </div>
            </div>
            <div class="field">
              <p class="control">
                <button @click="resetError()"  @click.prevent="validate()" class="button is-success">
                  Login
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
<script>
export default {
  data() {
    return {
      email: null,
      password: null,
      validationErrors: []
    };
  },
  methods: {
    resetError() {
      this.validationErrors = [];
    },
    validate() {
      this.resetError();
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
      if (this.validationErrors.length <= 0) {
        this.signIn();
      }
    },
    signIn() {
      console.log("sign in", this.email, this.password);
    }
  }
};
</script>