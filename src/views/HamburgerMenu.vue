<template>
  <header>
    <input type="checkbox" id="toggler" />
    <label for="toggler">
      <div class="hamburger-container">
        <span></span>
        <span></span>
      </div>
    </label>
    <div class="nav-items">
      <ul>
        <li>Home</li>
        <li>iPhone</li>
        <li>iPad</li>
        <li>Mac</li>
        <li>TV</li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">

</script>

<style scoped>
header {
  background-color: #000;
  height: 44px;
  padding: 0 18px;
}

#toggler {
  display: none;
}

.hamburger-container {
  display: block;
  width: 20px;
  height: 20px;
  position: relative;
  top: 16px
}

.hamburger-container span {
  display: block;
  height: 1px;
  background-color: #fff;
  position: relative;
  top: 0;
  transition: transform .3s ease-in-out, top .3s ease-in-out .3s;
}

.hamburger-container span:nth-child(2) {
  margin-top: 7px;
}

#toggler:checked+label .hamburger-container span:nth-child(1) {
  transform: rotate(45deg);
  top: 4px;
  transition: top .3s ease-in-out, transform .3s ease-in-out .3s;
}

#toggler:checked+label .hamburger-container span:nth-child(2) {
  transform: rotate(-45deg);
  top: -4px;
  transition: top .3s ease-in-out, transform .3s ease-in-out .3s;
}

.nav-items {
  background-color: rgba(0, 0, 0, .82);
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 44px;
  left: 0;
  transform: scaleY(0);
  /* transition: all .3s ease-in-out; */
  transition: transform .3s ease-in-out, opacity .3s ease-in-out .3s;
  transform-origin: 50% 0;
  opacity: 0;
}

#toggler:checked~.nav-items {
  transform: scaleY(1);
  opacity: 1;
}

ul {
  margin-top: 1em;
}

ul li {
  color: #fff;
}
</style>
