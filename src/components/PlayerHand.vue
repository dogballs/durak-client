<template>
  <div
    :class="{
      [$style.container]: true,
      [$style.current]: $root.isPlayerCurrent,
    }"
    v-if="$root.isRoomPlaying && !$root.isGameEnded"
  >
    <span v-for="card in $root.hand.cards">
      <Card
        :class="{
          [$style.card]: true,
          [$style.cardSelectable]: $root.isPlayerCurrent,
          [$style.cardMedium]: isCardMedium,
          [$style.cardSmall]: isCardSmall,
          [$style.cardTiny]: isCardTiny,
        }"
        :card="card"
        @click.native="select(card)"
      />
    </span>
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
        this.$root.hand.cards.length >= 11 && this.$root.hand.cards.length < 14
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
  border: 5px solid #95d89a;
  background: #e7fff3;
  border-radius: 9px;
  opacity: 0.5;
  height: 120px;
  flex-wrap: wrap;
}

.card {
  cursor: not-allowed;
}

.cardSelectable {
  cursor: pointer;
  opacity: 1;
}

.cardSelectable:hover {
  background: #95d89a;
}

.cardMedium {
  font-size: 60px;
}

.cardSmall {
  font-size: 50px;
}

.cardTiny {
  font-size: 40px;
}

.current {
  opacity: 1;
}
</style>
