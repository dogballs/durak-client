<template>
  <div :class="$style.stock" :title="$root.game.stockCount">
    <div :class="$style.cards" v-if="showStockCards"></div>
    <Card :class="$style.trump" v-if="showTrump" :card="$root.game.trumpCard" />
  </div>
</template>

<script>
import Card from './Card';

export default {
  components: {
    Card,
  },
  computed: {
    hasStockLeft() {
      return this.$root.game.stockCount > 0;
    },
    showStockCards() {
      if (this.$root.isRoomPlaying) {
        return this.hasStockLeft;
      }
      return true;
    },
    showTrump() {
      if (this.$root.isRoomPlaying) {
        return this.hasStockLeft;
      }
      return false;
    },
  },
};
</script>

<style module>
.stock {
  position: relative;
  width: 100px;
  height: 100px;
}

.trump {
  display: inline-block;
  margin-left: 8px;
  margin-top: 29px;
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
