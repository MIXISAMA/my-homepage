<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <RouterLink to="/spotlight">Spotlight</RouterLink>
  <RouterLink to="/check-tick">Check Tick</RouterLink>
  <RouterLink to="/toggle-button">Toggle Button</RouterLink>
  <RouterLink to="/hamburger-menu">Humburger Menu</RouterLink>
  <RouterView></RouterView>
</template>

<style>

</style>
