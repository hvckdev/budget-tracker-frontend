<script setup>
import ProductForm from '~/components/purchases/products/ProductForm.vue';
import { onMounted, set } from 'vue-demi';
import moment from 'moment';

const productsCount = ref(1);

const emit = defineEmits(['submit']);

const { purchase } = defineProps({
  purchase: {
    type: Object,
    default: () => {},
  },
});

const data = reactive({
  name: null,
  created_at: null,
  products: {},
});

const formLoaded = ref(false);

onMounted(() => {
  if (purchase) {
    set(data, 'name', purchase.name);
    set(data, 'created_at', moment(purchase.created_at).format('YYYY-MM-DD'));
    set(data, 'products', purchase.products);

    productsCount.value = Object.entries(purchase.products).length;
  }

  formLoaded.value = true;
});

const removeProduct = () => {
  delete data.products[productsCount.value];

  productsCount.value--;
};

</script>

<template>
  <div>
    <div v-if="formLoaded">
      <h4>Purchase information</h4>

      <div class="row">
        <div class="col">
          <FormKit
              type="text"
              name="name"
              id="name"
              v-model="data.name"
              validation="required|length:1,64"
              label="Name of purchase"
              label-class="form-label"
              input-class="form-control"
              help-class="form-text"
          />
        </div>
        <div class="col">
          <FormKit
              type="date"
              label="Bought date"
              v-model="data.created_at"
              help="Enter the date when you made purchase"
              validation="required|date_after:2010-01-01"
              label-class="form-label"
              input-class="form-control"
              help-class="form-text"
          />
        </div>
      </div>
      <h4>Products</h4>
      <ProductForm
          v-for="index in productsCount"
          :value="data.products[index]"
          @input="set(data.products, index, $event)"
      />
      <div class="py-2">
        <div class="btn-group">
          <button class="btn btn-success" @click="productsCount++">+</button>
          <button v-if="productsCount > 1" class="btn btn-danger" @click="removeProduct">-</button>
        </div>
      </div>

      <div class="py-2">
        <button class="btn btn-primary" @click="emit('submit', data)">Submit</button>
      </div>
    </div>
  </div>
</template>