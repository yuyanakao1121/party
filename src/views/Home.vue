<template>
  <div class="container">
    <form name="contact" method="POST" @submit="check">
      <h1>タイトル</h1>
      <p>
        <label>Your Name: <input type="text" v-model="name" /></label>
      </p>
      <p>説明</p>
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
        <button type="submit">確認</button>
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
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.course-list {
  display: flex;
  flex-direction: column;
}
</style>
