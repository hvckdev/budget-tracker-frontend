<script setup>
const user = useState('user');
</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <NuxtLink class="navbar-brand" to="/">😍 Budget Tracker</NuxtLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NuxtLink to="/" class="nav-link">⛺️ Home</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/purchases" class="nav-link">📦 Purchases</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/categories" class="nav-link">📔 Categories</NuxtLink>
            </li>
          </ul>
          <div class="d-flex">
            <ul v-if="!user" class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NuxtLink to="login" class="nav-link">Login</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="register" class="nav-link">Register</NuxtLink>
              </li>
            </ul>
            <div v-else>
              <span>{{ user.username }}</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>