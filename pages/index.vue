<script setup>
const user = useState('user');
</script>
<template>
  <div class="card card-body">
    <h3>😍 Budget tracker</h3>

    <div v-if="user">
      <p>You are authenticated 🔥</p>
      <p>Hello, {{ user.username }} 💖</p>
    </div>
  </div>
</template>