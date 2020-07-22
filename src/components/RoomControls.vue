<template>
  <div>
    <h3>Управление комнатой</h3>
    <div :class="$style.field">
      <button @click="startGame" :disabled="!$root.canStartGame">
        Начать игру
      </button>
    </div>
    <div :class="$style.field">
      <button @click="stopGame" :disabled="!$root.canStopGame">
        Остановить игру
      </button>
    </div>
    <div :class="$style.field">
      <button @click="endGame" :disabled="!$root.canEndGame">
        Продолжить игру
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    startGame() {
      this.$root.ws.send(JSON.stringify({ id: 'start' }));
    },
    stopGame() {
      this.$root.ws.send(JSON.stringify({ id: 'stop' }));
    },
    endGame() {
      this.$root.ws.send(JSON.stringify({ id: 'end' }));
    },
  },
};
</script>

<style module>
.field {
  margin-bottom: 10px;
}
</style>
