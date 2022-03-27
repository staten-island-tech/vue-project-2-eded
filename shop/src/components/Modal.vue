<template>
  <transition name="fade">
    <div class="modal" v-show="isHidden">
      <div class="modal-backdrop" @click="closeModal" />
      <div class="modal-dialog">
        <div class="container">
          
            
              <div class="askthem">
                <h5 class="bringthem" v-if="this.signButton">
                  
                </h5>
                <h5 class="bringthem" v-else></h5>
                <Button
                  class="changeform"
                  @button-click="signOpen"
                  v-if="this.signButton"
                  >Sign Up</Button
                >
                <Button class="changeform" @button-click="closeSign" v-else
                  >Login</Button
                >
              </div>
            
          
          <div class="form-container">
            <div class="modal-form">
              <div class="from1" v-if="isSignup"><slot name="form2" /></div>
              <div class="from1" v-else>
                <slot name="form" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Button from "./Button.vue";

export default {
  components: {
    Button,
  },
  data() {
    return {
      signButton: true,
    };
  },

  methods: {
    closeModal: function () {
      this.$store.dispatch("closeModal");
    },
    signOpen: function () {
      this.$store.dispatch("signOpen");
      if (this.isSignup === false) {
        this.signButton = true;
      } else {
        this.signButton = false;
      }
    },
    closeSign: function () {
      this.$store.dispatch("closeSign");
      if (this.isSignup === false) {
        this.signButton = true;
      } else {
        this.signButton = false;
      }
    },
  },
  computed: {
    isHidden() {
      return this.$store.state.isHidden;
    },
    isSignup() {
      return this.$store.state.isSignup;
    },
  },
};
</script>

<style scoped>
.modal {
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
}

.modal-backdrop {
  background-color: #1ebbd7;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
}

.modal-dialog {
  background-color: #ffffff;
  position: relative;
  width: 50rem;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  z-index: 2;
  box-shadow: 5px 6px 10px 3px rgba(0, 0, 0, 0.79);
  @media screen and (max-width: 992px) {
    width: 90%;
  }
}

</style>
