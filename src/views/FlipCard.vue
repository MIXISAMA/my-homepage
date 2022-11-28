<template>
  <div class="container">
    <div class="card-container">
      <div class="cover">
        COVER
      </div>
      <div class="back">
        BACK
      </div>
      <!-- <img src="https://via.placeholder.com/300x400?text=CARD" /> -->
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.container {
  font-size: 1vw;
  font-family: Arial, Helvetica, sans-serif;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(174.2deg, rgba(255, 244, 228, 1) 7.1%, rgba(240, 246, 238, 1) 67.4%);
}

.card-container {
  width: 30em;
  height: 40em;
  position: relative;
  perspective: 100em;
}

.cover,
.back {
  font-size: 5em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 0.4em;
  box-shadow: 0 .2em .5em rgba(0, 0, 0, 0.18);
  position: absolute;
  backface-visibility: hidden;
  transition: transform 0.25s ease-in-out;
}

.cover {
  transform: rotateY(0deg);
  background-image: radial-gradient(circle farthest-corner at 10% 20%, rgba(97, 186, 255, 1) 0%, rgba(166, 239, 253, 1) 90.1%);
}

.card-container:hover .cover {
  transform: rotateY(180deg);
}

.back {
  transform: rotateY(-180deg);
  background-image: radial-gradient(circle 588px at 31.7% 40.2%, rgba(225, 200, 239, 1) 21.4%, rgba(163, 225, 233, 1) 57.1%);
}

.card-container:hover .back {
  transform: rotateY(0deg);
}
</style>
