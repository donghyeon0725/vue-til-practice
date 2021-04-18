[→ Open in Slid](https://slid.cc/vdocs/8745b585d89c4994b3d790d07f27472f)


---


**현대 웹 서비스 개발 절차**


 1. 요구사항
 2. 서비스 기획
 3. UI, UX 상세 설계
 4. GUI 디자인
 5. 퍼블리싱
 6. 백엔드 API 개발
 7. 프런트엔드 개발
 8. QA


**프런트엔드 개발자 역할**


 - 화면단 코드 작성
 - 기획, 디자인, 퍼블리싱, 백엔드 개발자와 소통

[![vue_1 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/8745b585d89c4994b3d790d07f27472f/7b7806f1-0046-47d7-ba00-5be32fac3714.png)](https://slid.cc/vdocs/8745b585d89c4994b3d790d07f27472f?v=c3222ac1676c4b43ab23ba4c0a7304d6&start=341.896208)


 - 백엔드 개발자가 제공하는 api 문서를 보고 읽을 줄 알아야 함
 - \=> https://swagger.io/ 라는 도구를 이용해서 api문서를 작성하곤 한다.





**사용할 소스는 아래 링크를 참고한다.**


 - https://github.com/joshua1988/vue-til


브랜치 별로 기능 단계를 나누어 놓았다.





**개발 디버깅에 사용할 뷰, 개발자 도구는 아래 링크로 다운받는다.**


https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd





**환경 구성하는 방법**


1\. 소스트리를 이용해서 https://github.com/joshua1988/vue-til으로 내려 받는다.


2\. node -v 로 10 이상대에 node.js가 다운되어 있는지 확인





**노드 버전 변경하기**


다만, 버전이 더 높은 경우, 버전을 10점대로 낮춰야 함


낮추려면 nvm github 검색 후 들어가서 설치(https://github.com/nvm-sh/nvm) => node version manager이다.

[![vue_1 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/8745b585d89c4994b3d790d07f27472f/2ffce6bd-5bf2-4127-81a9-c59353d42d7f.png)](https://slid.cc/vdocs/8745b585d89c4994b3d790d07f27472f?v=c3222ac1676c4b43ab23ba4c0a7304d6&start=1167.023602)


이때, bash나 gshell에서만 실행이 가능하다.

[![vue_1 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/8745b585d89c4994b3d790d07f27472f/3d9ede06-cf51-4ae8-b2da-3d9d3a680f42.png)](https://slid.cc/vdocs/8745b585d89c4994b3d790d07f27472f?v=c3222ac1676c4b43ab23ba4c0a7304d6&start=1279.642065)


 - ~/.bashrc 파일에 아래와 같은 코드가 선언 되어 있어야 한다.

```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```


위 코드를 넣은 후 재기동

```
nvm --version
```


위와 같은 코드를 넣어주면 버전을 확인할 수 있다.

```
nvm install node 10.16.3 => 설치
nvm use node 10.16.3 => 버전 선택
node -v => 현재 사용중인 노드 버전확인
=> 버전 12.14.0 에서 동작한다.
```


위 코드로 다른 버전의 노드 설치 & 선택이 가능하다.





3\. 아래와 같은 명령어로 윈도우 바탕화면에 접근

```
cd /mnt
cd c
cd Users
cd <사용자이름>
cd Desktop
```


4\. 필요한 라이브러리 다운로드

```
npm i => package.json에 명시된 라이브러리들이 다운로드 된다.
npm install과 같은 명령어이다.
```





위와 같은 복잡한 작업 필요 없이, 윈도우에서도 nvm 설치가 가능한데,


https://kdydesign.github.io/2020/09/16/nvm-for-windows/


위 링크에 설명이 되어 있다.


간단하게 말하자면


https://github.com/coreybutler/nvm-windows/releases


링크에서 nvm-setup.zip 파일을 다운로드 받아서,


실행하고

```
nvm install <version>
```


위 명령어로 버전을 설치하면 된다.





**서버 실행**

[![vue_1 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/image_upload/8745b585d89c4994b3d790d07f27472f/85f78619-99d4-49e2-8773-b0c05574b6f0.png)](undefined)


**포트 변경하려면**

[![vue_1 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/image_upload/8745b585d89c4994b3d790d07f27472f/246bcede-53dc-4873-9e66-2ac813ec7d07.png)](undefined)














**몽고 DB 사용**


 1. mongodb cloud 이용 : https://www.mongodb.com/cloud 에서 설치 => 몽고 db를 설치하지 않아도, 클라우드 서비스로 몽고 db를 사용할 수 있음

[![vue_1 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/8745b585d89c4994b3d790d07f27472f/b0fe12f8-11bb-4da5-bb5b-042211a8f3e3.png)](https://slid.cc/vdocs/8745b585d89c4994b3d790d07f27472f?v=c3222ac1676c4b43ab23ba4c0a7304d6&start=2126.516846)


위 설정과 동일하게 사용해야함





아래와 같은 설정을 해줘야 사용이 가능함

[![vue_1 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/image_upload/8745b585d89c4994b3d790d07f27472f/120cf18c-0d88-4979-858f-c16f899bdca5.png)](undefined)


 - 클러스터 생성
 - 네트워크 우회정보 등록
 - 유저 생성
 - 클러스터에 연결할 수 있는 주소 얻기
 - 간단한 데이터 로드하기 (선택)





1\. 클러스터 생성하기(무료버전 사용, 아래에 free로 적혀있는지 확인해야함)

[![vue_1 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/image_upload/8745b585d89c4994b3d790d07f27472f/3e7ebc82-5445-4847-a494-91a01628d7ba.png)](undefined)





2\. Network Access에서 클러스터를 노드 서버와 연결해서 사용해야하는데, 이 때, 접근 가능하도록 네트워크 우회정보를 등록해줘야함

[![vue_1 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/8745b585d89c4994b3d790d07f27472f/f358a3ba-0a3c-4ff9-981c-918326b24744.png)](https://slid.cc/vdocs/8745b585d89c4994b3d790d07f27472f?v=c3222ac1676c4b43ab23ba4c0a7304d6&start=2205.161144)





3\. Database Access에서 몽고DB에 접근할 수 있는 유저 생성. 이때 권한은 read와 write 정도 주면 충분하다.

[![vue_1 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/image_upload/8745b585d89c4994b3d790d07f27472f/5e932fc4-df89-43ea-a184-05e4001e33f2.png)](undefined)





4\. 연결 주소 얻기

[![vue_1 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/image_upload/8745b585d89c4994b3d790d07f27472f/6da1b4b1-f1fc-416d-a4d2-82b92664f715.png)](undefined)

[![vue_1 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/image_upload/8745b585d89c4994b3d790d07f27472f/09631c96-f8b0-40c5-ae98-1e864352fa70.png)](undefined)

[![vue_1 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/image_upload/8745b585d89c4994b3d790d07f27472f/945c3c41-1522-4f43-9ec1-eab0f3f7fa0f.png)](undefined)

















**swagger 보는법**

[![vue_1 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/image_upload/8745b585d89c4994b3d790d07f27472f/65594134-538a-4fec-bc91-930d2d1a163f.png)](undefined)


 - 요청해야 하는 url


 - 필요한 parameter

[![vue_1 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/image_upload/8745b585d89c4994b3d790d07f27472f/a9d75c26-6402-4c1d-8a38-1c4ad924d7e7.png)](undefined)


 - 요청한 curl (클라이언트에서 커맨드 라인이나 소스코드로 손 쉽게 웹 브라우저 처럼 활동할 수 있도록 해주는 기술, 요청한 헤더도 볼 수 있음)
 - 요청 url
 - 반환 코드, 헤더

[![vue_1 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/image_upload/8745b585d89c4994b3d790d07f27472f/5e1cdc1c-a562-418e-9ccf-f07539a5312b.png)](undefined)


 - 반환 코드 예시











**vue 프로젝트 생성하기**

[![vue_1 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/8745b585d89c4994b3d790d07f27472f/304c6791-7c03-4e94-880b-5e2a5a294348.png)](https://slid.cc/vdocs/8745b585d89c4994b3d790d07f27472f?v=c3222ac1676c4b43ab23ba4c0a7304d6&start=2850.079487)








**1\. vue cli (뷰 명령어 도구) 설치하기 (https://cli.vuejs.org/)**




[![vue_1 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/image_upload/8745b585d89c4994b3d790d07f27472f/38aa36ec-c53a-4d9a-a527-127931f219c0.png)](undefined)

```
npm install -g @vue/cli

```


뷰 cli 최신 버전이 설치된다는 사실은 알아야함. 이미 있을 경우 자동 업데이트





**만약 vue cli가 설치되지 않는다면, -g (글로벌)옵션을 사용할 때 설치하는 기본 유저가 root가 아닌 다른 유저로 되어 있을 가능성이 큼. 이것은 Linux용 Windows 하위 시스템, 즉 wsl이 -g 옵션 사용시 유저를 다른 유저로 변경해버리기 때문인 것 같다.**

```
npm -g config set user $USER => npm -g 옵션 사용시 기본 유저를 root로

$USER 부분을 root로 변경한다.
```








**2\. 뷰 명령어로 SPA(single page application) 생성**

```
vue create vue-til (프로젝트 이름)
```





이 때 선택하라고 나오는 preset의 의미는 뷰 플러그인의 집합이다. 선택은 아래와 같이 한다.


 - Manually select features
 - Babel, Linter, Unit(Router와 Vuex는 일단 선택 x)
 - Prettier
 - Lint on save
 - Jest
 - In dedicated config files (전용 설정 파일을 사용하면 여러가지 장점이 있다)








**생성한 폴더 설명**


 - node\_modules
 - package.json에 정의된 내용이 노드 모듈에 들어가 있다.


\----------------------------------------------------------------------------------------------------


 - public
 - 위에 들어간 single 페이지(htmt)를 웹팩에서 빌드하고 웹팩이 vue-cli-service로 뷰 모듈을 주입해서 사용자에게 보여지게 된다.


\----------------------------------------------------------------------------------------------------


 - test
 - jest를 선택한 경우, 샘플 파일이 jest 문법으로 작성되어 있다.


\----------------------------------------------------------------------------------------------------


 - .browserslistrc


 - .eslintrc.js


 - babel.config.js


 - jest.config.js


\----------------------------------------------------------------------------------------------------





**eslint가 제대로 설치되었는지 확인**

```
var a = 10;
```


위 코드를 입력했을 때 빨간줄이 생겨야함


만약 **cannot find module 'eslint-plugin-vue'**와 같은 에러가 난다면

```
npm install eslint-plugin-vue
```


위 코드로 플러그인을 설치해준 다음,


기본으로 설치된 설정을 아래와 같이 맞춰준다.

[![vue_1 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/image_upload/8745b585d89c4994b3d790d07f27472f/b86db63b-d01c-421d-b9bb-f3c6a8ff0ba1.png)](undefined)


각각 설정 파일 위치를 vue 모듈이 있는 곳으로 맞춰주고, 해당 위치에서 eslint-plugin-vue을 설치해야 한다.











**vue config 파일 생성**

```
module.exports = {
    devServer: {
        overlay: false // 웹팩 데브에서 제공하는 에러 화면 나타내 주는 기능을 끄는 것
    }
};
```


위 설정이 없으면 아래와 같은 현상이 발생함

[![vue_1 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/image_upload/8745b585d89c4994b3d790d07f27472f/54efc281-87d6-4c4c-932a-347b8b49d58b.png)](undefined)


적용하면 콘솔화면에만 위와 같은 에러가 나타나고 다른 곳에는 나타나지 않음








**.eslintrc.js 파일**


javascript 코드에서 에러가 날 수 있는 모든 가능성을 제거해주는 플러그인(문법 검사기, 보조도구라고 생각하면 편함)


https://eslint.org/


위 링크에서 문법을 확인해보면 됨


우리가 vue cli로 프로젝트를 생성했을 경우 vue 파일을 변경했을 때는 서버를 다시 켤 필요가 없지만(핫 모듈 리플레이스를 이용해서 자동으로 리빌드 해줌), 설정파일을 변경했을 때는 재실행을 해야함


여튼, 우리가 주의해서 봐야할 곳은

```
rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
```


이 부분이다.


"no-console" : "error"로 되어 있으면,


console.log를 사용할 경우 에러가 남

[![vue_1 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/image_upload/8745b585d89c4994b3d790d07f27472f/d8af5cd1-8185-44a7-9ca5-4a045260a1eb.png)](undefined)


실행시, 위와 같은 에러로 빨간줄이 나타나게 됨





위, extends 속성을 좀 더 살펴보자면,

[![vue_1 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/image_upload/8745b585d89c4994b3d790d07f27472f/dd83480c-d968-408e-97c3-c9ab381bbda4.png)](undefined)


아래와 같은 코드가 있다.

```
@vue/prettier
```


node\_module 파일 내부에 @vue 라는 폴더 아래 eslint-config-prettier 라는 폴더가 있다.

[![vue_1 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/image_upload/8745b585d89c4994b3d790d07f27472f/87a5e596-ebff-4e8a-bf2f-2b1e99630e33.png)](undefined)


extends의 의미는 저기 내부에 들어 있는 설정들을 그대로 가져다가 사용하는 것이라고 보면 된다.











**prettier**


코드를 동일한 패턴으로 나타나게 해주는 도구


https://prettier.io/


위 링크가 모듈의 공식 사이트


https://prettier.io/docs/en/options.html


위 링크에서 여러가지 설정들을 확인할 수 있음. 설정할 수 있는 내용은 아래와 같음


 - 문자체
 - 계행
 - 세미콜론 찍는 여부 등등..





정석

[![vue_1 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/8745b585d89c4994b3d790d07f27472f/4b5dabc0-add4-41da-831b-a9db8a0ae5e5.png)](https://slid.cc/vdocs/8745b585d89c4994b3d790d07f27472f?v=c3222ac1676c4b43ab23ba4c0a7304d6&start=4174.994242)


위와 같이 별도의 **.prettierrc** 을 생성해서 설정할 수 있지만,


**.eslintrc.js** 파일에 생성해야하는 이유는, **.eslintrc.js** 파일의 rules와 충돌할 수 있기 때문이다.


따라서,

[![vue_1 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/8745b585d89c4994b3d790d07f27472f/84f6ee48-b804-4fd2-b62f-b71134717823.png)](https://slid.cc/vdocs/8745b585d89c4994b3d790d07f27472f?v=c3222ac1676c4b43ab23ba4c0a7304d6&start=4239.811236)


위와 같이 내부에 코드를 넣어줌으로써, eslint 적용시 prettier가 적용되도록 셋업을 많이 사용한다.




```
"prettier/prettier": ['error', {
    printWidth: 80
}]
```


첫 번째 인자는 프리티어에 걸렸을 때, error로 할지, warn으로 할지, off로 할지 경정하는 것이고 두번째 인자로는 규칙을 넘겨주는 것. 아래와 같이 사용

[![vue_1 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/8745b585d89c4994b3d790d07f27472f/f1be760b-2300-4d92-91ff-bfbf21b8ce83.png)](https://slid.cc/vdocs/8745b585d89c4994b3d790d07f27472f?v=c3222ac1676c4b43ab23ba4c0a7304d6&start=4344.932873)





https://joshua1988.github.io/web-development/vuejs/boost-productivity/


위 링크에서 확인가능

[![vue_1 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/8745b585d89c4994b3d790d07f27472f/cbd3b5f7-f912-4946-9655-e2687d767314.png)](https://slid.cc/vdocs/8745b585d89c4994b3d790d07f27472f?v=c3222ac1676c4b43ab23ba4c0a7304d6&start=4430.414256)


이런식으로 prettier의 설정과 다르다고 뜨게 됨





이를 인텔리제이에서 alt+Enter 후 **ESLint: Fix current file** 를 눌러 해결할 수도 있고


또는 아래와 같이 설정을 바꿔주어서 단축키로 사용할 수도 있다.




[![vue_1 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/image_upload/8745b585d89c4994b3d790d07f27472f/dfd0ab67-1b9d-4c64-807d-c3c8a48617f4.png)](undefined)

















**경로 설정**


뷰에서는 @를 이용해서 절대 경로로 접근할 수 있도록 설정이 가능하다.


다만, IDEs의 기능을 사용하는 것이기 때문에, 인텔리제이 별도 기능은


 1. config.js 생성
 2. 아래 코드 붙여넣기

```
System.config({
    "paths": {
        "@/*": "./src/*"
    }
});

```


이제 아래와 같이 접근이 가능하다.

```
import Demo from '@/assets/lasdw.js'
```








**뷰 시작하기 앞서**


https://vuejs.org/v2/style-guide/


에서

[![vue_1 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/image_upload/8745b585d89c4994b3d790d07f27472f/b8f41fbe-c49a-478d-a880-73bb8f5b2438.png)](undefined)


위 내용들은 미리 읽어보는 것을 추천한다.











제작을 위해서


https://github.com/joshua1988/vue-til


링크에서 클론을 내려받고, setup\_1을 checkout 하기 바란다.








**\[화면 구성\]**





로그인


회원 가입


메인


추가 / 수정





먼저, 로그인, 회원가입 두가지 페이지를 제작할 것이다.








**화면 구성을 위해 뷰 라우터 설치**

```
npm i vue-router
```


이후 src 아래에


routes 생성 후 index.js 생성 후 아래 코드 집어넣기


**뷰 라우터 인스턴스 생성(routes/index.js)**

```
import Vue from 'vue'; // vue 를 로드한다.
import VueRouter from 'vue-router'; // 설치한 라우터를 로드한다.

Vue.use(VueRouter); // 라우터를 플러그인으로 사용할 것을 명시

export default new VueRouter(); // 새로운 라우터를 생성해서 export

```

[![vue_1 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/image_upload/8745b585d89c4994b3d790d07f27472f/ab949a5f-4d13-445f-9445-46777ebccbd4.png)](undefined)








**뷰 라우터 인스턴스 장착 (main.js)**

```
import Vue from 'vue';
import App from './App.vue';
import router from '@/routes/index'; // 라우터 생성. 이때 굳이 .js는 사용하지 않아도 된다.

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router, // 라우터 장착
}).$mount('#app');

```

[![vue_1 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/image_upload/8745b585d89c4994b3d790d07f27472f/29a44a3c-76ba-4608-a098-6944b736847a.png)](undefined)








두가지 페이지를 제작할 것이기 때문에, 라우터 객체를 2개 만들어주면 된다.


**routes/index.js 에 routes 속성 추가**

```
import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginPage from '@/views/LoginPage.vue'; // 페이지를 로드한다.
import SignupPage from '@/views/SignupPage.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/login', // 경로 선언
      component: LoginPage, // 장치 선택
    },
    {
      path: '/signup',
      component: SignupPage,
    },
  ],
});

```





**src/views 폴더 생성 후 각각 vue 모듈 생성 (loginPage.vue)**

```
<template><div>login</div></template>

<script>
export default {
  name: 'LoginPage',
};
</script>

<style scoped></style>

```








**이동할 수 있는 link를 App.vue에 추가 & 모듈 보여줄 태그 넣기**

```
    <template>
  <div>
    <header>
      <router-link to="/login">로그인</router-link><!-- router-link를 통해서 다른 url로 보낼 수 있음 -->&nbsp;|&nbsp;
      <router-link to="/signup">회원가입</router-link><!-- to라는 속성을 통해서 링크를 보냄 -->
      <router-view></router-view><!-- 라우팅 된 모듈이 보이는 태그 -->
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>

```


개발자 도구에서 vue 플러그인을 열면

[![vue_1 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/image_upload/8745b585d89c4994b3d790d07f27472f/3efae20a-89ff-45be-b52a-c94daeec4a7c.png)](undefined)


위 그림 확인이 가능하다.








그리고 url이 변경 될 때, SPA 이기 때문에 url을 변경할 때, 개발자 도구의 Network 탭을 확인해도 내용의 변화가 없다.


보통 페이지의 전환은 html 파일을 로드하면서 일어나게 되는데, vue의 경우 history api를 이용해서 url을 컨트롤 하고 화면의 DOM을 컨트롤 하기 때문에, 새로운 html 파일을 로드하지 않는다. 그래서 Network 탭이 변경 되지 않는 것이다.


즉, 페이지의 전환이 없다.

[![vue_1 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/8745b585d89c4994b3d790d07f27472f/12a260e2-7f28-4d10-8025-59661484fccc.png)](https://slid.cc/vdocs/8745b585d89c4994b3d790d07f27472f?v=c3222ac1676c4b43ab23ba4c0a7304d6&start=7130.114405)


맨 처음에 오직, app.js 라는 하나의 파일을 만들어서 클라이언트에게 보여준다.


그런데, **app.js 내부에 모든 페이지를 넣어서 사용자에게 보여준다면?**


로딩이 상당히 느려질 것이다.


따라서 처음에는 하나의 페이지만 로드할 수 있도록 LazyLoading 기법이 필요하다.


하나의 페이지만 로딩한 뒤에, url이동에 따라서 필요한 모듈을 가져올 수 있도록 하는 것을 code spliting이라고 부른다.





**code spliting**


code spliting은 url 이동 시 모듈을 로드하는 방식으로 구현한다.


라우터의 component를 로드하는 부분을 함수로 바꾸고,(LazyLoading) import 라는 키워드를 사용한다.


**변경 전**

```
import SignupPage from '@/views/SignupPage.vue';
```


**변경 후**

```
const SignupPage = () => import('@/views/SignupPage.vue');
```


**확인**


개발자 도구의 Network를 살펴보면, 클릭시마다 새로운 페이지를 로드하는 것을 알수 있음








**redirect**


라우터에서 원하는 url에 redirect 속성을 추가하면 됨

```
    {
      path: '/',
      redirect: 'login',
    },
```

[![vue_1 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/image_upload/cd87d121ee4943c089160d4367c265dc/eac71c8e-ae85-4919-8e03-b25e4639cce4.png)](undefined)





**폴백 라우터**


없는 url에 대해 반응하는 라우터를 폴백 라우터라고 함

```
    {
      path: '*',
      component: () => import('@/views/NotFountPage.vue'),
    },
```


**맨 마지막에**, 위 라우터를 추가해주면 됨








**url에 # 제거**


#이 붙어 있는 이유는, url이 변경 되더라도 서버가 페이지가 전환되었는지 알 수 없도록 하기 위함이다.


#이 붙어야 서버에 요청을 날리지 않는다.

```
  mode: 'history',
```


라우터에 위 한 줄 추가


다만, 실제 배포 환경에서는 url에 #이 붙어 있지 않기 때문에,


만약 뷰가 정해준 url(router-link)이 아닌 사용자가 직접 입력한 url로 들어오면 서버는 어떤 페이지를 보여줘야 할지 모름

```
https://router.vuejs.org/kr/guide/essentials/history-mode.html#%EC%84%9C%EB%B2%84-%EC%84%A4%EC%A0%95-%EC%98%88%EC%A0%9C
```


위 링크로 들어가면, 히스토리 모드를 사용할 때, 아파치 등등의 서버에 어떤 설정을 해주어야 하는지 알 수 있는데, 위와 같은 설정을 해주어야 한다.


다만, local 개발 환경에서는 위와 같은 설정을 해주지 않아도 정상 동작한다.


위 설정을 간단하게 요약하면, url에 대해 어떤 페이지를 찾아야 할지 모를때, 대체 자원을 제공하는 것이다.











**package.json 내부의 devDependencies vs dependencies 차이점**

```
npm run build
```


위 코드로 최종적으로 export 할 라이브러리를 바깥으로 뽑아내는데,


그 때 뽑아내질 라이브러리가 **dependencies** 이다.


반면 **devDependencies** 는 개발시에만 필요한 문법 검사기, 컴파일러 등등이 포함되기 때문에, 별도로 구분되어 있는 것이다.



