<template>
  <div>
    <h2>投票アプリ</h2>
    <form @submit.prevent="vote">
      <input type="text" v-model="name" placeholder="名前" name="name" />
      <select v-model="selectedOption" name="selectedOption">
        <option v-for="option in options" :key="option">{{ option }}</option>
      </select>
      <button type="submit">投票</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      selectedOption: '',
      options: ['選択肢1', '選択肢2', '選択肢3', '選択肢4'],
    };
  },
  methods: {
    async vote() {
      try {
        const response = await axios.post('/.netlify/functions/vote', {
          name: this.name,
          selectedOption: this.selectedOption,
        });

        console.log(response.data); // 応答の確認（必要に応じて処理を追加）

        // 応答の処理など、必要な処理を追加してください

        // フォームのリセット
        this.name = '';
        this.selectedOption = '';
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
