<template>
  <div>
    <AppHeader></AppHeader>
    <router-view></router-view
    ><!-- 라우팅 된 모듈이 보이는 태그 -->
  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';

export default {
  components: {
    AppHeader,
  },
};
</script>

<style scoped></style>
