<template>
  <div :class="$style.discard" :title="$root.game.discardCount">
    <div :class="$style.title" v-if="$root.isRoomPlaying">
      Отбой: {{ $root.game.discardCount }}
    </div>
    <div :class="$style.cards" v-if="showDiscardCards">
      <div :class="$style.back"></div>
    </div>
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
  margin-top: -100px;
}

.title {
  color: #fff;
  margin-bottom: 10px;
}

.cards {
  position: absolute;
  height: 134px;
  width: 90px;
  border: 4px solid #000;
  border-radius: 8px;
  background: #fff;
  z-index: 1;
}

.back {
  position: absolute;
  top: 7px;
  bottom: 7px;
  left: 7px;
  right: 7px;
  background: #be68ff;
  border-radius: 4px;
}
</style>
