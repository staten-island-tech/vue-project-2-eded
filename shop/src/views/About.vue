<script>
export default {
  setup(){
   
  },
  data() {
    return {};
  },
  props: {
    docID: String,
  },

  methods: {
  }

};
</script>

<template>
  <div class="about">
    <h1 class="abouttext">Home Screen</h1>
    <textarea
      id="input-area"
      v-on:focus="documentFocused"
      v-on:blur="documentBlurred"
      v-on:keyup="processContent"
      class="text"
      placeholder="Start typing here..."
      v-model="value"
    ></textarea>
    <button @click="savedoc">SAVE</button>
  </div>
</template>
<style scoped>
.edit-content {
  font-size: 12rem;
}
#input-area{
  size: 100%;
  font-size:3rem;
  height: 70rem;
  width: 100%;
}
button{
  height: 5rem;
  width: 8rem;
font-size: 3rem;}
</style>
