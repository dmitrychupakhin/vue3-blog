<template>
    <form class="form" @submit.prevent>
        <h3>Создание поста</h3>
        <input v-model="post.title" class="input" type="text" placeholder="title">
        <input v-model="post.body" class="input" type="text" placeholder="body">
        <button @click="createPost">Add post</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            post: {
                title: '',
                body: '',
            }
        }
    },
    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit('create', this.post);
            this.post = {
                title: '',
                body: '',
            }
        }
    }
}
</script>

<style scoped>
.input {
    padding: 5px;
    border: 2px solid green;
}

.form {
    font-size: 25px;
    display: grid;
    gap: 5px;
    margin-bottom: 5px;
}
</style>