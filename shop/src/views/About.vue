<script>
export default {
  data() {
    return {};
  },
  props: {
    docID: String,
  },

  methods: {
    addToFirebase: function () {
      firestore
        .collection("pages")
        .doc(this.docID)
        .set(
          {
            content: this.doc().value,
          },
          { merge: true }
        )
        .then(function (docRef) {
          if (docRef) {
            // will do something here
          }

          let ind = document.querySelector("#saving-indicator");
          ind.innerHTML = "saved!";

          setTimeout(function () {
            ind.classList.add("hide");
            ind.innerHTML = "saving...";
          }, 3000);
        });
    },
  },
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
