<script setup lang="ts">
import Form from "~/components/categories/Form.vue";
import { useCategories } from "#imports";

const { editCategory, getCategory } = useCategories();
const { params } = useRoute()

const category = ref(null);

onMounted(async () => {
  category.value = await getCategory(params.category)
})
</script>

<template>
  <div>
    <div class="card">
      <div class="card-header">
        <span class="h3">Edit category</span>
      </div>
      <div class="card-body">
        <Form
            v-if="category"
            @submitForm="editCategory(params.category, $event)"
            :values="category"
        />
      </div>
    </div>
  </div>
</template>