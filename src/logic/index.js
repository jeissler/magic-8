import { reactive, computed } from 'vue';

const state = reactive({ mode: 'ask' });

// Mutations
function setMode(mode) {
  state.mode = mode;
}

// Actions
function toggleMode() {
  const toggle = state.mode === 'ask' ? 'answer' : 'ask';
  setMode(toggle);
}

// Getters
const getMode = computed(() => state.mode);

export {
  getMode,
  toggleMode
};
