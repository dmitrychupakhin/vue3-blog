<template>
  <form class="form" @submit.prevent>
    <h3>Создание поста</h3>
    <MyInput v-model="post.title" placeholder="title" />
    <MyInput v-model="post.body" placeholder="body" />
    <div>
      <MyButton @click="createPost"> AddPost </MyButton>
    </div>
  </form>
</template>

<script>
import MyInput from "./UI/MyInput.vue";
export default {
  components: {},
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style scoped>
.form {
  font-size: 25px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 5px;
}
</style>
