<template>
  <form @submit.prevent="handleSubmit" class="form">
    <h1 class="logtext">SIGN UP</h1>
    <iconClose class="modal__close" @click="closeModal"></iconClose>
    <div class="container">
      <div class="econtainer">
        <label for="email" class="email">Email</label>
        <input
          type="email"
          name="email"
          v-model="email"
          class="input"
          required
          placeholder="example@gmail.com"
        />
      </div>
      <div class="pcontainer">
        <label for="email" class="password">Password</label>
        <input
          type="password"
          name="password"
          v-model="password"
          placeholder="Password needs to be at least 6 characters"
          class="input"
          required

        />
      </div>
      <div class="error" v-if="error">{{ error }}</div>
      <div class="login"><Button class="button">SIGN UP</Button></div>
    </div>
  </form>
</template>

<script>
import Button from "./Button.vue";
import iconClose from "./icons/IconClose.vue";
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const error = ref(null);

    const store = useStore();
    const router = useRouter();

    const handleSubmit = async () => {
      try {
        await store.dispatch("signup", {
          email: email.value,
          password: password.value,
        });
        router.push("/");
        store.dispatch("closeModal");
      } catch (err) {
        error.value = err.message;
      }
    };
    return { handleSubmit, email, password, error };
  },

  components: {
    Button,
    iconClose,
  },
  methods: {
    closeModal: function () {
      this.$store.dispatch("closeModal");
    },
  },
};
</script>

<style scoped>
.form {
  width: 40rem;
  background-color: #fff;
  border-radius: 2rem;
}

.modal__close {
  width: 1rem;
  cursor: pointer;
  position: absolute;
  right: 1.5rem;
  top: 1.25rem;
}

.logtext {
  width: fit-content;
  margin: 0 auto;
  padding-top: 1rem;
}
.container {
  margin-left: 1rem;
  margin-right: 1rem;
}

.econtainer,
.pcontainer {
  padding: 1.5rem;
}
.email,
.password {
  font-size: 2rem;
}
.input {
  display: block;
  width: 40rem;
  height: 3rem;
  font-size: 2rem;
}
.login {
  padding: 1.5rem;
  width: 100%;
  font-size: 3rem;
}
.button {
  width: 100%;
}
.error{
  font-size: 2rem;
}
</style>
