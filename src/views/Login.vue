<template>
  <form class="card auth-card">
    <div class="card-content">
      <span class="card-title center">IT CONFA</span>
      <div class="center">
          <label class="role-radio">
            <input
                class="with-gap"
                name="type"
                type="radio"
                value="income"
                checked="checked"
            />
            <span>User</span>
          </label>
          <label class="role-radio">
            <input
                class="with-gap"
                name="type"
                type="radio"
                value="outcome"
            />
            <span>Admin</span>
          </label>
      </div>
      <div class="input-field">
        <input
            id="email"
            type="text"
            class="validate"
        >
        <label for="email">Email</label>
        <small class="helper-text invalid">Email</small>
      </div>
      <div class="input-field">
        <input
            id="password"
            type="password"
            class="validate"
        >
        <label for="password">Password</label>
        <small class="helper-text invalid">Password</small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button
            class="btn waves-effect waves-light auth-submit"
            type="submit"
        >
          Login
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        <a href="/register">SIGN UP</a>
      </p>
    </div>
  </form>
</template>
