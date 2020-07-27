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
      }"
      :card="card"
      @click.native="select(card)"
      v-for="(card, index) in $root.hand.cards"
      :key="`${card.suite}-${card.rank}`"
      :style="{
        left: `${
          10 -
          $root.hand.cards.length * 0.3 +
          (index / $root.hand.cards.length) * 60
        }%`,
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

  computed: {
    isCardMedium() {
      return (
        this.$root.hand.cards.length >= 9 && this.$root.hand.cards.length < 14
      );
    },
    isCardSmall() {
      return (
        this.$root.hand.cards.length >= 14 && this.$root.hand.cards.length < 16
      );
    },
    isCardTiny() {
      return this.$root.hand.cards.length >= 16;
    },
  },

  methods: {
    select(card) {
      if (!this.$root.isPlayerCurrent) {
        return;
      }

      this.$root.ws.send(JSON.stringify({ id: 'act', card }));
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

/*.cardMedium {
  width: 70px;
  height: 104px;
  background-size: 1000px;
}

.cardSmall {
  font-size: 50px;
}

.cardTiny {
  font-size: 40px;
}*/

.current {
  opacity: 1;
  border-color: #95d89a;
  background: #e7fff3;
}
</style>
