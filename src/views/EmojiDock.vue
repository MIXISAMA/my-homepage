<template>
<div class="content">
  <div class="glass">
    <ul class="dock">
      <li>🤣</li>
      <li>😘</li>
      <li>🤤</li>
      <li>🐮</li>
      <li>👽</li>
      <li>🌚</li>
      <li>💩</li>
    </ul>
  </div>
</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
onMounted(() => {
  const li_list = document.querySelectorAll('.dock li') as NodeListOf<HTMLElement>
  li_list.forEach(li => {
    li.addEventListener('click' , e => {
      const $click_el = e.currentTarget as HTMLElement
      $click_el.classList.add('loading')
    })
    li.addEventListener('mousemove', e => {
      let item = e.target as HTMLElement
      let item_rect = item.getBoundingClientRect()
      let offset = Math.abs(e.clientX - item_rect.left) / item_rect.width

      let prev = item.previousElementSibling as HTMLElement || null
      let next = item.nextElementSibling as HTMLElement || null

      let scale = 0.6

      reset_scale()

      if (prev) {
        prev.style.setProperty('--scale', (1 + scale * Math.abs(offset - 1)).toString())
      }

      item.style.setProperty('--scale', (1 + scale).toString())

      if (next) {
        next.style.setProperty('--scale', (1 + scale * offset).toString())
      }
    })
  })

  const $dock = document.querySelector('.dock') as HTMLElement
  $dock.addEventListener('mouseleave', e => {
    reset_scale()
  })
})

function reset_scale() {
  const li_list = document.querySelectorAll('.dock li') as NodeListOf<HTMLElement>
  li_list.forEach(li => {
    li.style.setProperty('--scale', '1')
  })
}
</script>

<style scoped>

.content {
  font-size: 1vw;
  display: flex;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  align-items: flex-end;
}


.glass {
  width: 100%;
  height: 12em;
  background-color: #eee;
  display: flex;
  justify-content: center;
}

.dock {
  --scale: 1;

  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dock li {
  font-size: calc(10em * var(--scale));
  padding: 0 .1em;
  cursor: default;

  position: relative;
  top: calc((var(--scale) - 1) / 2 * -1em);

  transition: 15ms all ease-out;
}

.dock li.loading {
  animation: 1s loading ease-in infinite;
}

@keyframes loading {
  0%, 100% {
    transform: translateY(0);
  }
  60% {
    transform: translateY(-0.4em);
  }
}

</style>
