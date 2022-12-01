
<template>
<div class="content">
  <div class="sticky-container">
    <div class="cat blue">
      <h3>
        Blue Cute kitty.<br/>
        &nbsp;
      </h3>
      <img src="https://api.minio.zhangjunbo.top:443/home/picgo/2022/12/01/bluecat_repeat_1669875921808__142685.png"/>
    </div>
    <div class="cat yellow">
      <h3>
        Blue Cute kitty.<br/>
        <span>Yellow</span>
      </h3>
      <img src="https://api.minio.zhangjunbo.top:443/home/picgo/2022/12/01/yellowcat_repeat_1669875921808__244343.png"/>
    </div>
    <div class="cat red">
      <h3>
        Blue Cute kitty.<br/>
        Yellow and<span> Red</span>
      </h3>
      <img src="https://api.minio.zhangjunbo.top:443/home/picgo/2022/12/01/redcat_repeat_1669875921808__650823.png"/>
    </div>
  </div>
  <div class="bottom">
    <span>I Love my Cat.</span>
  </div>
</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  window.addEventListener('scroll', (e) => {
    let no_sticky_offset = document.documentElement.clientHeight * 2
    let scrolled = document.documentElement.scrollTop / no_sticky_offset

    let $yellow = document.querySelector<HTMLInputElement>('.yellow')
    let $red = document.querySelector<HTMLInputElement>('.red')

    $yellow!.style.clipPath = `inset(${(0.5 - scrolled) / 0.5 * 100}% 0 0 0)`
    $red!.style.clipPath = `inset(${(1 - scrolled) / 0.5 * 100}% 0 0 0)`

    if (scrolled >= 1) {
      document.querySelector<HTMLInputElement>('.sticky-container')?.classList.add('no-sticky')
    } else {
      document.querySelector<HTMLInputElement>('.sticky-container')?.classList.remove('no-sticky')
    }
  })
})

</script>

<style scoped>

.content {
  font-size: 1vh;
  min-height: 300vh;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #000;
  display: flex;
  flex-direction: column;

  --cat-blue-bg: cornflowerblue;
  --cat-blue-text: lightcyan;

  --cat-yellow-bg: darkkhaki;
  --cat-yellow-text: lightgoldenrodyellow;
  --cat-yellow-text-highlight: yellow;

  --cat-red-bg: lightcoral;
  --cat-red-text: lightpink;
  --cat-red-text-highlight: crimson;

  color:lightpink;

  --cat-height: 60em;
  --cat-offscreen: -40em
}

.sticky-container {
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}


.sticky-container .cat {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
}

.sticky-container .cat h3 {
  font-size: 5vw;
  margin: 0 0 5vh 0;
  min-width: 50vw;
}

.sticky-container .cat img {
  display: block;
  width: auto;
  height: var(--cat-height);
  margin-bottom: var(--cat-offscreen);
}

.sticky-container .cat.blue {
  background-color: var(--cat-blue-bg);
}

.sticky-container .cat.blue h3 {
  color: var(--cat-blue-text);
}

.sticky-container .cat.yellow {
  background-color: var(--cat-yellow-bg);
  clip-path: inset(100% 0 0 0);
}

.sticky-container .cat.yellow h3 {
  color: var(--cat-yellow-text);
}

.sticky-container .cat.yellow h3 span {
  color: var(--cat-yellow-text-highlight);
}

.sticky-container .cat.red {
  background-color: var(--cat-red-bg);
  clip-path: inset(100% 0 0 0);
}

.sticky-container .cat.red h3 {
  color: var(--cat-red-text);
}

.sticky-container .cat.red h3 span {
  color: var(--cat-red-text-highlight);
}

.sticky-container.no-sticky {
  position: relative;
  overflow: visible;
}

.sticky-container.no-sticky .cat {
  position: relative;
}

.sticky-container.no-sticky .cat.red {
  padding-bottom: calc(var(--cat-offscreen) * -1);
}

.bottom {
  position: relative;
  translate: 0 220vh;
  background-color: var(--cat-red-bg);
  display: flex;
  justify-content: center;
  padding-bottom: 8vh;
  font-size: 7vw;
  font-weight: bold;
}

</style>