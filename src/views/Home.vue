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

        const { totalVotes, winner } = response.data;
        // 結果の表示など、必要な処理を追加
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>


<template>
  <div>
    <h2>投票アプリ</h2>
    <input type="text" v-model="name" placeholder="名前" />
    <select v-model="selectedOption">
      <option v-for="option in options" :key="option">{{ option }}</option>
    </select>
    <button @click="vote">投票</button>
  </div>
</template>