<template>
    <div>
      <h2>Confirmation Page</h2>
      <p>Name: {{ store.name }}</p>
      <p>Course: {{ store.selectedCourse }}</p>
      <button @click="submitForm">参加</button>
      <button @click="cancel">キャンセル</button>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  import { unchi } from '../stores/counter.js';
  
  const store = unchi();
  const router = useRouter();
  
  const submitForm = async () => {
    try {
      const response = await fetch('https://ssgform.com/s/YzZTNTMQCQ6l', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: store.name,
          selectedCourse: store.selectedCourse,
        }),
      });
  
      if (response.status === 200) {
        const data = await response.text();
        console.log('登録が成功しました:', data);
        router.push('/');
      } else {
        console.error('登録エラー');
        router.push('/');
      }
    } catch (error) {
      console.error('APIリクエストエラー:', error);
      router.push('/');
    }
  };
  
  const cancel = () => {
    // キャンセルの処理
    router.push('/');
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
    margin: 0 auto;
  }
  </style>
  