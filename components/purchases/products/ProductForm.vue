<script setup>
import useCategories from '~/composables/useCategories';

const { getCategories } = useCategories();

const emit = defineEmits(['input']);
const { value } = defineProps({
  value: {
    type: Object,
    default: () => {},
  },
});

const categories = ref(null);

const product = reactive({
  name: null,
  category: null,
  price: null,
});

onMounted(async () => {
  if (value) {
    product.name = value.name;
    product.category = value.category;
    product.price = value.price;
  }

  categories.value = await getCategories();
});

watch(product, (newProduct) => {
  emit('input', newProduct);
}, { deep: true });

</script>

<template>
  <div class="row">
    <div class="col">
      <FormKit
          type="text"
          name="name"
          id="name"
          v-model="product.name"
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
          id="category"
          v-model="product.category"
          label="Category"
          placeholder="Select a category"
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
          name="price"
          id="price"
          v-model="product.price"
          validation="required"
          label="Price (RUB)"
          label-class="form-label"
          input-class="form-control"
          help-class="form-text"
      />
    </div>
  </div>
</template>