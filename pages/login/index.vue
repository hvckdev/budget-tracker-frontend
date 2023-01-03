<script setup>
import useAuth from '~/composables/useAuth';

const { error, login } = useAuth();

const user = computed(() => useState('user'));
</script>

<template>
  <div>
    <div v-if="error" class="alert alert-danger">
      {{ error }}
    </div>
    <div v-if="!user.value" class="card">
      <div class="card-header">Login</div>
      <div class="card-body">
        <FormKit
            type="form"
            @submit="login"
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
              label-class="form-label"
              input-class="form-control"
              help-class="form-text"
          />

          <FormKit
              type="password"
              name="password"
              label="Password"
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