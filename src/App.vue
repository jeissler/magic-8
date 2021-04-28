<template>
  <EightBall />
  <button class="mt-10 uppercase" @click="toggleMode">
    Click to {{ mode === 'ask' ? 'answer' : 'ask' }}
    </button>
</template>

<script>
import { getMode, toggleMode } from './logic';
import EightBall from './components/EightBall.vue';

export default {
  components: {
    EightBall
  },
  setup() {
    return {
      mode: getMode,
      toggleMode
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: white;
  background: #262626;
  min-height: 100vh
}
</style>
