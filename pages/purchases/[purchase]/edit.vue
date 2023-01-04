<script setup>
import Form from '~/components/purchases/Form.vue';
import usePurchases from '~/composables/usePurchases';

const { getPurchase } = usePurchases();
const { params } = useRoute();

const purchase = ref(null);

onMounted(async () => {
  purchase.value = await getPurchase(params.purchase);
});

</script>
<template>
  <div class="card">
    <div class="card-header">
      <span class="h3">Edit purchase</span>
    </div>
    <div class="card-body">
      <Form v-if="purchase" :purchase="purchase" @submit="" />
    </div>
  </div>
</template>