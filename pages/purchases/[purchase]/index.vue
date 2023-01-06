<script setup>
import usePurchases from '~/composables/usePurchases';
import moment from 'moment';

const { params } = useRoute();
const { getPurchase } = usePurchases();

const purchase = ref(null);

onMounted(async () => { purchase.value = await getPurchase(params.purchase); });

const formatDate = (date) => {
  return moment(date).format('Do MMMM YYYY');
};

</script>
<template>
  <div>
    <div v-if="purchase" class="card">
      <div class="card-header">
        <span class="h3">{{ purchase.name }}</span>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col">
            <p class="h5">About</p>
            <p>
              Amount:
              <strong>{{ purchase.amount }} RUB</strong>
            </p>
            <p>Made: {{ formatDate(purchase.created_at) }}</p>
          </div>
          <div class="col">
            <p class="h5">Products</p>
            <ul class="list-group">
              <li class="list-group-item" v-for="product in purchase.products">
                <p>Name: {{ product.name }}</p>
                <p>Price: {{ product.price }} RUB</p>
                <p>Category: {{ product.categoryResource.name }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>