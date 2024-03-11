<template>
  <div>
    <h1>Страница с постами</h1>
    <MyInput
      v-focus
      :model-value="searchQuery"
      @update:model-value="setSearchQuery"
      placeholder="Search"
    />
    <div class="app__buttons">
      <MyButton @click="showDialog">Создать пост</MyButton>
      <MySelect
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
        :options="sortOptions"
      ></MySelect>
    </div>
    <MyDialog v-model:show="dialogVisible">
      <PostForm @create="createPost" />
    </MyDialog>
    <PostList
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
      v-if="!isPostsLoading"
    />
    <div v-else>Загрузка...</div>
    <div v-intersection="loadMorePosts" class="observer"></div>
    <!-- <div class="page__wrapper">
      <div
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        class="page"
        :class="{
          'current-page': page === pageNumber,
        }"
        @click="changePage(pageNumber)"
      >
        {{ pageNumber }}
      </div>
    </div> -->
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    ...mapMutations({
      setPage: "post/setPage",
      setSearchQuery: "post/setSearchQuery",
      setSelectedSort: "post/setSelectedSort",
    }),
    ...mapActions({
      loadMorePosts: "post/loadMorePosts",
      fetchPosts: "post/fetchPosts",
    }),
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },

    /*  changePage(pageNumber) {
      this.page = pageNumber;
    }, */
  },

  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      isPostsLoading: (state) => state.post.isPostsLoading,
      selectedSort: (state) => state.post.selectedSort,
      searchQuery: (state) => state.post.searchQuery,
      page: (state) => state.post.page,
      limit: (state) => state.post.limit,
      totalPages: (state) => state.post.totalPages,
      sortOptions: (state) => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPosts: "post/sortedPosts",
      sortedAndSearchedPosts: "post/sortedAndSearchedPosts",
    }),
  },
  watch: {
    selectedSort(newValue) {
      this.posts.sort((post1, post2) => {
        return post1[newValue]?.localeCompare(post2[newValue]);
      });
    },
    page() {
      /* this.fetchPosts(); */
    },
  },
};
</script>

<style>
.app {
  padding: 20px;
}

.app__buttons {
  display: flex;
  justify-content: space-between;
}
.page__wrapper {
  display: flex;
}
.page {
  border: 1px solid black;
  padding: 10px;
  font-size: 20px;
}
.current-page {
  border: 2px solid red;
}
.observer {
  height: 30px;
  background: red;
}
</style>
