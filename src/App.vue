<template>
  <div>
    <header>
      <router-link to="/login">로그인</router-link
      ><!-- router-link를 통해서 다른 url로 보낼 수 있음 -->&nbsp;|&nbsp;
      <router-link to="/signup">회원가입</router-link
      ><!-- to라는 속성을 통해서 링크를 보냄 -->
      <router-view></router-view
      ><!-- 라우팅 된 모듈이 보이는 태그 -->
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
