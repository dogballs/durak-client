<template>
  <div>
    <h3>Управление комнатой</h3>
    <div :class="$style.field">
      <button
        :class="$style.button"
        @click="startGame"
        :disabled="!$root.canStartGame"
      >
        Начать игру
      </button>
    </div>
    <div :class="$style.field">
      <button
        :class="[$style.button, $style.danger]"
        @click="stopGame"
        :disabled="!$root.canStopGame"
      >
        Остановить игру
      </button>
    </div>
    <div :class="$style.field">
      <button
        :class="$style.button"
        @click="endGame"
        :disabled="!$root.canEndGame"
      >
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

.button {
  border-radius: 4px;
  border: 2px solid #06a947;
  font-size: 16px;
  background: #fff;
  color: #06a947;
  padding: 3px 10px;
  cursor: pointer;
  outline: none;
}

.button:hover {
  border-color: #06bf50;
  color: #06bf50;
}

.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  color: #969696;
  border-color: #969696;
}

.button.danger {
  color: #ff6363;
  border-color: #ff6363;
}

.button.danger:hover {
  color: #ff9797;
  border-color: #ff9797;
}

.button.danger:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  color: #969696;
  border-color: #969696;
}
</style>
