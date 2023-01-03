<script setup>

defineProps({
  values: {
    type: Object,
    default: () => {},
  },
});

</script>
<template>
  <div>
    <FormKit
        type="form"
        :submit-attrs="{
          inputClass: 'btn btn-primary mt-3'
        }"
        :value="values"
        @submit="$emit('submitForm', $event)"
    >
      <FormKit
          type="text"
          name="name"
          id="name"
          validation="required|length:4,16"
          label="Name"
          label-class="form-label"
          input-class="form-control"
          help-class="form-text"
      />
    </FormKit>
  </div>
</template>