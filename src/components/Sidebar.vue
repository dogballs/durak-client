<template>
  <div :class="$style.container">
    <RoomControls v-if="$root.isPlayerHost" />
    <PlayerList />
    <RoomLog />
  </div>
</template>

<script>
import RoomControls from './RoomControls';
import PlayerList from './PlayerList';
import RoomLog from './RoomLog';

export default {
  components: {
    RoomControls,
    PlayerList,
    RoomLog,
  },
};
</script>

<style module>
.container {
  margin-left: 30px;
  flex: 0 0 300px;
}
</style>
