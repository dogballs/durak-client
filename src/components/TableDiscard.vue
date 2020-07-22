<template>
  <div :class="$style.discard" :title="$root.game.discardCount">
    <div :class="$style.cards" v-if="showDiscardCards"></div>
  </div>
</template>

<script>
export default {
  computed: {
    showDiscardCards() {
      if (this.$root.isRoomPlaying) {
        return this.$root.game.discardCount > 0;
      }
      return false;
    },
  },
};
</script>

<style module>
.discard {
  position: relative;
  width: 100px;
  height: 100px;
}

.cards {
  position: absolute;
  height: 60px;
  width: 90px;
  border: 4px solid #000;
  border-radius: 8px;
  background: #fff;
  z-index: 1;
  opacity: 0.5;
}
</style>
