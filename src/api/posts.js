// 학습 노트 데이터를 조회하는 API
import { posts } from '@/api/index';

function fetchPosts() {
  return posts.get('/');
}

// 학습 노트 데이터를 생성하는 API
function createPost(postData) {
  return posts.post('/', postData);
}

export { fetchPosts, createPost };