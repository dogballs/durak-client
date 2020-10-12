<template>
  <button :class="$style.button" @click="click">
    <slot></slot>
  </button>
</template>

<script>
export default {
  methods: {
    click(ev) {
      this.$emit('click', ev);
      this.$parent.$emit('select', ev);
    },
  },
};
</script>

<style module>
.button {
  display: block;
  border: 0;
  background: transparent;
  padding: 5px 10px;
  outline: none;
  cursor: pointer;
  width: 100%;
  text-align: left;
}

.button:not(:disabled):hover {
  background: #06a947;
  color: #fff;
}

.button:disabled {
  cursor: not-allowed;
}
</style>
