<template>
  <span
    :class="$style.container"
    ref="container"
    @mouseenter="show"
    @mouseleave="hide"
  >
    <Button
      :class="{ [$style.button]: true, [$style.open]: isOpen }"
      @click="toggle"
    >
      {{ title }}
      <span v-html="arrowSymbol"></span>
    </Button>
    <div :class="{ [$style.list]: true, [$style.open]: isOpen }">
      <slot></slot>
    </div>
  </span>
</template>

<script>
import Button from './Button';

export default {
  components: {
    Button,
  },
  props: {
    title: {
      type: String,
      default: 'Open...',
    },
    arrowSymbol: {
      type: String,
      default: '&#x25BC;',
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },

  methods: {
    toggle(ev) {
      this.isOpen = !this.isOpen;
    },

    show() {
      this.isOpen = true;
    },

    hide() {
      this.isOpen = false;
    },

    handleDocumentClick(ev) {
      if (this.$refs['container'].contains(ev.target)) {
        return;
      }

      this.hide();
    },

    handleChildSelect(ev) {
      this.hide();
    },
  },

  mounted() {
    document.addEventListener('click', this.handleDocumentClick);
    this.$on('select', this.handleChildSelect);
  },

  destroyed() {
    document.removeEventListener('click', this.handleDocumentClick);
  },
};
</script>

<style module>
.button {
  font-size: 12px;
  padding: 0px 6px;
}

.button.open {
  background: #6bc790;
  color: #fff;
}

.container {
  position: relative;
}

.list {
  position: absolute;
  background: #ffecff;
  border: 2px solid #ff00eb;
  display: none;
  z-index: 20;
  left: 0;
  border-radius: 5px;
  width: 300px;
  box-shadow: 2px 2px 5px 1px #ffb0f9;
}

.list.open {
  display: block;
}
</style>
