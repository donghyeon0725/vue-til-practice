<template>
  <div class="contents">
    <h1 class="page-header">Edit Post</h1>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">Title:</label>
          <input id="title" type="text" v-model="title" />
        </div>
        <div>
          <label for="contents">Contents:</label>
          <textarea id="contents" type="text" rows="5" v-model="contents" />
          <p
            v-if="!isContentsValid"
            class="validation-text warning isContentTooLong"
          >
            Contents length must be less than 250
          </p>
        </div>
        <button type="submit" class="btn">Modify</button>
      </form>
      <p class="log">
        {{ logMessage }}
      </p>
    </div>
  </div>
</template>

<script>
import { fetchPost, modifyPost } from '@/api/posts';
export default {
  name: 'PostEditForm',
  data() {
    return {
      title: '',
      contents: '',
      logMessage: '',
    };
  },
  computed: {
    isContentsValid() {
      return this.contents.length <= 250;
    },
  },
  methods: {
    async submitForm() {
      const id = this.$route.params.id;

      const postData = {
        title: this.title,
        contents: this.contents,
      };

      try {
        const response = await modifyPost(id, postData);
        console.log(response);
        this.$router.push('/main');
      } catch ({ response }) {
        this.logMessage = response.data.message;
      }
    },
  },
  async created() {
    // 비동기 함수를 사용하기 때문에, 값을 받아온 뒤, 실행하려면 async 키워드가 필요하다
    const id = this.$route.params.id;
    const { data } = await fetchPost(id);
    console.log(data);
    this.title = data.title;
    this.contents = data.contents;
  },
};
</script>

<style scoped>
.form-wrapper .form {
  width: 100%;
}
.btn {
  color: white;
}
</style>
