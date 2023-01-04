<script setup>
import usePurchases from '~/composables/usePurchases';
import moment from 'moment';

const purchases = ref([]);

const { getPurchases, destroyPurchase } = usePurchases();

onMounted(async () => purchases.value = await getPurchases());

const destroyPurchaseThenRefresh = async (purchase) => {
  await destroyPurchase(purchase);

  purchases.value = await getPurchases();
};

const formatDate = (date) => {
  return moment(date).format('Do MMMM YYYY');
};
</script>
<template>
  <div class="card">
    <div class="card-header">
      <span class="h3">✅ Your purchases</span>

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
          <th>date</th>
          <th>amount</th>
          <th class="text-end">actions</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="purchase in purchases">
          <th>{{ purchase.id }}</th>
          <td>
            <NuxtLink :to="`/purchases/${purchase.id}`" class="">
              {{ purchase.name || '-' }}
            </NuxtLink>
          </td>
          <td>{{ formatDate(purchase.created_at) }}</td>
          <td>{{ purchase.amount }} RUB</td>
          <td class="d-flex justify-content-end">
            <div class="btn-group">
              <NuxtLink :to="`/purchases/${purchase.id}/edit`" class="btn btn-primary">
                Edit
              </NuxtLink>
              <button @click="destroyPurchaseThenRefresh(purchase.id)" class="btn btn-danger">
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