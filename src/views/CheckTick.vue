<template>
<div class="content">
  <span>check me</span>
  <input type="checkbox"/>
  <svg viewBox="0 0 400 400" width="30em" height="30em">
    <circle
      class="circle"
      fill="none"
      stroke="#68E534"
      stroke-width="20"
      stroke-linecap="round"
      cx="200"
      cy="200"
      r="190"
      transform="rotate(-90 200 200)"
    ></circle>
    <polyline
      class="tick"
      fill="none"
      stroke="#68E534"
      stroke-width="24"
      stroke-linecap="round"
      stroke-linejoin="round"
      points="88,214 173,284 304,138"
    ></polyline>
  </svg>
  <h2>Payment Success</h2>
</div>
</template>

<script lang="ts">

</script>

<style scoped>

.content {
  font-size: 1vw;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
}

h2 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 8em;
  /* margin-top: 8em; */
  color: #333;
  opacity: 0;
}

.circle {
  stroke-dasharray: 1200;
  stroke-dashoffset: 1200;
}

.tick {
  stroke-dasharray: 350;
  stroke-dashoffset: 350;
}

@keyframes circle {
  from {
    stroke-dashoffset: 1200;
  }
  to {
    stroke-dashoffset: 2400;
  }
}

@keyframes tick {
  from {
    stroke-dashoffset: 350;
  }
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes title {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

input[type="checkbox"]:checked + svg .circle {
  animation: circle 1s ease-in-out;
  animation-fill-mode: forwards;
}

input[type="checkbox"]:checked + svg .tick {
  animation: tick .8s ease-out;
  animation-fill-mode: forwards;
  animation-delay: .95s;
}

input[type="checkbox"]:checked ~ h2 {
  animation: .6s title ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: 1.2s;
}

</style>