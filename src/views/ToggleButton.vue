<template>

<div class="content">
  <label for="toggle">
    <input type="checkbox" id="toggle"/>
    <span></span>
  </label>
</div>
</template>

<script setup lang="ts">

</script>

<style scoped>

.content {
  font-size: 1vw;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  --button-width: 50em;
  --button-height: 29.5em;
  --toggle-diameter: 25.5em;
  --button-toggle-offset: calc(
    (var(--button-height) - var(--toggle-diameter)) / 2
  );
  --toggle-shadow-offset: 1em;
  --toggle-wider: 33.3em;
  --color-grey: #e9e9e9;
  --color-dark-grey: #39393d;
  --color-green: #30d158;
}

span {
  display: inline-block;
  width: var(--button-width);
  height: var(--button-height);
  background-color: var(--color-grey);
  border-radius: calc(var(--button-height) / 2);
  position: relative;
  transition: .3s all ease-in-out;
}

span::after {
  content: '';
  display: inline-block;
  width: var(--toggle-diameter);
  height: var(--toggle-diameter);
  background-color: #fff;
  border-radius: calc(var(--toggle-diameter) / 2);
  position: absolute;
  top: var(--button-toggle-offset);
  transform: translateX(var(--button-toggle-offset));
  box-shadow: 
    var(--toggle-shadow-offset)
    0
    calc(var(--toggle-shadow-offset) * 4)
    rgba(0, 0, 0, 0.1);
  transition: .3s all ease-in-out;
}

input[type="checkbox"]:checked + span {
  background-color: var(--color-green);
}

input[type="checkbox"]:checked + span::after {
  transform: translateX(calc(
    var(--button-width) - var(--toggle-diameter) - var(--button-toggle-offset)
  ));
  box-shadow: 
    calc(var(--toggle-shadow-offset) * -1)
    0
    calc(var(--toggle-shadow-offset) * 4)
    rgba(0, 0, 0, 0.1);
}

input[type="checkbox"] {
  display: none;
}

input[type="checkbox"]:active + span::after {
  width: var(--toggle-wider);
}

input[type="checkbox"]:checked:active + span::after {
  transform: translateX(calc(
    var(--button-width) - var(--toggle-wider) - var(--button-toggle-offset)
  ));
}

@media(prefers-color-scheme: dark) {
  .content {
    background-color: #1c1c1e;
  }
  span {
    background-color: var(--color-dark-grey);
  }
}

</style>