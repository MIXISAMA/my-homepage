<script setup lang="ts">

</script>

<template>
    <div class="content">
        <h1 data-spotlight="SpotlightEffect">SpotlightEffect</h1>
    </div>
</template>

<style scoped>
html {
    font-size: 5rem;
}

.content {
    background-color: #222;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50vh;
    padding: 3rem;
}

h1 {
    color: #333;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    font-size: 8rem;
    letter-spacing: -0.3rem;
    position: relative;
}

h1::after {
    content: attr(data-spotlight);
    color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-clip-path: ellipse(10rem 10rem at 0% 50%);
    clip-path: ellipse(10rem 10rem at 0% 50%);
    animation: spotlight 5s infinite;
    background-image: url(https://api.minio.zhangjunbo.top/home/picgo/2022/11/22/gradienta-unsplash_repeat_1669056256080__925763.jpg);
    background-size: 100%;
    background-position: center center;
    background-clip: text;
    -webkit-background-clip: text;
}

@keyframes spotlight {
    0% {
        -webkit-clip-path: ellipse(10rem 10rem at 0% 50%);
        clip-path: ellipse(10rem 10rem at 0% 50%);
    }

    50% {
        -webkit-clip-path: ellipse(10rem 10rem at 0% 50%);
        clip-path: ellipse(10rem 10rem at 100% 50%);
    }

    100% {
        -webkit-clip-path: ellipse(10rem 10rem at 0% 50%);
        clip-path: ellipse(10rem 10rem at 0% 50%);
    }
}
</style>
