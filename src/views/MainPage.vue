<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>
      <LoadingSpinner v-if="isLoading"></LoadingSpinner>
      <ul>
        <PostListItem
          v-for="postItem in postItems"
          :key="postItem._id"
          :postItem="postItem"
        ></PostListItem>
        <!--<li v-for="postItem in postItems" :key="postItem._id">
          <div class="post-title">
            {{ postItem.title }}
          </div>
          <div class="post-contents">
            {{ postItem.contents }}
          </div>
          <div class="post-time">
            {{ postItem.createdAt }}
          </div>
        </li>-->
      </ul>
    </div>
  </div>
</template>

<script>
import { fetchPosts } from '@/api/index';
import PostListItem from '@/components/posts/PostListItem.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';

export default {
  data() {
    return {
      postItems: [],
      isLoading: false,
    };
  },
  components: {
    PostListItem,
    LoadingSpinner,
  },
  methods: {
    async fetchNotes() {
      this.isLoading = true;
      const { data } = await fetchPosts();
      this.isLoading = false;
      this.postItems = data.posts;
    },
  },
  created() {
    this.fetchNotes();
  },
};
</script>

<style></style>
