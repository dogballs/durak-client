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
        {{ player.name }} (<PlayerRole :role="player.role" />)
        <span v-if="player.id === $root.game.attackerId">[атк]</span>
        <span v-if="player.id === $root.game.defenderId">[защ]</span>
        -
        <span :class="$style.loss">{{ player.lossCount }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import PlayerRole from './PlayerRole';

export default {
  components: {
    PlayerRole,
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
