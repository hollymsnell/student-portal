<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">ActualizedIn</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <!-- <li v-if="!isLoggedIn" class="nav-item">
            <a class="nav-link" href="/signup">Sign Up</a>
          </li> -->
          <li v-if="!isLoggedIn" class="nav-item">
            <a class="nav-link" href="/login">Login</a>
          </li>
          <li v-if="isLoggedIn" class="nav-item">
            <a class="nav-link" href="/logout">Log Out</a>
          </li>
        </ul>
      </div>
    </div>
    <nav>
      |
      <router-link to="/about">About</router-link>
      |
      <router-link to="/login">Login</router-link>
      |
      <router-link to="/logout">Logout</router-link>
      |
      <router-link to="/students/capstone/:id">Show Capstone</router-link>
      |
      <router-link to="/students/resume/:id">Show Resume</router-link>
    </nav>
    <router-view />
  </nav>
</template>
<script>
export default {
  data: function () {
    return {
      isLoggedIn: false,
    };
  },
  watch: {
    $route: function () {
      this.isLoggedIn = !!localStorage.jwt;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav {
  padding: 30px;
  font-family: Rubik Bubbles;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.navbar-brand {
  color: gold;
}
</style>
