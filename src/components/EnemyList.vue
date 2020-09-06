<template>
  <div :class="$style.container">
    <div :class="$style.players">
      <div
        :class="{
          [$style.player]: true,
          [$style.current]: enemy.id === $root.game.currentId,
        }"
        v-for="(enemy, index) in enemyPlayers"
      >
        <PlayerAvatar :class="$style.avatar" :id="enemy.id" />
        <div :class="$style.name">
          {{ enemy.name }}
        </div>
      </div>
    </div>
    <div :class="$style.hands">
      <div
        :class="$style.hand"
        v-for="enemyCounter in enemyCounters"
        :title="enemyCounter.cardCount"
      >
        <div
          :class="{
            [$style.card]: true,
            [$style.cardSmall]:
              enemyCounter.cardCount > 15 && enemyCounter.cardCount <= 20,
            [$style.cardTiny]: enemyCounter.cardCount > 20,
          }"
          v-for="cardIndex in enemyCounter.cardCount"
        >
          <div
            :class="{
              [$style.back]: true,
              [$style.backCurrent]: enemyCounter.id === $root.game.currentId,
            }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlayerAvatar from './PlayerAvatar';

export default {
  components: {
    PlayerAvatar,
  },
  computed: {
    enemyPlayers() {
      const players = this.$root.isRoomPlaying
        ? this.$root.game.players
        : this.$root.room.players;

      const notObservers = players.filter((player) => {
        return player.role !== 2;
      });

      const selfIndex = notObservers.findIndex((player) => {
        return player.id == this.$root.player.id;
      });

      if (selfIndex === -1) {
        return notObservers;
      }

      const enemies = [
        ...notObservers.slice(selfIndex + 1),
        ...notObservers.slice(0, selfIndex),
      ];

      return enemies;
    },
    enemyCounters() {
      const counters = this.$root.counters;

      const selfIndex = counters.findIndex((counter) => {
        return counter.id === this.$root.player.id;
      });

      if (selfIndex === -1) {
        return counters;
      }

      const enemyCounters = [
        ...counters.slice(selfIndex + 1),
        ...counters.slice(0, selfIndex),
      ];

      return enemyCounters;
    },
  },
};
</script>

<style module>
.players {
  height: 110px;
  display: flex;
  justify-content: space-around;
}

.player {
  width: 130px;
  opacity: 0.5;
  position: relative;
}

.current {
  opacity: 1;
  color: #21ab2c;
}

.name {
  text-align: center;
}

.avatar {
  margin-left: 16px;
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
  position: relative;
}

.inside {
  width: 100%;
  height: 100%;
}

.sign {
  position: absolute;
  font-size: 25px;
  top: 39px;
  left: 55px;
}

.cardSmall {
  border: 2px solid #000;
  border-radius: 3px;
  height: 17px;
  width: 9px;
}

.cardTiny {
  border: 1px solid #000;
  border-radius: 2px;
  height: 14px;
  width: 7px;
}

.back {
  position: absolute;
  top: 1px;
  bottom: 1px;
  left: 1px;
  right: 1px;
  background: #ccc;
  border-radius: 1px;
}

.backCurrent {
  background: #be68ff;
}
</style>
