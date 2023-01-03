<script setup>
import useCategories from '~/composables/useCategories';

const { getCategories } = useCategories();

const categories = ref(null);

onMounted(async () => categories.value = await getCategories());
</script>
<template>
  <div class="card">
    <div class="card-header">
      <span class="h3">📔 Your categories</span>

      <NuxtLink
          to="/purchases/create"
          class="btn btn-primary float-end"
      >
        ➕ Create
      </NuxtLink>
    </div>
    <div class="card-body">
      <table class="table">
        <thead>
        <tr>
          <th>#</th>
          <th>name</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="category in categories">
          <th>{{ category.id }}</th>
          <th>{{ category.name }}</th>
          <th />
        </tr>
        </tbody>
      </table>
    </div>
    <div class="card-footer d-flex justify-content-center">
      ~ pagination ~
    </div>
  </div>
</template>