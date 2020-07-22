<template>
  <div :class="$style.container">
    <div :class="$style.players">
      <div
        :class="{
          [$style.player]: true,
          [$style.current]: enemy.id === $root.game.currentId,
        }"
        v-for="enemy in enemyPlayers"
      >
        <div :class="$style.icon">
          &#x1F464;
        </div>
        <div :class="$style.name">
          {{ enemy.id }}
        </div>
      </div>
    </div>
    <div :class="$style.hands">
      <div
        :class="$style.hand"
        v-for="enemy in $root.enemies"
        :title="enemy.cardCount"
      >
        <div
          :class="{
            [$style.card]: true,
            [$style.cardSmall]: enemy.cardCount > 15 && enemy.cardCount <= 20,
            [$style.cardTiny]: enemy.cardCount > 20,
          }"
          v-for="cardIndex in enemy.cardCount"
        >
          <div :class="$style.inside"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    enemyPlayers() {
      if (!this.$root.isRoomPlaying) {
        return this.$root.room.players.filter((player) => {
          return player.id !== this.$root.player.id && player.role !== 2;
        });
      }
      return this.$root.game.players.filter((player) => {
        return player.id !== this.$root.player.id && player.role !== 2;
      });
    },
  },
};
</script>

<style module>
.players {
  height: 130px;
  display: flex;
  justify-content: space-around;
}

.player {
  width: 150px;
  opacity: 0.5;
}

.current {
  opacity: 1;
  color: #21ab2c;
}

.name {
  text-align: center;
}

.icon {
  font-size: 80px;
  text-align: center;
}

.hands {
  height: 50px;
  display: flex;
  justify-content: space-around;
}

.hand {
  width: 150px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.card {
  border-radius: 3px;
  border: 2px solid #000;
  height: 20px;
  width: 12px;
  margin-right: 1px;
  padding: 1px;
}

.inside {
  width: 100%;
  height: 100%;
  /*background: #000;*/
}

.cardSmall {
  border: 3px solid #000;
  border-radius: 3px;
  height: 15px;
  width: 7px;
}

.cardTiny {
  border: 3px solid #000;
  border-radius: 2px;
  height: 10px;
  width: 5px;
}
</style>
