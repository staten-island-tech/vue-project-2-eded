

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
    <button @click="load()">LOAD</button>
    <button @click="deletedata()">Delete Account and Data</button>
    <button @click="print()"></button>

  </div>
</template>

<script>
import { deleteUser } from "firebase/auth";

import {db, auth} from "../firebase/config"
import {setDoc,doc, getDoc, deleteDoc} from "firebase/firestore"
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
     print() {
      const prtContent = document.getElementById('input-area');
      const WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
      WinPrint.document.write(prtContent.value);
      WinPrint.document.close();
      WinPrint.focus();
      WinPrint.print();
      WinPrint.close();
    },
    async submit() {
      await setDoc(doc(db,"users",this.store.state.user.uid),{
        text:this.text.value
      }).catch((error) => {
alert("user not logged in") 
})
    },
       async deletedata() {
      await deleteDoc(doc(db,"users",this.store.state.user.uid),{
      });
      const user = auth.currentUser;
await deleteUser(user).then(() => {
  alert("user has been deleted")
}).catch((error) => {
alert("user does not exist") 
});
location.reload();


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
