<template>
  <div
    :class="{
      [$style.container]: true,
      [$style.current]: $root.isPlayerCurrent,
    }"
    v-if="$root.isRoomPlaying && !$root.isGameEnded"
  >
    <Card
      :class="{
        [$style.card]: true,
        [$style.cardSelectable]: $root.isPlayerCurrent,
        [$style.alot]: $root.hand.cards.length >= 12,
      }"
      :card="card"
      @click.native="select(card)"
      v-for="(card, index) in $root.hand.cards"
      :key="`${card.suite}-${card.rank}`"
      :style="{
        left: `${getLeftPosition(index)}%`,
      }"
    />
  </div>
</template>

<script>
import Card from './Card';

export default {
  components: {
    Card,
  },

  methods: {
    select(card) {
      if (!this.$root.isPlayerCurrent) {
        return;
      }

      this.$root.ws.send(JSON.stringify({ id: 'act', card }));
    },
    getLeftPosition(index) {
      const size = this.$root.hand.cards.length;

      if (size === 1) {
        return 45;
      }

      if (size === 2) {
        return 13 * (6 / size) + index * 12;
      }

      if (size <= 6) {
        return 16 * (6 / size) + index * 12;
      }

      return 10 - size * 0.3 + (index / size) * 85;
    },
  },
};
</script>

<style module>
.container {
  align-items: center;
  justify-content: center;
  flex: 1;
  display: flex;
  border: 5px solid #969696;
  background: #eaeaea;
  border-radius: 9px;
  opacity: 0.5;
  height: 160px;
  flex-wrap: wrap;
  position: relative;
}

.card {
  cursor: not-allowed;
  margin-right: 10px;
  position: absolute;
}

.cardSelectable {
  cursor: pointer;
  opacity: 1;
}

.cardSelectable:hover {
  margin-top: -15px;
}

.alot:hover {
  margin-top: -60px;
}

.current {
  opacity: 1;
  border-color: #95d89a;
  background: #e7fff3;
}
</style>
