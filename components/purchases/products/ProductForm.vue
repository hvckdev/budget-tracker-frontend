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