<template>
  <div>
    <h1>
      {{ randomAnswer }}
    </h1>
  </div>
</template>

<script>
import { computed } from 'vue';
import answers from '../logic/answers.json';

function getRandomIntInclusive(rawMin, rawMax) {
  const min = Math.ceil(rawMin);
  const max = Math.floor(rawMax);
  // The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default {
  setup() {
    const randomAnswer = computed(() => {
      const allAnswers = Object.values(answers)
        .reduce((array, answerArray) => [...array, ...answerArray], []);
      const randomIndex = getRandomIntInclusive(0, allAnswers.length - 1);

      return allAnswers[randomIndex];
    });

    return {
      randomAnswer,
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
