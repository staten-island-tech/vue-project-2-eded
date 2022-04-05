<script>
export default {
  data() {
    return {};
  },
  props: {
    docID: String,
  },

  methods: {
    savedoc: function () {
      
    },
  },
};
</script>

<template>
  <div class="about">
    <h1 class="abouttext">Home Screen</h1>
    <div class="edit-content">
      <p class="loading" id="loading">Saving document....</p>
      <div class="editor" contenteditable="true" id="editor"></div>
    </div>
    <button @click="savedoc">SAVE</button>
  </div>
</template>

<style scoped>
.edit-content {
  font-size: 12rem;
}
</style>
let userId = '';
let userName = '';
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    userId = user.uid;
    userName = user.displayName;
    init();
  } else {
    console.log(user + '' + 'logged out');
  }
});

function init(){
  const token = localStorage.getItem('token');
  if(!token){
    const docId = firebase.firestore().collection('docs')
                                      .doc(userId)
                                      .collection('documents')
                                      .doc().id;
      localStorage.setItem('token', docId);
    }else{
        delay(function(){
          getSingleDocDetails(token);
        }, 1000 );
    }
}