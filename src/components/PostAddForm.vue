<template>
  <div class="contents">
    <h1 class="page-header">Create Post</h1>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">Title : </label>
          <input type="text" id="title" v-model="title" />
        </div>
        <div>
          <label for="contents">Contents : </label>
          <textarea type="text" id="contents" rows="5" v-model="contents" />
          <p v-if="!isContentsValid" class="validation-text warning">
            Contents must be less than 250
          </p>
        </div>
        <button type="submit" class="btn">create</button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script>
import { createPost } from '@/api/index';
export default {
  name: 'PostAddForm',
  data() {
    return {
      title: '',
      contents: '',
      logMessage: '',
    };
  },
  methods: {
    async submitForm() {
      try {
        await createPost({
          title: this.title,
          contents: this.contents,
        });
        this.$router.push('/main');
      } catch (e) {
        this.logMessage = e.response.data.message;
      }
    },
  },
  computed: {
    isContentsValid() {
      return this.contents.length < 250;
    },
  },
};
</script>

<style scoped>
.form-wrapper .form {
  width: 100%;
}
</style>
