<template>
  <div>
    <h2>投票アプリ</h2>
    <form data-netlify="true">
      <input type="text" v-model="name" placeholder="名前" name="name" />
      <select v-model="selectedOption" name="selectedOption">
        <option v-for="option in options" :key="option">{{ option }}</option>
      </select>
      <button type="submit">投票</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      selectedOption: '',
      options: ['選択肢1', '選択肢2', '選択肢3', '選択肢4'],
    };
  },
};
</script>
