<template>
  <div class="navbar">
    <div>Vue 3</div>
    <div class="navbar__btns">
      <MyButton @click="$router.push('/posts/')">Посты</MyButton>
      <MyButton @click="$router.push('/store/')">Store</MyButton>
      <MyButton @click="$router.push('/about/')">О сайте</MyButton>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  components: {},
};
</script>

<style scoped>
.navbar {
  height: 50px;
  background: rgb(99, 180, 107);
  display: flex;
  align-items: center;
  font-size: 25px;
  padding: 15px;
}
.navbar__btns {
  margin-left: auto;
}
</style>
