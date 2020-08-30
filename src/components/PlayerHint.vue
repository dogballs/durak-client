<template>
  <div :class="$style.container">
    <div>
      {{ text }}
    </div>
    <div :class="$style.secondary" v-if="isWaiting">
      (скопируйте ссылку на игру в адресной строке браузера и поделитесь с
      друзьями)
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    loserPlayerName() {
      const loserPlayer = this.$root.game.players[0];
      if (!loserPlayer) {
        return 'Игрок';
      }
      return loserPlayer.name;
    },
    defenderPlayerName() {
      const currentPlayer = this.$root.room.players.find(
        (player) => player.id === this.$root.game.defenderId,
      );
      if (!currentPlayer) {
        return 'Игрок';
      }
      return currentPlayer.name;
    },
    currentPlayerName() {
      const currentPlayer = this.$root.room.players.find(
        (player) => player.id === this.$root.game.currentId,
      );
      if (!currentPlayer) {
        return 'Игрок';
      }
      return currentPlayer.name;
    },
    isWaiting() {
      return (
        this.$root.room.state === 0 ||
        this.$root.room.state === 1 ||
        this.$root.room.state === 2
      );
    },
    text() {
      if (this.$root.room.state === 0) {
        return 'Ожидание хоста...';
      }
      if (this.$root.room.state === 1) {
        return 'Ожидание игроков...';
      }
      if (this.$root.room.state === 2) {
        return 'Ожидание начала игры...';
      }
      if (this.$root.isGameDraw) {
        return 'Игра закончена - Ничья';
      }
      if (this.$root.isGameLoss) {
        return `Игра закончена - "${this.loserPlayerName} проиграл"`;
      }
      if (this.$root.game.currentId === this.$root.game.attackerId) {
        if (this.$root.isGameTake) {
          return `"${this.defenderPlayerName}" решил взять. "${this.currentPlayerName}" может подкинуть...`;
        }
        if (this.$root.isGameDefenceShowcase) {
          return `"${this.defenderPlayerName}" отбился. "${this.currentPlayerName}" подтверждает...`;
        }
        return `"${this.currentPlayerName}" акаткует...`;
      }
      if (this.$root.game.currentId === this.$root.game.passerId) {
        if (this.$root.isGameTake) {
          return `"${this.defenderPlayerName}" решил взять. "${this.currentPlayerName}" тоже может подкинуть...`;
        }
        if (this.$root.isGameDefenceShowcase) {
          return `"${this.defenderPlayerName}" отбился. "${this.currentPlayerName}" подтверждает...`;
        }
        return `"${this.currentPlayerName}" помогает атаке...`;
      }

      if (this.$root.game.currentId === this.$root.game.defenderId) {
        return `"${this.currentPlayerName}" защищается...`;
      }

      return ' ';
    },
  },
};
</script>

<style module>
.container {
  height: 60px;
  padding: 5px;
  font-size: 26px;
  color: #008000;
}

.secondary {
  color: #828282;
  margin-top: 5px;
  font-size: 14px;
}
</style>
