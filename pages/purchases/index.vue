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
      </table>
    </div>
    <div class="card-footer d-flex justify-content-center">
      ~ pagination ~
    </div>
  </div>
</template>