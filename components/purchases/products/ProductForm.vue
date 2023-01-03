<script setup>
import useCategories from '~/composables/useCategories';

const categories = ref(null);

const { getCategories } = useCategories();

onMounted(async () => {
  categories.value = (await getCategories());
});

</script>

<template>
  <div class="row">
    <div class="col">
      <FormKit
          type="text"
          name="name"
          id="name"
          validation="required|length:4,16"
          label="Name of product"
          label-class="form-label"
          input-class="form-control"
          help-class="form-text"
      />
    </div>
    <div v-if="categories" class="col">
      <FormKit
          type="select"
          name="category"
          id="name"
          label="Category"
          label-class="form-label"
          input-class="form-select"
          help-class="form-text"
          validation="required"
          :options="categories.map((category) => ({label: category.name, value: category.id}))"
      />
    </div>
    <div class="col">
      <FormKit
          type="number"
          name="name"
          id="name"
          validation="required"
          label="Price (RUB)"
          label-class="form-label"
          input-class="form-control"
          help-class="form-text"
      />
    </div>
  </div>
</template>