<script setup>
import useCategories from '~/composables/useCategories';

const { getCategories, destroyCategory } = useCategories();

const categories = ref(null);

onMounted(async () => categories.value = await getCategories());

const destroyCategoryThenRefresh = async (category) => {
  await destroyCategory(category);

  categories.value = await getCategories();
};
</script>
<template>
  <div class="card">
    <div class="card-header">
      <span class="h3">📔 Your categories</span>

      <NuxtLink
          to="/categories/create"
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
          <th class="text-end">actions</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="category in categories">
          <th>{{ category.id }}</th>
          <td>{{ category.name }}</td>
          <td>
            <div class="btn-group float-end">
              <NuxtLink
                  :to="`/categories/${category.id}/edit`"
                  class="btn btn-primary"
              >
                Edit
              </NuxtLink>
              <button
                  class="btn btn-danger"
                  @click="destroyCategoryThenRefresh(category.id)"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="card-footer d-flex justify-content-center">
      ~ pagination ~
    </div>
  </div>
</template>