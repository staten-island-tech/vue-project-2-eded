<template>
  <div class="login">
    <div class="field" id="email">
      <label class="label">E-mail</label>
      <input
        v-model="email"
        class="input"
        type="text"
        autocomplete="email"
        placeholder="example@email.com"
      />
    </div>
    <div class="field" id="password">
      <label class="label">Password</label>
      <input
        v-model="password"
        class="input"
        type="text"
        autocomplete="password"
        placeholder="password"
      />
    </div>
    <button @click.prevent="signIn()" class="button is-success">Login</button>
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