<template>
  <div>
    <div class="card">
      <div class="card-header">Registration</div>
      <div class="card-body">
        <form>
          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input type="text" class="form-control" id="username">
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password">
          </div>
          <div class="mb-3">
            <label for="password_confirmation" class="form-label">Confirm password</label>
            <input type="password" class="form-control" id="password_confirmation">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>