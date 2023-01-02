<script setup>
import useAuth from '~/composables/useAuth';

const { register } = useAuth();
</script>
<template>
  <div>
    <div class="card">
      <div class="card-header">Registration</div>
      <div class="card-body">
        <FormKit
            type="form"
            @submit="register"
            :submit-attrs="{
              inputClass: 'btn btn-primary mt-3'
            }"
        >
          <FormKit
              type="text"
              name="username"
              id="username"
              validation="required|length:4,16"
              label="Username"
              help="your nickname or smth"
              placeholder="Please add username"
              label-class="form-label"
              input-class="form-control"
              help-class="form-text"
          />

          <FormKit
              type="password"
              name="password"
              label="Password"
              help="Enter a new password"
              validation="required"
              label-class="form-label"
              input-class="form-control"
              help-class="form-text"
          />
        </FormKit>
      </div>
    </div>
  </div>
</template>