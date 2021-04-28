<template>
  <div>
    <canvas id="canvas" class="absolute h-48 w-56 top-1/4" />
    <h1 class="z-10 p-14 pt-16">
      {{ randomAnswer }}
    </h1>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue';
import answers from '../logic/answers.json';

function getRandomIntInclusive(rawMin, rawMax) {
  const min = Math.ceil(rawMin);
  const max = Math.floor(rawMax);
  // The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function drawTriangle() {
  const canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(300, 0);
    ctx.lineTo(150, 150);
    ctx.fillStyle = '#3f33ca';
    ctx.fill();
  }
}

export default {
  setup() {
    const randomAnswer = computed(() => {
      const allAnswers = Object.values(answers)
        .reduce((array, answerArray) => [...array, ...answerArray], []);
      const randomIndex = getRandomIntInclusive(0, allAnswers.length - 1);

      return allAnswers[randomIndex];
    });

    onMounted(() => drawTriangle());

    return {
      randomAnswer
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Abel&family=Shadows+Into+Light&family=Zen+Dots&display=swap");

h1 {
  font-family: "Abel", sans-serif;
  font-size: 1.65rem;
}
</style>
