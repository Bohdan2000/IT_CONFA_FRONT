<template>
  <form class="card auth-card">
    <div class="card-content">
      <span class="card-title center">IT CONFA</span>
      <div class="input-field">
        <input
            id="email"
            type="text"
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
      <div class="input-field">
        <input
            id="FirstName"
            type="text"
            class="validate"
        >
        <label for="FirstName">First name</label>
        <small class="helper-text invalid">First name</small>
      </div>
      <div class="input-field">
        <input
            id="LastName"
            type="text"
            class="validate"
        >
        <label for="LastName">Last name</label>
        <small class="helper-text invalid">Last name</small>

      </div>
    </div>
    <div class="center margin-role-div">
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
    <div class="card-action">
      <div>
        <button
            class="btn waves-effect waves-light auth-submit"
            type="submit"
        >
          SIGN UP
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Alredy have account?
        <a href="/login">Login!</a>
      </p>
    </div>
  </form>
</template>
