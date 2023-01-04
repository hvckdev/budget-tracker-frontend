<script setup lang="ts">
import Form from "~/components/purchases/Form.vue";

import { usePurchases } from "#imports";

const { storePurchase } = usePurchases();
</script>

<template>
  <div class="card">
    <div class="card-header">
      <span class="h3">Create purchase</span>
    </div>
    <div class="card-body">
      <Form @submit="storePurchase" />
    </div>
  </div>
</template>