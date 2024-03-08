<template>
    <div class="wrapper">
        <form class="form" @submit.prevent>
            <h3>Создание поста</h3>
            <input v-bind:value='title' @input="title = $event.target.value" class="input" type="text"
                placeholder="title">
            <input v-bind:value='body' @input="body = $event.target.value" class="input" type="text" placeholder="body">
            <button @click="addPost">Add post</button>
        </form>
        <div class="post" v-for="post in posts">
            <div>Название: {{ post.title }}</div>
            <div>Описание: {{ post.body }}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: [
                { id: 1, title: 'Java Script1 ', body: 'Описание' },
                { id: 1, title: 'Java Script2', body: 'Описание' },
                { id: 1, title: 'Java Script3', body: 'Описание' },
                { id: 1, title: 'Java Script4', body: 'Описание' },
            ],
            title: '',
            body: '',
        }
    },
    methods: {
        addPost() {
            const newPost = {
                id: Date.now(),
                title: this.title,
                body: this.body,
            }
            this.posts.push(newPost);
        },
    }
}
</script>

<style>
/*Обнуление*/
* {
    padding: 0;
    margin: 0;
    border: 0;
}

*,
*:before,
*:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

:focus,
:active {
    outline: none;
}

a:focus,
a:active {
    outline: none;
}

nav,
footer,
header,
aside {
    display: block;
}

html,
body {
    height: 100%;
    width: 100%;
    font-size: 100%;
    line-height: 1;
    font-size: 14px;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
}

input,
button,
textarea {
    font-family: inherit;
}

input::-ms-clear {
    display: none;
}

button {
    cursor: pointer;
}

button::-moz-focus-inner {
    padding: 0;
    border: 0;
}

a,
a:visited {
    text-decoration: none;
}

a:hover {
    text-decoration: none;
}

ul li {
    list-style: none;
}

img {
    vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-size: inherit;
    font-weight: 400;
}

.post {
    padding: 15px;
    border: 2px solid green;
    margin-bottom: 15px;
}

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

.wrapper {
    padding: 20px;
}
</style>