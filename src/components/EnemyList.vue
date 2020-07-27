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
        <div :class="[$style.avatar, getImageClassName(enemy.id)]"></div>
        <div :class="$style.name">
          {{ enemy.name }}
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
          <div
            :class="{
              [$style.back]: true,
              [$style.backCurrent]: enemy.id === $root.game.currentId,
            }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const IMAGE_CLASS_NAMES = [
  'avatar-asia',
  'avatar-carpenter',
  'avatar-nerd-glasses',
  'avatar-female',
  'avatar-uncle',
  'avatar-jason',
  'avatar-pirate',
  'avatar-woman',
  'avatar-user',
  'avatar-diver',
];

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
  methods: {
    getImageClassName(id) {
      const roomIndex = this.$root.room.players.findIndex(
        (player) => player.id === id,
      );
      const imageName = IMAGE_CLASS_NAMES[roomIndex];
      return imageName;
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
  height: 90px;
  width: 90px;
  margin-left: 16px;
  background-size: contain;
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
