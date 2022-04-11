<script>
export default {
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
      class="card"
      placeholder="Start typing here..."
    ></textarea>
    <button @click="savedoc">SAVE</button>
  </div>
</template>
<style scoped>
.edit-content {
  font-size: 12rem;
}
</style>
