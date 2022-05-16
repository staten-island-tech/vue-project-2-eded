<template>
  <div class="home">
    <h1 class="hometext">Home</h1>
    <img src="/src/assets/wendy.png" id="pfp" style="position: relative;
    left: 700px;
    width: 500px;
    height: auto;">
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  setup() {
    const blogs = [
      {
        title: "why tea is better than coffe.",
        id: 1,
      },
      {
        title: "why running is fun.",
        id: 2,
      },
      {
        title: "why is school hard?",
        id: 3,
      },
    ];

    const store = useStore();

    return { blogs };
  },
  components: {},
};
</script>

<style>
.hometext {
  font-size: 5rem;
  margin-right: 5rem;
}


</style>



