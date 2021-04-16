import axios from 'axios';

/*
=> 별로 좋지 못한 코드들
const config = {
  baseUrl: 'http://localhost:3000/',
};

function registerUser(userData) {
  return axios.post(`${config.baseUrl}signup`, userData, undefined);
}
*/

const ins = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

function registerUser(userData) {
  return ins.post('signup', userData, undefined);
}

function loginUser(userData) {
  return ins.post('login', userData, undefined);
}

export { registerUser, loginUser };
