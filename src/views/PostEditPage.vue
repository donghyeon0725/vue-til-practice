<template>
  <div class="form-containter">
    <PostEditForm></PostEditForm>
  </div>
</template>

<script>
import PostEditForm from '@/components/posts/PostEditForm.vue';
export default {
  name: 'PostEditPage',
  components: {
    PostEditForm,
  },
};
</script>

<style scoped></style>
