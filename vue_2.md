[→ Open in Slid](https://slid.cc/vdocs/cd87d121ee4943c089160d4367c265dc)


---


**회원가입 페이지 작성**





컴포넌트 불러오기

```
<template>
  <header>
    <router-link to="/login">로그인</router-link
    ><!-- router-link를 통해서 다른 url로 보낼 수 있음 -->&nbsp;|&nbsp;
    <router-link to="/signup">회원가입</router-link
    ><!-- to라는 속성을 통해서 링크를 보냄 -->
  </header>
</template>

<script>
import Demo from '@/demo/basic/Demo';
// import Demo from '@/demo/basic/Demo'

export default {};
</script>

<style></style>

```


위 같은 방법으로 vue 컴포넌트 작성

```
<AppHeader></AppHeader><!-- 추가한 모듈 넣기 -->

```


모듈 로드하기 & 모듈 컴포넌트 대상으로 추가

```
import AppHeader from '@/components/common/AppHeader.vue';

export default {
  components: {
    AppHeader,
  },
};
```








**import 단축어**


vim (vue snippets에서 제공하는 단축어)를 입력하면 나오는 vimport 로 빠른 import를 한다.








**뷰 컴포넌트 생성하는 원칙**


 - 비지니스 로직을 담는 모듈 => components 폴더 아래
 - 뼈대가 되는 컴포넌트 => views 폴더 아래








**vue의 data 속성 빠르게 만들기**


vda 라고 입력하면 빠르게 data 속성을 추가할 수 있음





**v-model 을 통해서 양방향 바인딩**

```
// html 컴포넌트에
v-model="password"

// 뷰 인스턴스에
data() {
    return {
      password: '',
    };
},
```





**데이터가 바인딩 되었는지 개발자 도구를 통해서 확인가능**

[![vue_2 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/image_upload/cd87d121ee4943c089160d4367c265dc/9f4c8c28-094a-4589-9159-ac436477d44b.png)](undefined)








**이벤트 버블링**

[![vue_2 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/cd87d121ee4943c089160d4367c265dc/0a028b19-cf7a-4fc7-9238-0d9ad6a43e5b.png)](https://slid.cc/vdocs/cd87d121ee4943c089160d4367c265dc?v=8954821173c844e5b89b9e8ac8f30fc2&start=1285.218438)


화면을 보면 button의 이벤트가 상위의 form으로 이동한다.








**이벤트 받기**

```
// DOM에 부착
v-on:submit="submitForm"
// 또는
@submit="submitForm"
// 응용 => 기본동작은 막기(submit & 새로고침)
@submit:prevent="submitForm"

// 받기 (vue 인스턴스에 추가)
methods: {
    submitForm() {
        console.log('');
    },
}
```








**비동기 요청을 간편하게 하기 위한 라이브러리인 axios 다운로드 받기**

```
npm i axios
```


\=> 자동으로 package.json 에 추가 됨





**내려 받은 axios 사용법 1**

```
// 포함
import axios from 'axios';

// 요청
axios.post();
```


위와 같은 방법으로도 사용할 수 있으나





**axios를 많이 사용할 것이므로, axios를 별도 파일에서 구조화 하고 사용할 수 있도록 합니다.**


 1. api 라는 디렉토리 생성
 2. index.js 파일 생성
 3. 해당 파일에서 아래와 같은 소스 작성

```
import axios from 'axios';

function registerUser() {
    ...
}

export {
    registerUser
}
```


이런식으로 api에 대한 요청을 별도로 관리하고 해당 function 을 외부에서 호출하는 방식으로 사용을 한다.








완성된 소스는 아래와 같다.

```
import axios from 'axios';

function registerUser() {
  const url = 'http://localhost:3000/signup';
  return axios.post(url, undefined, undefined);
}

export { registerUser };

```


registerUser 를 export 하는 부분에서, 함수를 하나만 export 하지 않기 때문에 괄호를 열어서 여러가지를 export 해주고 있다.





사용할 때는

```
import { registerUser } from '@/api/index';


// 메소드 호출하기
registerUser();

```


위와 같은 방법으로 호출을 해야함








**네트워크 요청에 대한 응답을 보는 방법**

[![vue_2 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/cd87d121ee4943c089160d4367c265dc/9759cef7-35d8-44c2-bb11-742c87c8d93b.png)](https://slid.cc/vdocs/cd87d121ee4943c089160d4367c265dc?v=8954821173c844e5b89b9e8ac8f30fc2&start=2030.165997)


Network 의 XHR 탭을 보면 됨


보면 Header 만 존재하고 넘어가는 body가 없음. 따라서, 소스에 데이터를 넘기는 부분을 추가해야함





**응답의 경우 preview로 보면 더 좋다**

[![vue_2 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/image_upload/cd87d121ee4943c089160d4367c265dc/207c480c-20bb-4d90-843a-8cd80ae1c2bb.png)](undefined)








**axios 비동기 후 처리**


api 요청을 서버에 보내고 난 뒤, alert 등등의 처리를 하기 위해서,


**then**을 사용하는 방법이 있다.


이는 비동기 처리 라이브러리인 promise를 이용한 처리 방법이다.

[![vue_2 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/image_upload/cd87d121ee4943c089160d4367c265dc/1bfa907f-3e91-462b-a086-4b536b1716eb.png)](undefined)





**async와 await를 이용한 방법**

```
async function 함수명() {
  await 비동기_처리_메서드_명();
}
```


가장 최근에 나온 자바스크립트 문법이다.


function 부분에 async 키워드를 붙이고 비동기 처리 메서드에 await 키워드를 붙여서 변수에 해당 값을 받을 수 있게 함과 동시에, 해당 메서드가 실행되기 이전까지 다음 줄이 실행 되지 않도록 한다.


이때 여기서 주의해야 할 점은 비동기 처리 메서드가 꼭 프로미스 객체를 반환해야 await가 의도한 대로 동작한다는 점이다.


예를들면 axios 가 반환하는 객체등등이 있다.











**async 키워드**


async 키워드는 현재 하는 동작을 감싸는 프로미스 객체를 반환한다.





프로미스는 실행 후 최종적으로 값을 리턴할 수 있기 때문에,


async 키워드와 별도로 return을 가져도 무방하다.




[![vue_2 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/image_upload/cd87d121ee4943c089160d4367c265dc/61daacae-80de-41c7-9d7a-85c38463621f.png)](undefined)


위는 async와 await 키워드를 사용해서 처리하는 모습이다.


코드가 훨씬 깔끔하다.

[![vue_2 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/image_upload/cd87d121ee4943c089160d4367c265dc/fb6c1c6c-2479-4090-adf9-32c53b5bb209.png)](undefined)


이 때 원하는 데이터는 data 하나뿐인데, 이것을 ES6 Destructuring 문법으로 받으면 아래와 같이 깔끔하게 받을 수 있다.




[![vue_2 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/image_upload/cd87d121ee4943c089160d4367c265dc/624aae0e-6e6e-47bb-ab87-2ae50ce8dd7c.png)](undefined)


코드가 정말 깔끔해지는 효과를 얻을 수 있다.





아래와 같이 data만 받아졌다.

[![vue_2 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/image_upload/cd87d121ee4943c089160d4367c265dc/c8b6e385-95c4-41ec-9e91-4c9b4b23fb00.png)](undefined)





그리고 받은 이름을 가지고 회원가입이 되었음을 알린다.

[![vue_2 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/image_upload/cd87d121ee4943c089160d4367c265dc/0477ce43-f24e-4d35-9d76-68c28de675dd.png)](undefined)








**api 공통화**

```
const config = {
  baseUrl: 'http://localhost:3000/',
};

function registerUser(userData) {
  return axios.post(`${config.baseUrl}signup`, userData, undefined);
}
```


위와 같이 공통적으로 사용하는 url을 묶어 놓을 수도 있겠지만,


axios 에서 기본 제공하는 api를 사용할 수 있다.





**axios가 제공하는 api를 사용해서 코드를 굉장히 깔끔하게 만들었다.**




```
const ins = axios.create({
  baseURL: 'http://localhost:3000/',
});

function registerUser(userData) {
  return ins.post('signup', userData, undefined);
}
```

[![vue_2 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/image_upload/cd87d121ee4943c089160d4367c265dc/e68f3e14-a8d9-41ad-9a7f-fb24c7a4f77b.png)](undefined)





**환경 변수 이용하기**


 1. .env 파일 생성하기
 2. 'VUE\_APP\_키=값' 형태로 필요한 값 정의
 3. 'process.env.VUE\_APP\_키' 형태로 불러와서 사용하기


vue cli 3점대부터, VUE\_APP\_ 으로 시작하는 키 값으로 선언을 하면, 자동으로 index.js에 로드할 수 있게 설정되어 있음

[![vue_2 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/image_upload/cd87d121ee4943c089160d4367c265dc/a27a7a86-9105-49f0-bfc6-26c4ac09c6b7.png)](undefined)


웹팩이 자동으로 포함할수 있도록 하는 규칙이다.








**vue cli 규칙 (version 3)**


개발과 배포환경의 url이 달라져야함


 - 개발환경 설정파일 : .env.development 파일에 정의
 - 공통환경 설정파일 : .env 파일에 정의 (혹시나, 파일이 빠졌을 때 들어가야할 내용)
 - 배포환경 설정파일 : .env.production 파일에 정의


개발 환경에선 전자의 설정파일이 우선순위를 가짐.


다만, **.env.development** 나 **.env.production**파일에 환경변수가 없으면 .env 파일에서 찾음


개발환경에서는 **.env.development** 파일의 우선순위가 제일 높음에 주의하자








**로그인 페이지 개발**


회원가입과 같은 방법으로 로그인 페이지 개발을 진행하면 된다.


다만, 이때 주의깊게 바라볼 점은, api 개발 방식은 RESTful api 개발 방식일 것이므로, 백엔드 서버가 비 상태성을 가진다. 즉,


세션을 저장하지 않는다.


그러면 로그인은 어떻게 진행하느냐?


토큰을 가지고 진행한다.


로그인 API 요청을 하면 백엔드 서버는 아래와 같은 내용을 보내준다.





**이때 응답 값을 중첩으로도 받을 수 있다.**

[![vue_2 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/image_upload/cd87d121ee4943c089160d4367c265dc/d4d058d1-4791-410c-bd12-cb5590ac0c10.png)](undefined)


받은 응답 값 중, data 내부의 message와 token을 받는 문법이다.








**에러 처리**

[![vue_2 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/image_upload/cd87d121ee4943c089160d4367c265dc/b2362768-0efc-49f3-88b5-ce4c22973027.png)](undefined)


에러가 날 때 이런식으로 어디 즈음에 났는지 정도만, 알려주기 때문에 에러처리를 제대로 하지 않는다면, 디버깅이 어렵다.





**에러 처리 방법**

```
try {
    // 비지니스 로직
} catch (error) {
    // 에러 핸들링할 코드
}
```




[![vue_2 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/cd87d121ee4943c089160d4367c265dc/e52cfa8d-55c8-4c33-a8d1-572f891359af.png)](https://slid.cc/vdocs/cd87d121ee4943c089160d4367c265dc?v=8954821173c844e5b89b9e8ac8f30fc2&start=4755.45672)


이런식으로 정확한 라인을 집어주기 때문에 어디서 에러가 나는지 알 수 있게 됨

```
try {
  const userData = {
    username: this.username,
    password: this.password,
  };

  const {
    data: { message, token },
  } = await loginUser(userData);

  console.log(token);
  this.loginMessage = `${message}님 환영합니다.`;
} catch (e) {
  console.log(e.response); // 에러 내용을 받아본다.
  this.loginMessage = e.response.data;
} finally {
  this.initForm();
}
```


이런식으로 받은 e의 **response** 를 출력해보면 된다.








**유효성 검사**


 1. 값이 없을 경우
 2. 유효한 이메일이 아닐 경우


정규식 검사로 할 수 있기 때문에


util 폴더에 validation.js 에서 관리하는 것이 좋다.





이메일 정규식은 아래 링크에서 가져올 수 있다.


https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript#





**vue에서의 유효성 검사**


computed 속성 많이 사용


computed 란? 주로 간단한 연산을 하는데 많이 쓰이고 속성에 양방향 바인딩 해서 많이 사용함 => 매번 자동으로 연산됨


이런식으로 사용하면 될 것 같다.

```
computed: {
  isUsernameValid() {
    return validateEmail(this.username);
  },
},
```

[![vue_2 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/cd87d121ee4943c089160d4367c265dc/24d2d7ec-eb88-4c3c-a869-d6fe5d353aed.png)](https://slid.cc/vdocs/cd87d121ee4943c089160d4367c265dc?v=8954821173c844e5b89b9e8ac8f30fc2&start=5411.986375)


위와 같이 뷰 개발자 도구에서 유효한 지 확인이 가능하다.


모든, computed 속성의 값이 계산되기 때문에 확인할 때 좋다.

[![vue_2 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/image_upload/cd87d121ee4943c089160d4367c265dc/68530ed0-59c8-40f1-9317-61decab87b98.png)](undefined)


값이 변화함에 따라 자동으로 계산되는 값이다.





**유효하지 않을 때, 로그인 버튼 disabled 시키기**

```
:disabled="!isUsernameValid || !password"

// 닉네임이 유효하지 않고, 패스워드가 없을 경우
```








**메인 페이지 작성**


programmatic navagation => 로그인 후, 페이지를 어떻게 이동 시켜야 하는지 정의된 방법이다.




```
https://router.vuejs.org/guide/essentials/navigation.html
```


해당 내용은 위 링크에서 확인이 가능하다.





router-link 는 html 의 링크 이동 기능이나, router를 이용한 이동이 가능하다. 자바스크립트 레벨에서 이동 하면 된다.

```
router.push(location, onComplete?, onAbort?)
```








**로그인 기록 남기기**


 1. 로그인 되었을 때, 더 이상 로그인 기능 비활성화
 2. 로그인 결과, AppHeader로 이동시켜야함







[![vue_2 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/cd87d121ee4943c089160d4367c265dc/68ef4379-3b04-414a-ac94-7fe118117534.png)](https://slid.cc/vdocs/cd87d121ee4943c089160d4367c265dc?v=8954821173c844e5b89b9e8ac8f30fc2&start=6532.571677)


현재 컴포넌트 구조도





 1. 이벤트를 두단계 올린 뒤 AppHeader로 전달하는 방법
 2. 이벤트 버스를 이용해서 바로 AppHeader로 전달하는 방법
 3. store(저장소)(vuex)를 이용하는 방법 => 관리가 가장 쉬움


내부적으로 vuex는 자바스크립트 단에 저장하는 것이다. sessionStorage를 이용하는 것 같다. 이는 브라우저 상에 데이터를 저장하는 api 중 하나이며, 기본적으로 메모리를 사용하나, localStorage는 거의 쿠키와 유사하게 저장하는 것 같으나 차이점은, 동일 컴퓨터, 동일 브라우저를 사용할 때만 유효하다.


페이지를 리로딩하면, vuex의 데이터는 날아간다.


스토어에 저장된 내용을 영속적으로 저장할 수 있도록 쿠키가 필요하다.





**vuex 설치하기**

```
npm i vuex
```


vuex는 실제 에플리케이션이 동작할 때 필요로 하는 라이브러리이기 때문에 자동으로 package.json의 devDependencies 가 아닌 dependencies 에 추가 된다.





**vuex 사용하겠다고 선언하기 & 저장소 export 하기**

```
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: '', // username 이라는 값을 어디에서든 사용할 수 있게 되었다.
  },
});

```





**Vue를 사용하는 main.js 에서 저장소 포함시키기**

```
import Vue from 'vue';
import App from './App.vue';
import router from '@/routes/index';
import store from '@/store/index';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');

```





그럼 아래와 같이 저장소가 보임

[![vue_2 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/cd87d121ee4943c089160d4367c265dc/8284ac7a-37b9-42fe-a635-3a69be2e5c71.png)](https://slid.cc/vdocs/cd87d121ee4943c089160d4367c265dc?v=8954821173c844e5b89b9e8ac8f30fc2&start=6951.331001)




[![vue_2 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/image_upload/cd87d121ee4943c089160d4367c265dc/3dad9b38-8bfb-4592-a377-22b70bbd27ce.png)](undefined)








**컴포넌트에서 vuex 에 접근하는 방법(데이터를 변경하는 mutations 속성 필요)**


1\. store/index.js에서 데이터 변경할 수 있는 메소드 추가

```
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: '',
  },
  mutations: {
    // 첫번째 인자로 state 를 받아야 한다.
    setUsername(state, username) {
      state.username = username;
    },
  },
});
```


2\. 만든 메소드 호출

```
this.$store.commit('메소드 이름', '변경할 값');
```


3\. 값을 꺼내오는 방법

```
{{ (this.)$store.state.username }}
```




[![vue_2 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/image_upload/cd87d121ee4943c089160d4367c265dc/e0e74762-423a-43fb-b010-a84f21b1a32d.png)](undefined)


로그인했을 때 유저의 이름이 들어간 모습








**vuex gettters**


로그인이 되었는지에 대한 기준을 state 의 값을 통해서 구분할 수있으므로 그 값을 기준으로 vue의 computed와 비슷한 getters라는 것을 추가해서 로그인 상태인지 아닌지를 계산한다.


따라서, 기본적으로 return값을 가지는 경우 사용해야한다.


리턴값이 있어야 한다는 소리이다.





보통 로그인에 많이 사용한다.


확인해보자.

```
getters: {
  // 첫번째 인자로 state 를 받아야 한다.
  isLogin(state) {
    return state.username !== '';
  },
},
```


로그인이 되면 아래와 같이 true로 바뀌어 있다.


자동으로 state를 받아서 계산을 하기 때문이다.

[![vue_2 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/cd87d121ee4943c089160d4367c265dc/e23f0d8e-7cc0-4069-9373-e0bb9710c6b2.png)](https://slid.cc/vdocs/cd87d121ee4943c089160d4367c265dc?v=b35c31523238427c9eafc52b893f3825&start=477.437852)








**분기처리**

```
<template></template>
와 
v-if 를 사용하면 된다.
```


예를 들면

```
<template v-if="isUserLogin">
  <span>{{ this.$store.state.username }}</span>
</template>
<template v-if="!isUserLogin">
  <router-link to="/login">로그인</router-link>
  <router-link to="/signup">회원가입</router-link>
</template>
```


위와 같은 방법이다.


한편, v-if에 직접 store의 값을 가져오는 것이 아닌, computed 속성을 사용함으로써, 코드가 많이 깔끔해졌다.





**로그아웃**


로그인 상태는 getters를 통해 자동 계산이 되므로, state의 값만 변화 시켜주면 된다.


1\. 로그아웃 store 메소드 구현

```
clearLogin(state) {
    state.username = '';
},
```


2\. 태그 생성 후, click 이벤트 달기

```
<a href="javascript:;" @click="logout">로그아웃</a>
```


3\. store의 mutations 메소드 호출(값의 상태를 변화시키기 위함)

```
this.$store.commit('clearLogin');
```





**그리고 로그인이 되어 있는데 main 로고를 클릭했을 때, 다시 로그인이 가능한 것을, 라우터 가드를 활용해서 막을 수 있다.**





**이제부터, 계정이 필요한 모든 작업은 토큰으로 진행한다.**





api에서 토큰 값을 저장하는 방법은 맨 위에

[![vue_2 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/cd87d121ee4943c089160d4367c265dc/9d27f7bd-3a1d-455b-838b-214159c9ad7d.png)](https://slid.cc/vdocs/cd87d121ee4943c089160d4367c265dc?v=b35c31523238427c9eafc52b893f3825&start=1508.742449)


json token 을 저장하는 방법이 있다.





**\*\*\*\*\*\*\*\*\*\*\*받은 토큰은 vuex에(로컬 저장소) 저장해두고, 요청을 보낼때, header의 Authorization에 넣어서 보내는 것이다.\*\*\*\*\*\*\*\*\***


api 파일 아래에

```
  headers: {
    // 여기에 인증 토큰을 넣어서 보내면, 로그인 된 것과 같은 기능을 수행할 수 있다.
    Authorization: 'test1234',
  },
```




[![vue_2 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/cd87d121ee4943c089160d4367c265dc/352d6bab-a07a-45f1-bca1-cca8834d17f5.png)](https://slid.cc/vdocs/cd87d121ee4943c089160d4367c265dc?v=b35c31523238427c9eafc52b893f3825&start=1843.724032)


요청을 보낼 때, 위와 같이 header에 값이 실린다.





1\. 토큰을 저장할 수 있는 mutation 생성 (store)

```
setToken(state, token) {
  state.token = token;
},
```





2\. axios api 호출 부분에 해더로 세팅

```
import store from '@/store/index';
// store 호출

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    // 여기에 인증 토큰을 넣어서 보내면, 로그인 된 것과 같은 기능을 수행할 수 있다.
    Authorization: store.state.token,
  },
});

```


3\. 로그인 시 토큰 set 메소드 호출

```
this.$store.commit('setToken', data.token);
```





다만, 위와 같은 방법은 양방향 바인딩 한 것이 아니고, api/index.js 파일이 생성된 시점에는 vuex의 token 값이 비어있을 것이므로, 빈 값이 해더에 들어간다.


가장 쉽게 사용할 수 있는 것은 interceptor를 사용하는 것이다.


https://github.com/axios/axios#interceptors


위 링크에 axios 깃허브 링크로, axios에서 제공하는 interceptor 가이드가 있다.


request나, response 전에 특정 처리를 할 수 있는 것이다.




[![vue_2 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/image_upload/cd87d121ee4943c089160d4367c265dc/93280fa8-6e9f-4e9f-b2b0-7cf72dc1cbfc.png)](undefined)


다만, 우리는 axios 인스턴스를 사용하고 있기 때문에, 해당 인스턴스의 interceptor를 불러서 사용할 수 있도록 한다.





**axios의 interceptor**


1\. api/common/interceptors.js 생성

```
export function setInterceptors(instance) {
  // Add a request interceptor
  instance.interceptors.request.use(
    function(config) { // 요청할 내용을 가지고 있다.
      // Do something before request is sent
      console.log(config); 
      return config;
    },
    function(error) {
      // Do something with request error
      return Promise.reject(error);
    },
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    function(response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function(error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    },
  );
}

```


2\. 만든 interceptor, api 파일에서 호출

```
import { setInterceptors } from './common/interceptors';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,

});
// 호출
setInterceptors(instance);
```




[![vue_2 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/image_upload/cd87d121ee4943c089160d4367c265dc/9b2568f8-6aef-481e-9afe-b0d21d6ea85e.png)](undefined)


위와 같은 내용이 추가 되므로, 우리는 headers에 Authorization 목록을 추가하면 될것 같다.




[![vue_2 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/image_upload/cd87d121ee4943c089160d4367c265dc/25d7a2a3-635a-4b60-b9d0-11cd4f2a4a49.png)](undefined)


위 값이 들어간다.








인터셉터를 장착하는 부분을 조금 더 깔끔하게 작성하기 위해 아래와 같이 정의할 수 있겠다.


1\. interceptor.js 에 return 추가

```
import store from '@/store/index';

export function setInterceptors(instance) {
  // Add a request interceptor
  instance.interceptors.request.use(
    function(config) {
      // Do something before request is sent
      console.log(config);
      config.headers.Authorization = store.state.token;
      return config;
    },
    function(error) {
      // Do something with request error
      return Promise.reject(error);
    },
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    function(response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function(error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    },
  );
  return instance;
}

```


2\. 인스턴스 생성 부분과 인터셉터 장착 부분을 하나로 함수화 한다.

```
function getInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
  return setInterceptors(instance);
}
const instance = getInstance();
```








**개발자도구 network clear**

[![vue_2 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/cd87d121ee4943c089160d4367c265dc/7f554b20-90bd-4a41-b18c-732cce8da17b.png)](https://slid.cc/vdocs/cd87d121ee4943c089160d4367c265dc?v=b35c31523238427c9eafc52b893f3825&start=2171.565127)








**프론트엔트 문서화**


jsDoc 문법을 사용해서 api 문서화를 진행하면 됨


https://jsdoc.app/about-getting-started.html


위 링크는 jsDoc 문법을 알려주는 공식 문서이다.

```
/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
function Book(title, author) {
}

```


위 코드와 같은 형태로 문서화 한다.








**axios 요청, 응답 구조상**


data 안에 보통 원하는 값(응답값)이 담겨 들어온다.








**vue 컴포넌트화**

[![vue_2 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/cd87d121ee4943c089160d4367c265dc/8bde1037-10fc-4197-82a6-87162575fe4c.png)](https://slid.cc/vdocs/cd87d121ee4943c089160d4367c265dc?v=b35c31523238427c9eafc52b893f3825&start=4020.152737)


개발자 도구를 통해서, 컴포넌트화가 되었는지 확인이 가능하다.








**스피너를 통해서 비동기 통신의 단점을 보완**


1\. isLoading(boolean) 값 추가


2\. isLoading이 true이면 스피너 보여줌


3\. await가 끝나면 isLoading을 false로 변경














**쿠키를 다루는 js**


vuex를 사용하면, 자바스크립트 단에 저장을 하는 것이기 때문에 리로딩을 했을 때 페이지의 정보가 모두 날아간다. 따라서 쿠키에 저장할 필요가 있다.

```
function saveAuthToCookie(value) {
  document.cookie = `til_auth=${value}`;
}

function saveUserToCookie(value) {
  document.cookie = `til_user=${value}`;
}

function getAuthFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)til_auth\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}

function getUserFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)til_user\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}

function deleteCookie(value) {
  document.cookie = `${value}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

export {
  saveAuthToCookie,
  saveUserToCookie,
  getAuthFromCookie,
  getUserFromCookie,
  deleteCookie,
};

```





**쿠키 저장소 확인하는 방법**


개발자 도구의 application 탭을 확인하면 된다.

[![vue_2 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/image_upload/cd87d121ee4943c089160d4367c265dc/eacbce93-dd33-435b-bd01-b3fb27b43d22.png)](undefined)








**vuex와 cookie를 연결하는 방법**


state의 값을, cookie로 부터 꺼내오는 방법이 있다.

[![vue_2 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/cd87d121ee4943c089160d4367c265dc/ca19ca3a-a7a5-4b59-be44-d95a9e9ec905.png)](https://slid.cc/vdocs/cd87d121ee4943c089160d4367c265dc?v=b35c31523238427c9eafc52b893f3825&start=4783.482469)




```
  state: {
    username: getAuthFromCookie() || '',
    token: getUserFromCookie() || '',
  },
```


위 코드는, 피연산자에 의해 true인 값이 return 된다.


이렇게 하면, store가 생성될 때마다, cookie에서 값을 가져오는 흐름이 생성된다.


쿠키에 값이 있다면, 그 값을 꺼내오는 연산이 된다.








**vuex action**


action은 mutation과 거의 동일한데, 차이점은 mutation은 직접 state 값을 변화시키지만, action은 mutation을 호출하는. 즉, 커밋을 하는 작업이 위치하고, 또, 비동기 처리또한 진행 될 수 있다.

```
https://vuex.vuejs.org/kr/guide/actions.html
//참고
```




[![vue_2 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/image_upload/cd87d121ee4943c089160d4367c265dc/759756a3-156d-45d6-9139-da895eb3d0d8.png)](undefined)





이런식으로 사용

```
    async LOGIN({ commit }, userData) {
      const { data } = await loginUser(userData);

      commit('setToken', data.token);
      commit('setUsername', data.user.username);

      saveAuthToCookie(data.token);
      saveUserToCookie(data.user.username);
      // data를 재사용할 수 있기 때문에, 그런 맥락으로 data를 리턴하도록 한다.
      return data;
    },
```


async 키워드와 무관하게, 프로미스 객체가 정상 실행 된 후 객체를 반환할 수 있으므로, return 타입을 가져도 된다.





호출은 아래와 같이 dispatch를 사용합니다.

```
store.dispatch('increment')

```








**한편, 이것이 비동기일 때 주의해야함**

```
// LOGIN이 비동기로 작동하는 동작이기 때문에 await를 붙여주지 않으면, 이 동작이 완료 되기 이전에 다음 동작이 실행되어 버린다.
const response = await this.$store.dispatch('LOGIN', userData);
console.log(response);
this.$router.push('/main');
```


LOGIN이 비동기로 작동하는 동작이기 때문에 await를 붙여주지 않으면, 이 동작이 완료 되기 이전에 다음 동작이 실행되어 버린다.





**아이콘 제공하는 사이트**

```
https://ionicons.com/
```

[![vue_2 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/cd87d121ee4943c089160d4367c265dc/3adcba55-a32a-4c2e-91df-b977b8315dc7.png)](https://slid.cc/vdocs/cd87d121ee4943c089160d4367c265dc?v=b35c31523238427c9eafc52b893f3825&start=5404.158894)


webicon이 아닌, usage에서 찾아서 사용해야함





**지금까지 배운 것**

[![vue_2 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/cd87d121ee4943c089160d4367c265dc/23f2fa96-8f4d-4fa9-aea4-4f79215bd927.png)](https://slid.cc/vdocs/cd87d121ee4943c089160d4367c265dc?v=b35c31523238427c9eafc52b893f3825&start=7069.50644)




[![vue_2 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/cd87d121ee4943c089160d4367c265dc/20d9da67-2f12-49e1-83ae-5de3f77f0d64.png)](https://slid.cc/vdocs/cd87d121ee4943c089160d4367c265dc?v=b35c31523238427c9eafc52b893f3825&start=7141.158279)



