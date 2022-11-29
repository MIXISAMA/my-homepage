<template>
<div class="content">
  <div id="countdown">
    <svg
      :viewBox="'0 0 ' + size + ' ' + size"
      width="60em"
      height="60em"
    >
      <circle
        fill="transparent"
        :stroke-width="stroke"
        stroke="#eee"
        :r="radius"
        :cx="circle_offset"
        :cy="circle_offset"
      ></circle>
      <circle
        class="circle"
        fill="transparent"
        :stroke-width="stroke"
        stroke="#000"
        :r="radius"
        :cx="circle_offset"
        :cy="circle_offset"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="progress"
        stroke-linecap="round"
      ></circle>
    </svg>
    <span>{{ countdown }}</span>
  </div>
  <button @click="animate">
    Animate!
  </button>
</div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
const size = ref(120)
const stroke = ref(10)
const percentage = ref(100)
const timer = ref(0)
const seconds = ref(5)
const radius = computed(() => (size.value - stroke.value) / 2)
const circle_offset = computed(() => size.value / 2)
const circumference = computed(() => radius.value * 2 * Math.PI)
const progress = computed(() => circumference.value * (1 - percentage.value / 100))
const countdown = computed(() => Math.ceil(seconds.value * percentage.value / 100))
function animate() {
  if (timer.value != 0) {
    return
  }
  timer.value = setInterval(() => {
    percentage.value -= 0.1;
    if (percentage.value <= 0) {
      clearInterval(timer.value)
      percentage.value = 100
      timer.value = 0
    }
  }, seconds.value)
}
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

.circle {
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}

#countdown {
  display: inline-block;
  position: relative;
}

span {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-size: 40em;
  font-family: monospace;
}

</style>