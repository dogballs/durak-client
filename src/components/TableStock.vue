<template>
  <div :class="$style.stock" :title="$root.game.stockCount">
    <div :class="$style.title" v-if="$root.isRoomPlaying">
      Колода: {{ $root.game.stockCount }}
    </div>
    <div :class="$style.cards" v-if="showStockCards">
      <div :class="$style.back"></div>
    </div>
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
      return this.$root.game.stockCount > 1;
    },
    hasTrumpLeft() {
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
        return this.hasTrumpLeft;
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
  margin-top: -160px;
  margin-left: 30px;
}

.title {
  color: #fff;
  margin-bottom: 10px;
}

.trump {
  display: inline-block;
  margin-left: 25px;
  margin-top: 47px;
}

.cards {
  position: absolute;
  height: 90px;
  width: 134px;
  border: 4px solid #000;
  border-radius: 8px;
  background: #fff;
  z-index: 1;
  opacity: 1;
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
