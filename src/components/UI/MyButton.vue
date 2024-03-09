<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MyButton",
};
</script>

<style scoped>
.button {
  font-size: 15px;
  padding: 5px;
  border: 1px solid green;
  border-radius: 5px;
  font-weight: 800;
  background: none;
}
</style>
