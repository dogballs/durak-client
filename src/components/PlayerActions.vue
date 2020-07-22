<template>
  <div :class="$style.container">
    <button :class="$style.button" @click="take" v-if="canTake">Взять</button>
    <button :class="$style.button" @click="pass" v-if="canPass">
      Пропустить
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    canTake() {
      return (
        this.$root.isRoomPlaying &&
        this.$root.isPlayerDefender &&
        this.$root.isPlayerCurrent &&
        this.$root.game.round.attackCards.length > 0
      );
    },
    canPass() {
      return (
        this.$root.isRoomPlaying &&
        this.$root.isPlayerPasser &&
        this.$root.isPlayerCurrent &&
        this.$root.game.round.attackCards.length > 0
      );
    },
  },
  methods: {
    take() {
      this.$root.ws.send(JSON.stringify({ id: 'take' }));
    },
    pass() {
      this.$root.ws.send(JSON.stringify({ id: 'pass' }));
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
  padding: 15px;
}

.button {
  padding: 15px 19px;
  border: 4px solid #f39406;
  border-radius: 10px;
  font-size: 20px;
  background: #fff1aa;
  cursor: pointer;
  outline: none;
}

.button:hover {
  background: #f7e06e;
}
</style>
