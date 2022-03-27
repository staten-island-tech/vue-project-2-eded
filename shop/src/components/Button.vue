<template>
  <button class="button" @click="$emit('button-click')">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.button {
  background-color: white;
  padding: 0.9rem;
  border: none;
  cursor: pointer;
  font-size: 2rem;
}


</style>
