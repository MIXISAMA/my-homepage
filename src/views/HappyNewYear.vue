<template>
<div class="content">
  <div class="container">
    <div>
      <span>HAPPY</span>
      <span>JOYFUL</span>
    </div>
    <div>
      <span>NEW</span>
      <span>HAPPINESS</span>
    </div>
    <div>
      <span>YEAR</span>
      <span>HEALTHY</span>
    </div>
    <div>
      <span>2023</span>
      <span>PROSPERITY</span>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.content {
  font-size: 1vw;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.container {
  display: flex;
  flex-direction: column;
  perspective: 10em;
}

.container > div {
  display: block;
  height: 1em;
  font-size: 2em;
  overflow: hidden;
}

.container > div > span {
  display: block;
  height: 2em;
  font-weight: bold;
  letter-spacing: -.05em;
  text-align: center;
  transition: .3s transform ease-in-out;
  padding: 0em 0.5em;
}

.container:hover > div > span {
  transform: translateY(-100%);
}

.container > div:nth-child(1) {
  background-color: rgba(0, 0, 0, .02);
  transform: rotateX(30deg);
}

.container > div:nth-child(2) {
  background-color: rgba(0, 0, 0, .1);
  transform: translateY(-0.08em) rotateX(-30deg);
}

.container > div:nth-child(3) {
  background-color: rgba(0, 0, 0, .02);
  transform: translateY(-0.16em) rotateX(30deg);
}

.container > div:nth-child(4) {
  background-color: rgba(0, 0, 0, .1);
  transform: translateY(-0.24em) rotateX(-30deg);
}

</style>
