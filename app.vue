<script setup lang="ts">
import Navbar from "~/partials/Navbar.vue";

const mounted = ref(false);

onMounted(() => {
  mounted.value = true;
})

</script>

<template>
  <div>
    <div v-if="mounted">
      <Navbar />
      <div class="container mt-3">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>