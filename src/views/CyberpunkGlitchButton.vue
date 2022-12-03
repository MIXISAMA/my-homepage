<template>
<div class="content">
  <button>AVAILABLE NOW</button>
</div>
</template>

<script setup lang="ts">

</script>

<style scoped>

.content {
  font-size: 1vw;
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #F8F005;
  position: relative;
}

button, button::after {
  width: 14em;
  height: 2.8em;
  font-size: 3em;
  font-weight: bold;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  background: linear-gradient(45deg, transparent 5%, #FF013C 5%);
  border: 0;
  color: #fff;
  letter-spacing: 0.08em;
  box-shadow: 0.2em 0 0 #00E6F6;
  outline: transparent;
  position: relative;
}

button::after {
  --slice-0: inset(50% 50% 50% 50%);
  --slice-1: inset(80% -0.2em 0 0);
  --slice-2: inset(50% -0.2em 30% 0);
  --slice-3: inset(10% -0.2em 85% 0);
  --slice-4: inset(40% -0.2em 43% 0);
  --slice-5: inset(80% -0.2em 5% 0);

  line-height: 2.8em;
  font-size: 1em;
  content: 'AVAILABLE NOW';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(45deg, transparent 3%, #00E6F6 3%, #00E6F6 5%, #FF013C 5%);
  text-shadow: -0.1em -0.1em 0 #F8F005, 0.1em 0.1em 0 #00E6F6;
  clip-path: var(--slice-0);
}

button:hover::after {
  animation: 1s glitch;
  animation-timing-function: steps(2, end);
}

@keyframes glitch {
  0% {
    clip-path: var(--slice-1);
    transform: translate(-0.6em, -0.3em);
  }
  10% {
    clip-path: var(--slice-4);
    transform: translate(0.6em, -0.3em);
  }
  30% {
    clip-path: var(--slice-3);
    transform: translate(-0.3em, 0em);
  }
  40% {
    clip-path: var(--slice-2);
    transform: translate(0.6em, -0.3em);
  }
  50% {
    clip-path: var(--slice-4);
    transform: translate(-0.6em, -0.3em);
  }
  60% {
    clip-path: var(--slice-1);
    transform: translate(-0.3em, 0em);
  }
  70% {
    clip-path: var(--slice-5);
    transform: translate(-0.3em, 0.3em);
  }
  80% {
    clip-path: var(--slice-3);
    transform: translate(-0.6em, 0em);
  }
  90% {
    clip-path: var(--slice-5);
    transform: translate(-0.6em, -0.3em);
  }
  100% {
    clip-path: var(--slice-2);
    transform: translate(-0.6em, -0.3em);
  }
}

</style>
