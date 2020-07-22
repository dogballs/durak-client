<template>
  <div :class="$style.container">
    {{ text }}
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
      return loserPlayer.id;
    },
    defenderPlayerName() {
      const currentPlayer = this.$root.room.players.find(
        (player) => player.id === this.$root.game.defenderId,
      );
      if (!currentPlayer) {
        return 'Игрок';
      }
      return currentPlayer.id;
    },
    currentPlayerName() {
      const currentPlayer = this.$root.room.players.find(
        (player) => player.id === this.$root.game.currentId,
      );
      if (!currentPlayer) {
        return 'Игрок';
      }
      return currentPlayer.id;
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
        if (this.$root.game.state === 2) {
          return `"${this.defenderPlayerName}" решил взять. "${this.currentPlayerName}" может подкинуть...`;
        }
        return `"${this.currentPlayerName}" акаткует...`;
      }
      if (this.$root.game.currentId === this.$root.game.passerId) {
        if (this.$root.game.state === 2) {
          return `"${this.defenderPlayerName}" решил взять. "${this.currentPlayerName}" тоже может подкинуть...`;
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
  height: 40px;
  padding: 5px;
  font-size: 26px;
  color: #ad04d8;
}
</style>
