<template>
  <div class="container">
    <h2>Confirmation Page</h2>
    <p>Name: {{ store.name }}</p>
    <p>Course: {{ store.selectedCourse }}</p>
    <button @click="submitForm" :disabled="isSubmitting || isSubmitted" class="join-button">Join!!</button>
    <button @click="cancel">Back</button>
    <div v-if="isSubmitted" class="success-message">
      <p>Thank you for joining! You will be redirected to the top page automatically.</p>
    </div>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import { unchi } from '../stores/counter.js';
  import { ref } from 'vue';

  const store = unchi();
  const router = useRouter();
  const isSubmitted = ref(false);
  const isSubmitting = ref(false);

  const submitForm = async () => {
    if (isSubmitting.value) {
      return;
    }

    isSubmitting.value = true;
    try {
      const response = await fetch('https://aiful-party.form.newt.so/v1/4Sue07Uvy', {
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
        console.log('Registration successful');
        isSubmitted.value = true;
        setTimeout(() => {
          router.push('/');
        }, 2000);
      } else {
        console.error('Registration error');
        router.push('/');
      }
    } catch (error) {
      console.error('API request error:', error);
      router.push('/');
    } finally {
      isSubmitting.value = false;
    }
  };

  const cancel = () => {
    router.push('/');
  };
</script>
  
<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.success-message {
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border-radius: 4px;
  text-align: center;
}

.join-button {
  font-size: 20px;
  padding: 10px 20px;
}
</style>
