

<template>
  <div class="about">
    <h1 class="abouttext" data-v-039c5b43="" style="font-size: 5rem; margin: 2rem;">WRITE</h1>
    <textarea
      id="input-area"
      class="text"
      placeholder="Start typing here..."
      v-model="text.value"
    ></textarea>
    <button @click="submit()">SAVE</button>
  </div>
</template>

<script>
import {db} from "../firebase/config"
import {setDoc,doc} from "firebase/firestore"

export default {
  setup() {},
  data() {
    return {
      text: { value: "" },
    };
  },
  props: {
    docID: String,
  },
  methods: {
    // post: function () {
    //   this.$http
    //     .post(
    //       "https://console.firebase.google.com/project/fir-fc9df/database/fir-fc9df-default-rtdb/data/~2F",
    //       this.text
    //     )
    //     .then(function (data) {
    //       console.log(data);
    //       this.submitted = true;
    //     });
    // },

    async submit() {
      await setDoc(doc(db,"users","test"),{
        text:this.text.value
      })
     console.log(this.$store.user)
      
    },
  },
  
};
</script>

<style scoped>
.edit-content {
  font-size: 12rem;
}
#input-area {
  size: 100%;
  font-size: 3rem;
  height: 70rem;
  width: 100%;
}
button {
  height: 5rem;
  width: 8rem;
  font-size: 3rem;
}
#abouttext {
  font-size: 2rem;
}
</style>
