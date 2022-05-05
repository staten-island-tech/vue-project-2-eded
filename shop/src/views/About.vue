<script>

new Vue ({
    el: '#app',
    data:  {
      color: '#ffffff',
      text: 'custom Text here',
      fontSize: '17px'
    },
    methods: {
      changeText: function(event) {
        this.text = event.target.value;
      },
      changeFontSize: function(event) {
        this.fontSize = event.target.value + 'px';
      },
      changeColor: function(event) {
        this.color = event.target.value;
      } 
    }
})
</script>

<template>
  <div class="about">
    <h1 class="abouttext">Home Screen</h1>
      <div class="inputs">
    <input type="text" placeholder="enter 1 text line" @input="changeText">
  <input type="number" value='17' @input="changeFontSize"><span> px </span>
      </div>
    <textarea
      id="input-area"
      v-on:focus="documentFocused"
      v-on:blur="documentBlurred"
      v-on:keyup="processContent"
      class="text"
      placeholder="Start typing here..."
      v-model="text.value"
    ></textarea>
    <button  v-on:click.prevent="post">SAVE</button>
 
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
  margin-top: 3rem;
}
button{
  height: 5rem;
  width: 8rem;
font-size: 3rem;}
</style>
