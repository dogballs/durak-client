<template>
  <div>
    <h3>Игрок</h3>
    <PlayerAvatar :class="$style.avatar" :id="$root.player.id" />
    <div :class="$style.name">
      <strong>
        {{ $root.player.name }} (<PlayerRole :role="$root.player.role" />)
      </strong>
    </div>
    <div>Проигрышей: {{ $root.player.lossCount }}</div>
  </div>
</template>

<script>
import PlayerAvatar from './PlayerAvatar';
import PlayerRole from './PlayerRole';

export default {
  components: {
    PlayerAvatar,
    PlayerRole,
  },
};
</script>

<style module>
.avatar {
  width: 60px;
  height: 60px;
}

.name {
  margin-top: 10px;
}
</style>
