<script setup lang="ts">
import ProductForm from "~/components/purchases/products/ProductForm.vue";

const productsCount = ref(1);
</script>

<template>
  <div>
    <h4>Purchase information</h4>

    <div class="row">
      <div class="col">
        <FormKit
            type="text"
            name="name"
            id="name"
            validation="required|length:4,16"
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
            help="Enter the date when you made purchase"
            validation="required|date_after:2010-01-01"
            label-class="form-label"
            input-class="form-control"
            help-class="form-text"
        />
      </div>
    </div>
    <h4>Products</h4>
    <ProductForm v-for="index in productsCount" />
    <div class="py-2">
      <div class="btn-group">
          <button class="btn btn-success" @click="productsCount++">+</button>
          <button v-if="productsCount > 1" class="btn btn-danger" @click="productsCount--">-</button>
      </div>
    </div>

    <div class="py-2">
      <button class="btn btn-primary">Submit</button>
    </div>
  </div>
</template>