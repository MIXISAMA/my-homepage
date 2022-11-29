<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <ul>
    <li>
      <RouterLink to="/spotlight">Spotlight</RouterLink>
    </li>
    <li>
      <RouterLink to="/check-tick">Check Tick</RouterLink>
    </li>
    <li>
      <RouterLink to="/toggle-button">Toggle Button</RouterLink>
    </li>
    <li>
      <RouterLink to="/hamburger-menu">Humburger Menu</RouterLink>
    </li>
    <li>
      <RouterLink to="/flip-card">Flip Card</RouterLink>
    </li>
    <li>
      <RouterLink to="/circle-count-down">Circle Count Down</RouterLink>
    </li>
  </ul>
</template>

<style>

</style>
