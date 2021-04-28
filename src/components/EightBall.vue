<template>
  <div class="shadow-bg"></div>
  <div class="ball-bg">
    <transition name="slideDown">
      <TopNumber
        class="inner-bg"
        v-if="mode === 'ask'"
        @click="toggleMode"
      />
    </transition>
    <transition name="slideUp">
      <AnswerWindow
        class="window-bg"
        v-if="mode === 'answer'"
        @click="toggleMode"
      />
    </transition>
  </div>
</template>

<script>
import { toggleMode, getMode } from '../logic';
import TopNumber from './TopNumber.vue';
import AnswerWindow from './AnswerWindow.vue';

export default {
  components: {
    TopNumber,
    AnswerWindow,
  },
  setup() {
    return {
      toggleMode,
      mode: getMode
    };
  }
};
</script>

<style>
.shadow-bg {
  @apply absolute top-0;

  width: 630px;
  height: 630px;
  left: 28%;
  background: #0f0f0f;
}

.ball-bg,
.inner-bg,
.window-bg,
.shadow-bg {
  @apply mx-auto;

  border-radius: 100%;
}

.ball-bg {
  @apply overflow-hidden relative bg-black;

  width: 600px;
  height: 600px;
}

.inner-bg,
.window-bg {
  @apply absolute cursor-pointer;

  width: 45%;
  height: 45%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.inner-bg {
  background: #ccc;
}

.window-bg {
  @apply flex justify-center items-center;

  background: #372e9b;
  padding: 15px;
  border: 4px solid #424242;
}

/* Transitions */
.slideDown-enter-active,
.slideDown-leave-active,
.slideUp-enter-active,
.slideUp-leave-active {
  transition: top 0.5s ease;
}

.slideDown-enter-from,
.slideDown-leave-to {
  top: -100%;
}

.slideUp-enter-from,
.slideUp-leave-to {
  top: 150%;
}
</style>
