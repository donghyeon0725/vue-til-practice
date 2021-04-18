[→ Open in Slid](https://slid.cc/vdocs/92cd898b03874fd2b1d1c89540c760ec)


---





**api 모듈화하기**


1\. interceptor 가 필요한 api와 아닌 api를 분리하기

- createInstance
- createInstanceWithAuth


createInstanceWithAuth의 경우 조회,생성,수정,삭제에 권한이 필요한 것이고, 해당 요청은 RESTful API 규칙에 의해 같은 url을 가진다.


따라서, 우리는 요청 별로, 인스턴스를 분리하기 위해 createInstanceWithAuth 의 인자로 url을 받아 아래와 같이 세팅할 것이다.

```
// 액시오스 초기화 함수
function createInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
  return instance;
}

function createInstanceWithAuth(url) {
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${url}`,
  });
  return setInterceptors(instance);
}

const instance = createInstance();
const posts = createInstanceWithAuth('posts');
```





2\. 기능별로, 인증이 필요한 기능 중 포스트 crud와 로그인 기능 api를 분리하기











**RESTful API**


로그인이 아닌, CRUD 와 관련 된 것들은 URL과 METHOD를 통해서 수정,삭제를 진행한다.

[![vue_3 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/image_upload/92cd898b03874fd2b1d1c89540c760ec/f3a5ec7b-fc52-4b28-87b3-ce7c5b0829bd.png)](undefined)


그리고 모습은 위와 같이 URL에 \_id가 같이 넘어가야 하므로, axios를 사용해서 요청할 때, body가 아닌 url에 값을 넣어서 보낸다. 즉, 1번째 인자로 값을 넘겨야 한다.








**상위 모듈 refresh (재 랜더링)**

```
this.$emit('refresh');
```











**다이나믹 라우트 매칭**


수정 페이지와 같이, "같은 url + 다른 id값" 형식의 url으로 요청하나, 같은 컴포넌트를 보여줘야 하는 경우가 있다. 이럴 때 필요한 것이 바로 다이나믹 라우트 매칭이다.


https://router.vuejs.org/kr/guide/essentials/dynamic-matching.html


위링크를 참고하자

```
    {
      path: '/post/:id',
      component: () => import('@/views/PostEditPage.vue'),
    },
// /post/1234 형식으로 값이 넘어오면 컴포넌트 PostEditPage.vue 를 보여준다.
// 넘어온 url 뒷 부분은 id 라는 키에 매칭 된다.

```





**다이나믹 라우트 매칭을 통해서 넘어온 파라미터값 받는 방법**

[![vue_3 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/92cd898b03874fd2b1d1c89540c760ec/802f4c75-96ec-4a80-a7d8-af23b743fd8b.png)](https://slid.cc/vdocs/92cd898b03874fd2b1d1c89540c760ec?v=65e5808596c940fe8e2cef718f7ea165&start=2845.294515)


개발자 도구에서 확인이 가능하다.

[![vue_3 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/image_upload/92cd898b03874fd2b1d1c89540c760ec/035d5550-aa0b-4afa-aecd-f6ef03667d78.png)](undefined)


id라는 이름으로 PostEditPage 컴포넌트에, 값을 넘겨주는 것을 확인할 수 있다.





위 값을 라우터를 통해서 받을 수 있다.

```
this.$route.params.id
```





**수정하기 위해, 필요한 값을 비동기로 받아서 created 훅에서 처리해준다.**

```
// 비동기 함수를 사용하기 때문에, 값을 받아온 뒤, 실행하려면 async 키워드가 필요하다
    const id = this.$route.params._id;
    const data = await fetchPost(id);
    console.log(data);
```








**토스트**


이벤트가 일어 날때, 아래에 포스트가 나타났다 사라지는 장치








**vue 필터 사용법**


주로, 값의 변환 등등이 필요할 때 사용한다.


https://kr.vuejs.org/v2/guide/filters.html


위 링크 참고


1\. 필터 생성 (지역)

```
  filters: {
    formatData(value) {
      return new Date(value);
    },
  },
```


위 방법은, 다른 filter.js 의 함수를 가져와 등록만 하면 사용이 가능한 방법이다.





2\. 필터 사용 (보간법에서)

```
{{ postItem.createdAt | formatData }}
```





**vue 전역 필터 등록**


모든 vue 인스턴스가 filter를 사용할 수 있도록 등록할 수 있는데, 이는 vue 인스턴스를 생성하는 main.js에서 등록해서 사용하는 방법이다.


1\. 필터 로드

```
import { formatDate } from '@/utils/filters';
```


2\. 필터 등록

```
Vue.filter('formatDate', formatDate);
```











**네비게이션 가드**


특정 url에 들어가는 것을 막는 행위가 가능하다.


https://router.vuejs.org/kr/guide/advanced/navigation-guards.html


위 링크를 참고하면 된다.





**라우터에 가드 끼우기**


1\. 라우터를 변수에 담기

```
const router = new VueRouter({
...});

// 가드 로직
...

export default router;
```


2\. 인스턴스에 가드 끼우기

```
router.beforeEach((to, from, next) => {
  // to & from 은 라우터 정보이다
  console.log(to);
  console.log(from);
  console.log(next);
  // next 함수가 있어야만, 다음 단계로 넘어간다.
  next();
});
```











**특정 경로에 권한을 주는 방법**


로그인 하지 않았을 경우, post에 접근할 수 있어서는 안됨.


각각, url에 meta 데이터를 임의로 줄 수 있는데, 해당 메타 데이터를 이용해서, 특정 페이지는 권한이 있어야만 접근이 가능하도록 변경할 예정





특정 url의 경우, 로그인하지 않았을 경우 접근할 수 있으면 안됨

[![vue_3 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/image_upload/92cd898b03874fd2b1d1c89540c760ec/063e5b85-29c9-4b45-ba9e-533f7e1d177d.png)](undefined)





**기본적인 처리소스**


1\. 특정 경로에 메타데이터 부여

```
{
  path: '/main',
  component: () => import('@/views/MainPage.vue'),
  meta: { auth: true },
},
```





2\. router 가드에서 페이지 전환이 일어나기 전에 특정 처리

```
router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters.isLogin) {
    console.log('인증이 필요합니다.');
    next('/login');
    // 라우터 내부에서 라우터를 호출할 것이 아니라, 제공하는 api인 next를 사용한다.
    //this.$router.push('/login');
    return;
  }
  next();
});
```





**main 페이지의 / 링크, 로그인 상태에 따라 바꾸기**









