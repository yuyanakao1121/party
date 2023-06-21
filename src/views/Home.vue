<template>
  <div class="container">
    <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="contact" />
      <input id="name" name="name" type="text" placeholder="お名前" required />
      <input id="email" name="email" type="email" placeholder="メールアドレス" required />
      <textarea id="message" name="message" placeholder="お問い合わせ内容" required></textarea>
      <button type="submit">送信</button>
    </form>
    <p v-if="submitted">ありがとう！</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      submitted: false
    };
  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
}
</style>
