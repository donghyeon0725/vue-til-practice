import { sum } from '@/components/math';

// 기본적인 테스트 방법
// 제스트에서 제공하는 기본 api => 테스트 케이스를 그룹화 하는 api
describe('main.js', () => {
  // 테스트 할 대상의 이름을 정하고, 테스트 코드를 넣는 곳
  test('10 + 20 = 30', () => {
    const result = sum(10, 20);
    // expect => 기대 대상을 설정, toBe => 기대값을 설정
    expect(result).not.toBe(20);
    expect(result).not.toBe(10);
    expect(result).not.toBe(40);
  });
});

// 뷰 모듈 로드
import Vue from 'vue';
import LoginForm from '@/components/LoginForm.vue';

// 기본적인 컴포넌트 테스트 방법
describe('LoginForm.vue', () => {
  test('컴포넌트가 마운팅 되면 username이 존재하고 초기 값으로 설정이 되어 있어야 합니다.', () => {
    const instance = new Vue(LoginForm).$mount();
    console.log(instance);
    expect(instance.username).toBe('');
  });
});

// 테스트를 위한, util을 불러옵니다.
import { shallowMount } from '@vue/test-utils';

// 뷰 라이브러리를 이용한 테스트 코드 줄이는 방법
describe('LoginForm.vue', () => {
  test('컴포넌트가 마운팅 되면 username이 존재하고 초기 값으로 설정이 되어 있어야 합니다.', () => {
    const wrapper = shallowMount(LoginForm);
    // wrapper 내부의 vm 이 바로 vue 인스턴스이다.
    expect(wrapper.vm.username).toBe('');
  });
});

// 로그인 폼 테스트, 여러 데이터 케이스를 테스팅 하는 방법
describe('LoginForm.vue', () => {
  test('ID, PW가 없으면, 로그인 버튼이 비활성화 된다.', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: '',
          password: '',
        };
      },
    });

    const button = wrapper.find('button.btn');

    // 정상인 경우
    wrapper.setData({
      username: 'a@a.com',
      password: '11234',
    });
    expect(button.element.disabled).not.toBeTruthy();

    // 데이터가 없는 경우
    wrapper.setData({
      username: '',
      password: '',
    });
    expect(button.element.disabled).toBeTruthy();

    // ID만 있는 경우
    wrapper.setData({
      username: 'a@a.com',
      password: '',
    });
    expect(button.element.disabled).toBeTruthy();

    // 비밀번호만 있는 경우
    wrapper.setData({
      username: '',
      password: '1',
    });
    expect(button.element.disabled).toBeTruthy();
  });
});
