<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <div class="navbar-nav">
        <button class="nav-link" role="button">
          <i class="fas fa-bars"></i>
        </button>
        <router-link to="/dashboard">Dashboard</router-link>
        <router-link to="/search">Search</router-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style scoped></style>
