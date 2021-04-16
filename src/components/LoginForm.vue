<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id : </label>
      <input type="text" id="username" v-model="username" />
    </div>
    <div>
      <label for="password">pw : </label>
      <input type="text" id="password" v-model="password" />
    </div>
    <button :disabled="!isUsernameValid || !password" type="submit">
      로그인
    </button>
    <p>{{ loginMessage }}</p>
  </form>
</template>

<script>
import { loginUser } from '@/api/index';
import { validateEmail } from '@/util/validation';

export default {
  name: 'LoginForm.vue',
  data() {
    return {
      username: '',
      password: '',
      loginMessage: '',
    };
  },
  methods: {
    async submitForm() {
      try {
        const userData = {
          username: this.username,
          password: this.password,
        };

        const {
          data: { message, token },
        } = await loginUser(userData);

        console.log(message);
        console.log(token);

        this.loginMessage = `${this.username}님 환영합니다.`;
      } catch (e) {
        console.log(e.response);
        this.loginMessage = e.response.data;
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
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
