<script>
export default {
  data() {
    return {
      name: '',
      selectedOption: '',
      options: ['選択肢1', '選択肢2', '選択肢3', '選択肢4'],
    };
  },
  methods: {
    vote() {
      // サーバに投票情報を送信する処理を実装
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