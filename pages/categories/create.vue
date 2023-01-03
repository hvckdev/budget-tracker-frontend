<script setup lang="ts">
import Form from "~/components/categories/Form.vue";
import { useCategories } from "#imports";

const { storeCategory } = useCategories();
</script>

<template>
  <div>
    <div class="card">
      <div class="card-header">
        <span class="h3">Create category</span>
      </div>
      <div class="card-body">
        <Form @submitForm="storeCategory" />
      </div>
    </div>
  </div>
</template>