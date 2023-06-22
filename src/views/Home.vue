<template>
  <div class="container">
    <form name="contact" method="POST" @submit="check">
      <h1>aiful party</h1>
      <h3> 6/30(Fri.)　18:30～20：30　</h3>
      <h3><a href="https://restaurant-town.com/">Restaurant:TOWN</a></h3>
      <p1>みなさん、お疲れ様！</p1>
      <p1>交流会をやるよ！立食形式でゆるゆる楽しもう！パートナーや家族も一緒に参加してくれてOK！</p1>
        <p1>来れる人は下のフォームで名前とコース選んで参加ボタン押してね。by GPT</p1>
      <p>
        <label>Your Name: <input type="text" v-model="name" /></label>
      </p>
      <p>＊一番多く選ばれたコースでセッティングします</p>
      <p class="course-list">
        <label><input type="radio" v-model="selectedCourse" value="course1" /> Course 1</label>
      </p>
      <p class="course-list">
        <label><input type="radio" v-model="selectedCourse" value="course2" /> Course 2</label>
      </p>
      <p class="course-list">
        <label><input type="radio" v-model="selectedCourse" value="course3" /> Course 3</label>
      </p>
      <p class="course-list">
        <label><input type="radio" v-model="selectedCourse" value="course4" /> Course 4</label>
      </p>
      <p>
        <button type="submit">参加!!</button>
      </p>
    </form>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { unchi } from '../stores/counter.js';
import { ref } from 'vue';

const store = unchi();
const router = useRouter();
const name = ref('');
const selectedCourse = ref('');

const check = () => {
  router.push({
    path: '/check',
  });
  store.name = name.value;
  store.selectedCourse = selectedCourse.value;
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: auto; /* 中央に配置するために修正 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center; /* 中央に配置するために修正 */
}
.course-list {
  display: flex;
  flex-direction: column;
}
</style>