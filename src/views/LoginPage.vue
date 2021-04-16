<template>
  <div>
    <h1>로그인 페이지</h1>
    <LoginForm></LoginForm>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';
export default {
  name: 'LoginPage',
  components: {
    LoginForm,
  },
};
</script>

<style scoped></style>
