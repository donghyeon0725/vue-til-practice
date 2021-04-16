<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">username : </label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">pw : </label>
      <input id="password" type="text" v-model="password" />
    </div>
    <div>
      <label for="nickname">nickname : </label>
      <input id="nickname" type="text" v-model="nickname" />
    </div>
    <p>{{ logMessage }}</p>
    <button
      :disabled="!isUsernameValid || !password || !nickname"
      type="submit"
    >
      회원 가입
    </button>
  </form>
</template>

<script>
import { registerUser } from '@/api/index';
import { validateEmail } from '@/util/validation';

export default {
  name: 'SignupForm',
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
      logMessage: '',
    };
  },
  methods: {
    async submitForm() {
      try {
        const userData = {
          username: this.username,
          password: this.password,
          nickname: this.nickname,
        };
        const { data } = await registerUser(userData);
        this.logMessage = `${data.username}님, 회원가입 해주셔서 감사합니다:)`;
      } catch (e) {
        console.log(e.response);
        this.logMessage = e.response.data;
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    },
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
};
</script>

<style scoped></style>
