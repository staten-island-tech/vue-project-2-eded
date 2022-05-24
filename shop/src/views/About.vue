

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
import {setDoc,doc, getDoc} from "firebase/firestore"
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore()
    return {store}
  },
  data() {
    return {
      text: { value: "" },
    };
  },
  props: {
    docID: String,
  },
  methods: {
    async submit() {
      await setDoc(doc(db,"users",this.store.state.user.uid),{
        text:this.text.value
      })
    },
    async load() {
      const docRef = doc(db, "users", this.store.state.user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        this.text.value = docSnap.data().text;
      } else {
        console.log("No such document!");
      }
    }
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
