<template>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">{{ title }}</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link" active-class="active"> Главная </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/users" class="nav-link" active-class="active">
              Пользователи
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/phones" class="nav-link" active-class="active">
              Телефоны
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/add" class="nav-link" active-class="active">
              Добавление пользователя
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <main class="container">
    <router-view />
  </main>
</template>
<script>
export default {
  name: 'App',
  computed: {
    title() {
      return this.$store.state.navbarTitle
    }
  }
}
</script>
<style>
#app {
  margin-top: 60px;
}
</style>
