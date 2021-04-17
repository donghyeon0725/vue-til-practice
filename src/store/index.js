import Vue from 'vue';
import Vuex from 'vuex';
import {
  getAuthFromCookie,
  getUserFromCookie,
  saveAuthToCookie,
  saveUserToCookie,
} from '@/utils/cookies';
import { loginUser } from '@/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: getAuthFromCookie() || '',
    token: getUserFromCookie() || '',
  },
  getters: {
    isLogin(state) {
      return state.username !== '';
    },
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
    clearUsername(state) {
      state.username = '';
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    // 첫번째 인자로 store가 제공되고, commit이라는 키워드로 mutations를 호출할 수 있다.
    async LOGIN({ commit }, userData) {
      const { data } = await loginUser(userData);

      commit('setToken', data.token);
      commit('setUsername', data.user.username);

      saveAuthToCookie(data.token);
      saveUserToCookie(data.user.username);

      return data;
    },
  },
});
