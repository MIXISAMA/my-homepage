<template>
<div id="container">
  <h1>
    <span><i>Let</i></span>&nbsp
    <span><i>Life</i></span>&nbsp
    <span><i>Be</i></span>&nbsp
    <span><i>Beautiful</i></span>&nbsp
    <span><i>Like</i></span>&nbsp
    <span><i>Summer</i></span>&nbsp
    <span><i>Flowers</i></span>&nbsp
  </h1>
  <p>
    Life, thin and light-off time and time again.
    Frivolous tireless.
    I heard the echo, from the valleys and the heart.
    Open to the lonely soul of sickle harvesting.
    Repeat outrightly, but also repeat the well-being of eventually swaying in the desert oasis.
    I believe I am.
    Born as the bright summer flowers.
    Do not withered undefeated fiery demon rule.
    Heart rate and breathing to bear the load of the cumbersome Bored.
    I heard the music, from the moon and carcass.
    Auxiliary extreme aestheticism bait to capture misty.
    Filling the intense life, but also filling the pure.
    There are always memories throughout the earth.
    I believe I am.
    Died as the quiet beauty of autumn leaves.
    Sheng is not chaos, smoke gesture.
    Even wilt also retained bone proudly Qing Feng muscle Occult.
    I hear love, I believe in love.
    Love is a pool of struggling blue-green algae.
    As desolate micro-burst of wind.
    Bleeding through my veins.
    Years stationed in the belief.
    I believe that all can hear.
    Even anticipate discrete, I met the other their own.
    Some can not grasp the moment.
    Left to the East to go West, the dead must not return to nowhere.
    See, I wear Zan Flowers on my head, in full bloom along the way all the way.
    Frequently missed some, but also deeply moved by wind, frost, snow or rain.
    Prajna Paramita, soon as soon as life be beautiful like summer flowers and death like autumn leaves.
    Also care about what has.
  </p>
</div>

</template>

<script setup lang="ts">

</script>

<style scoped>

#container {
  font-size: 4.2vw;
  font-family: Arial, Helvetica, sans-serif;
  margin: 1em;
}

h1 {
  margin: 0;
  letter-spacing: -0.04em;
  word-spacing: -0.1em;
  line-height: 1em;
}

p {
  font-size: .9em;
  color: #666;
  line-height: 1.1em;
  position: relative;
  top: 0.8em;
  opacity: 0;
  animation: .5s swift-up ease-out forwards, .5s fade-in ease-out forwards;
  animation-delay: 0.8s;
}

@keyframes fade-in {
  to {
    opacity: 1;
  }
}

span {
  display: inline-block;
  overflow: hidden;
  position: relative;
  top: .8em;
  animation: .3s swift-up ease-in-out forwards;
}

i {
  font-style: normal;
  position: relative;
  top: 1em;
  animation: .5s swift-up ease-in-out forwards;
}

@keyframes swift-up {
  to {
    top: 0em
  }
}

span:nth-of-type(1) i {
  animation-delay: 0s;
}
span:nth-of-type(2) i {
  animation-delay: .1s;
}
span:nth-of-type(3) i {
  animation-delay: .2s;
}
span:nth-of-type(4) i {
  animation-delay: .3s;
}
span:nth-of-type(5) i {
  animation-delay: .4s;
}
span:nth-of-type(6) i {
  animation-delay: .5s;
}
span:nth-of-type(7) i {
  animation-delay: .6s;
}

span:nth-of-type(1) {
  animation-delay: 0s;
}
span:nth-of-type(2) {
  animation-delay: .1s;
}
span:nth-of-type(3) {
  animation-delay: .2s;
}
span:nth-of-type(4) {
  animation-delay: .3s;
}
span:nth-of-type(5) {
  animation-delay: .4s;
}
span:nth-of-type(6) {
  animation-delay: .5s;
}
span:nth-of-type(7) {
  animation-delay: .6s;
}

</style>
