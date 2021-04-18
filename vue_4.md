[→ Open in Slid](https://slid.cc/vdocs/7fc8a4f9a6cf47d2b6b98704edf31598)


---


**테스트 실행 scripts 만들기**

```
vue-cli-service test:unit --watchAll
```


\--watchAll 옵션은 변화가 있을 때, 변화가 있는 모든 파일을 리컴파일 하는 옵션임





**제스트 설정**


jest.config.js 파일을 만들어서 설정 내용을 추가해주면 됨

```
module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: [
    '<rootDir>/src/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)',
  ],
};

```


설명 : src 경로 아래, \*.spec.(js|jsx|ts|tsx) 형식의 모든 파일을 테스트 한다.


위 설정이 없으면, test 폴더 아래에 대상 파일이 있어야 함.


\=> 보통 사람들이 쉽게 테스트를 하기 위해, 실제 동작하는 파일과 테스트 파일을 곁에 두는 경향이 있음. 따라서 위와 같은 설정을 사용





**테스트 실행 명령**


스크립트에 있는 npm test

```
npm test
// or 
npm t
```








**테스트의 목적**


ex) 로그인

- 입력된 이메일이 맞는지 확인
- ip, pw가 맞는지 확인


위 기능들이 테스트가 필요함


위 기능을, 테스트 코드를 작성함으로써, 수작업의 점검시간을 줄여줌


또한, 사용자가 어떤 의도로 이 코드를 작성하였는지 한눈에 볼 수 있게 해줌(기대값은 이거다! 하고 알려주기 때문)











**테스트에 가장 많이 사용되는 자바스크립트 라이브러리**


https://2020.stateofjs.com/en-US/technologies/testing/


위 링크를 보기 바람


제스트가 손에 꼽히는 라이브러리임








**제스트 공식 사이트**

```
https://jestjs.io/
```





**설치**


vue cli 에서 미리 설정 했기 때문에 별도의 설치는 필요 없음

[![vue_4 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/7fc8a4f9a6cf47d2b6b98704edf31598/354d7df9-02ca-42d3-bdc5-ba65ab8fde85.png)](https://slid.cc/vdocs/7fc8a4f9a6cf47d2b6b98704edf31598?v=65e5808596c940fe8e2cef718f7ea165&start=5591.281136)





**기본적인 사용법**

```
import { sum } from './math';

// 제스트에서 제공하는 기본 api => 테스트 케이스를 그룹화 하는 api
describe('main.js', () => {
  // 테스트 할 대상의 이름을 정하고, 테스트 코드를 넣는 곳
  test('10 + 20 = 30', () => {
    const result = sum(10, 20);
    // expect => 기대 대상을 설정, toBe => 기대값을 설정
    expect(result).toBe(30);
  });
});

```





**이외**


페이지가 로드 될 때, 어떤 값과 어떤 모듈이 로드되기를 바라는지 등등도 설정할 수 있음








**eslint 설정을, 테스트 코드에서 원하는 방식으로 동작하도록 변경**

[![vue_4 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/7fc8a4f9a6cf47d2b6b98704edf31598/19f09ced-1862-4f58-956e-97800a1fc990.png)](https://slid.cc/vdocs/7fc8a4f9a6cf47d2b6b98704edf31598?v=65e5808596c940fe8e2cef718f7ea165&start=6096.747699)


test 밑에서 사용하면 필요없지만, 별도의 제스트 설정을 사용해서 src 경로 아래에 테스트코드를 작성한다면 위와 같은

```
jest: true
```


코드가 필요함








**테스트 코드의 일반적인 방법**


테스트 코드는, 맞는 경우보다 아닌경우를 가려내는 코드가 더 정확하다.


예를 들면 아래와 같다.

```
import { sum } from './math';

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

```








**vue 컴포넌트의 테스트**


1\. 인스턴스를 mount 하기


2\. console.log 로 생성된 인스턴스의 구조 살피기

[![vue_4 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/image_upload/7fc8a4f9a6cf47d2b6b98704edf31598/8b1f3195-adbc-47ad-8149-8b49b3ae4f47.png)](undefined)


3\. 컴포넌트의 특정 값, 또는 구조가 어떻게 되어야 하는지 정의하기

```
import Vue from 'vue';
import LoginForm from '@/components/LoginForm.vue';

describe('LoginForm.vue', () => {
  test('컴포넌트가 마운팅 되면 username이 존재하고 초기 값으로 설정이 되어 있어야 합니다.', () => {
    const instance = new Vue(LoginForm).$mount();
    console.log(instance);
    expect(instance.username).toBe('');
  });
});

```








**뷰.js 에서 제공하는 공식 unit 테스트 방법**


https://vue-test-utils.vuejs.org/


위 링크에 들어가면 있습니다.





**뷰 테스트 유틸 라이브러리를 사용해서 줄인 코드**

```
// 테스트를 위한, util을 불러옵니다.
import { shallowMount } from '@vue/test-utils';
import LoginForm from '@/components/LoginForm.vue';

describe('LoginForm.vue', () => {
  test('컴포넌트가 마운팅 되면 username이 존재하고 초기 값으로 설정이 되어 있어야 합니다.', () => {
    const wrapper = shallowMount(LoginForm);
    // wrapper 내부의 vm 이 바로 vue 인스턴스이다.
    expect(wrapper.vm.username).toBe('');
  });
});

```











**실전 테스팅**


테스트해야할 대상


computed 등등의 내용을 검사할 필요는 없고,


사용자 관점에서 어떠한 것들이 표기 되어야 하는지,


등등을 고려해서 해당 내용을 테스트 한다.


즉, 로그인 폼에서 내용을 테스트 할 때, computed가 제대로 동작하는지 확인할 것이 아니라, 값이 제대로 들어가지 않았을 때, 텍스트가 제대로 나오는지 확인을 한다.








shallowMount의 특정 컴포넌트 찾기


shallowMount의 find api 이용

```
// 테스트를 위한, util을 불러옵니다.
import { shallowMount } from '@vue/test-utils';
import LoginForm from '@/components/LoginForm.vue';

describe('LoginForm.vue', () => {
  test('ID는 email 형식이어야 합니다.', () => {
    const wrapper = shallowMount(LoginForm);
    // input 찾기 
    const idInput = wrapper.find('#username');
    // input의 html 출력하기
    console.log(idInput.html());
  });
});

```





결과

[![vue_4 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/image_upload/7fc8a4f9a6cf47d2b6b98704edf31598/47dc2292-abf8-4fbb-8f9f-6cb237b7d620.png)](undefined)








**마운팅 한 뒤, 태그에 특정 값 세팅하기**


요소에 직접 접근이 가능하다.\*

```
const wrapper = shallowMount(LoginForm);
const idInput = wrapper.find('#username');
// 요소에 직접 접근해서 값을 세팅
idInput.element.value = 'osk50@naver.com';
console.log(idInput.element.value);


```


**결과**

```
Watch Usage: Press w to show more.
 PASS  src/components/LoginForm.spec.js
  LoginForm.vue
    √ ID는 email 형식이어야 합니다. (40ms)

  console.log src/components/LoginForm.spec.js:10
    osk50@naver.com

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        4.197s
Ran all test suites.

```








**마운팅 할 때, 특정 값을 인스턴스에 세팅하기**


computed나, data 값 테스팅도 가능하다.

```
describe('LoginForm.vue', () => {
  test('ID는 email 형식이어야 합니다.', () => {
    const wrapper = shallowMount(LoginForm, {
      // 두번째 인자로 data를 전달합니다.
      data() {
        return {
          username: 'task@naver.com',
        };
      },
    });
    // computed 값 테스팅
    expect(wrapper.vm.isUsernameValid).toBe(true);
  });
});

```





사용자 관점에서 => 이메일 형식이 맞지 않을 때, warning 클래스를 가진 span 태그가 뜨는지 확인하는 방법이 있다.

[![vue_4 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/image_upload/7fc8a4f9a6cf47d2b6b98704edf31598/2db56aab-11a0-4719-828e-5c04f1ea4377.png)](undefined)


위 문구가 보이면, 정상인 것이다.


코드로 옮기면

```
describe('LoginForm.vue', () => {
  test('ID는 email 형식이어야 합니다.', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'task',
        };
      },
    });

    // 해당 문구가 보이는지 확인
    const warningText = wrapper.find('p.validation-text>.warning');
    // 태그가 존재하는지
    expect(warningText.exists()).toBeTruthy();
  });
});
```


결과

```
 PASS  src/components/LoginForm.spec.js
  LoginForm.vue
    √ ID는 email 형식이어야 합니다. (25ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        3.879s
Ran all test suites.

Watch Usage: Press w to show more.

```








**테스트 해야할 또 하나의 케이스**


1\. 폼 형식이 맞지 않으면, 전송 버튼이 비 활성화 되어야 한다.

```
// 테스트를 위한, util을 불러옵니다.
import { shallowMount } from '@vue/test-utils';
import LoginForm from '@/components/LoginForm.vue';

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

```


위와 같은 형식으로 여러 케이스를 테스트 할 수 있다.












