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
        [$style.alot]: sortedCards.length >= 12,
      }"
      :card="card"
      @click.native="select(card)"
      v-for="(card, index) in sortedCards"
      :key="`${card.suite}-${card.rank}`"
      :style="{
        left: `${getLeftPosition(index)}%`,
      }"
    />
  </div>
</template>

<script>
import Card from './Card';

const SUITE_ORDER = [2, 1, 3, 4];

export default {
  components: {
    Card,
  },

  computed: {
    sortedCards() {
      if (this.$root.handSort === 0) {
        return this.$root.hand.cards;
      }

      const order = SUITE_ORDER.slice();

      const trumpIndex = SUITE_ORDER.indexOf(this.$root.game.trumpCard.suite);
      order.splice(trumpIndex, 1);

      if (this.$root.handSort === 1) {
        order.unshift(this.$root.game.trumpCard.suite);
      } else if (this.$root.handSort === 2) {
        order.push(this.$root.game.trumpCard.suite);
      }

      const cards = this.$root.hand.cards.slice();

      cards.sort((card1, card2) => {
        const suiteIndex1 = order.indexOf(card1.suite);
        const suiteIndex2 = order.indexOf(card2.suite);

        if (suiteIndex1 === suiteIndex2) {
          return card1.rank < card2.rank ? -1 : 1;
        }

        return suiteIndex1 < suiteIndex2 ? -1 : 1;
      });

      return cards;
    },
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
  animation: blink-animation 1s steps(5, start) infinite;
}

@keyframes blink-animation {
  to {
    border-color: #00a1ff;
  }
}
</style>
