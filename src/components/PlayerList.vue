<template>
  <div>
    <h3>Участники</h3>
    <ul>
      <li
        :class="{
          [$style.item]: true,
          [$style.current]: player.id === $root.game.currentId,
        }"
        v-for="player in $root.room.players"
      >
        {{ player.name }} ({{ displayRole(player) }})
        <span v-if="player.id === $root.game.attackerId">&#9876;</span>
        <span v-if="player.id === $root.game.defenderId">&#128737;</span>
        -
        <span :class="$style.loss">{{ player.lossCount }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    displayRole(player) {
      switch (player.role) {
        case 0:
          return 'Хост';
        case 1:
          return 'Игрок';
        case 2:
          return 'Наблюдатель';
      }
    },
  },
};
</script>

<style module>
.item {
  height: 25px;
}

.current {
  color: #21ab2c;
}

.loss {
  color: #ff6363;
}
</style>
