<template>
  <div class="container">
    <form name="contact" method="POST" @submit="check">
      <h1>aiful party</h1>
      <h3> 6/30(Fri.) 18:30～20:30</h3>
      <h3><a href="https://restaurant-town.com/">会場:TOWN</a></h3>
      <p>みなさん、お疲れ様！交流会をやるよ！<br>
        立食形式でゆるゆる楽しもう！<br>
      パートナーや家族も一緒に参加OK!<br>
      来れる人はニックネームとコース選んで、6/26(Tue.)までに投票ボタンを押して!</p>
      <p>
        <label>ニックネーム: <input type="text" v-model="name" :class="{ 'error': nameError }"/></label>
        <span v-if="nameError" class="error-message">What's your nick name?</span>
      </p>
      <p class="description">＊一番人気のあったコースが選ばれます</p>

      <div class="course-list">
        <label>
          <input type="radio" v-model="selectedCourse" value="お料理７品コース ¥2,700" />
          お料理７品とデザート、コーヒーが付いたスタンダードなコース ¥2,700
        </label>
        <p v-if="selectedCourse === 'お料理７品コース ¥2,700'" class="course-details narrow-width">
<p>前菜５種盛り<br>
フォカッチャ<br>
ガーデンサラダ<br>
コンソメ風味のフライドポテト<br>
リゾット<br>
モチコチキン<br>
パスタ<br>
デザート<br>
コーヒーor紅茶</p>
</p></div>

      <div class="course-list">
        <label>
          <input type="radio" v-model="selectedCourse" value="お料理７品飲み放題コース ¥4,300" />
          お料理７品のスタンダードコース。２時間ドリンク<b>飲み放題付き</b> ¥4,300
        </label>
        <p v-if="selectedCourse === 'お料理７品飲み放題コース ¥4,300'" class="course-details narrow-width">
          <p>前菜５種盛り<br>
フォカッチャ<br>
ガーデンサラダ<br>
コンソメ風味のフライドポテト<br>
リゾット<br>
モチコチキン<br>
パスタ<br>
デザート<br>
コーヒーor紅茶<br>
<b>２時間飲み放題</b></p>
</p></div>

      <div class="course-list">
        <label>
          <input type="radio" v-model="selectedCourse" value="お料理８品コース ¥3,200" />
          メインの<b>お魚料理</b>などお料理８品がつくタウンおススメのコース ¥3,200
        </label>
        <p v-if="selectedCourse === 'お料理８品コース ¥3,200'" class="course-details narrow-width">
<p>前菜５種盛り<br>
フォカッチャ<br>
ガーデンサラダ<br>
コンソメ風味のフライドポテト<br>
リゾット<br>
モチコチキン<br>
パスタ<br>
<b>季節のお魚料理</b><br>
デザートの盛り合わせ<br>
コーヒーor紅茶</p>
</p></div>

      <div class="course-list">
        <label>
          <input type="radio" v-model="selectedCourse" value="お料理８品飲み放題コース ¥4,800" />
          <b>お魚料理</b>などの８品に<b>飲み放題</b>がついたタウンおすすめのコース ¥4,800
        </label>
        <p v-if="selectedCourse === 'お料理８品飲み放題コース ¥4,800'" class="course-details narrow-width">
          <p>前菜５種盛り<br>
フォカッチャ<br>
ガーデンサラダ<br>
コンソメ風味のフライドポテト<br>
リゾット<br>
モチコチキン<br>
パスタ<br>
<b>季節のお魚料理</b><br>
デザートの盛り合わせ<br>
コーヒーor紅茶<br>
<b>２時間飲み放題</b></p>
</p></div>

        <p>
        <button type="submit">投票</button>
      </p>
    </form>
    <br>
    <div class="centered">
      <h2>参加人数: {{ names.length }}</h2>
      <h3>名簿一覧:</h3>
      <ul>
        <li v-for="name in names" :key="name">{{ name }}</li>
      </ul>
    </div>
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
const nameError = ref(false);

//以下に参加者をハードコーディングするしかない
const names = ref([]); 

const check = (event) => {
  event.preventDefault();

  if (name.value.trim() === '') {
    nameError.value = true;
    return;
  }
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
.error {
  border: 1px solid red;
}
.error-message {
  color: red;
  font-size: 12px;
}
.description {
  color: red;
}
.course-details.narrow-width {
  max-width: 400px; /* 好みに合わせて幅を調整してください */
  margin-left: auto;
  margin-right: auto;
}
</style>
