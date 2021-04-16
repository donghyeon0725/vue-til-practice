import axios from 'axios';
import { setInterceptors } from './common/interceptors';

// 조금 더 깔끔한 코드 작성을 위해서 함수로 묶었다.
function getInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
  return setInterceptors(instance);
}
const instance = getInstance();

// 회원가입 api
function registerUser(userData) {
  return instance.post('signup', userData);
}

// 로그인 api
function loginUser(userData) {
  return instance.post('login', userData);
}

// 학습 노트 데이터를 조회하는 api
function fetchPosts() {
  return instance.get('posts');
}

export { registerUser, loginUser, fetchPosts };
