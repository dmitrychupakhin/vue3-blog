<template>
  <div class="post">
    <div>
      <div>Название: {{ post.title }}</div>
      <div>Описание: {{ post.body }}</div>
    </div>
    <div>
      <MyButton @click="$emit('remove', post)"> Delete </MyButton>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>
.post {
  padding: 15px;
  border: 2px solid green;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.post__button {
  font-size: 15px;
  padding: 5px;
}
</style>
