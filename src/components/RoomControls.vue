<template>
  <div>
    <h3>Управление комнатой</h3>
    <div :class="$style.field">
      <Button @click="startGame" :disabled="!$root.canStartGame">
        Начать игру
      </Button>
    </div>
    <div :class="$style.field">
      <Button kind="danger" @click="stopGame" :disabled="!$root.canStopGame">
        Остановить игру
      </Button>
    </div>
    <div :class="$style.field">
      <Button @click="endGame" :disabled="!$root.canEndGame">
        Продолжить игру
      </Button>
    </div>
  </div>
</template>

<script>
import Button from './Button';

export default {
  components: {
    Button,
  },

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
