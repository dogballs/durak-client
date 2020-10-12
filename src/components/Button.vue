<template>
  <button
    :class="{ [$style.button]: true, [$style.danger]: kind === 'danger' }"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    kind: String,
  },
};
</script>

<style module>
.button {
  border-radius: 4px;
  border: 2px solid #06a947;
  font-size: 16px;
  background: #fff;
  color: #06a947;
  padding: 3px 10px;
  cursor: pointer;
  outline: none;
}

.button:hover {
  border-color: #06bf50;
  color: #06bf50;
}

.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  color: #969696;
  border-color: #969696;
}

.button.danger {
  color: #ff6363;
  border-color: #ff6363;
}

.button.danger:hover {
  color: #ff9797;
  border-color: #ff9797;
}

.button.danger:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  color: #969696;
  border-color: #969696;
}
</style>
