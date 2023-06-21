<template>
  <div class="container">
    <form @submit="submitForm" class="contact_form" name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <div class="contact_item">
        <label for="name">お名前</label>
        <input type="text" id="name" v-model="name" name="name" autocomplete="name" />
      </div>
      <div class="contact_item">
        <label for="email">メールアドレス</label>
        <input type="email" id="email" v-model="email" name="email" autocomplete="email" />
      </div>
      <div class="contact_item">
        <label for="message">お問い合わせ内容</label>
        <textarea id="message" v-model="message" rows="12" name="message"></textarea>
      </div>
      <div class="contact_submit">
        <button type="submit">送信</button>
      </div>
    </form>
    <div v-if="submitted" class="confirmation_message">
      参加ありがとうございます！
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
      submitted: false
    };
  },
  methods: {
    submitForm(event) {
      event.preventDefault();
      console.log('フォームが送信されました');
      console.log('名前:', this.name);
      console.log('メールアドレス:', this.email);
      console.log('お問い合わせ内容:', this.message);
      // フォームの送信処理を追加する場合はここに記述します

      this.submitted = true; // 送信完了フラグを立てる
    }
  }
};
</script>

<style>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}

button {
  padding: 10px 20px;
}

.confirmation_message {
  color: red;
  margin-top: 10px;
}
</style>
