<script setup>
import usePurchases from '~/composables/usePurchases';

const purchases = ref([]);

const { getPurchases } = usePurchases();

onMounted(async () => purchases.value = await getPurchases());
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
          <td>{{ purchase.name || '-' }}</td>
          <td>{{ purchase.created_at }}</td>
          <td>{{ purchase.amount }}</td>
          <td>smth</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="card-footer d-flex justify-content-center">
      ~ pagination ~
    </div>
  </div>
</template>