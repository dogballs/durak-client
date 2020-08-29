<template>
  <div :class="$style.container">
    <PlayerInfo :class="$style.section" />
    <PlayerList :class="$style.section" />
    <RoomControls :class="$style.section" v-if="$root.isPlayerHost" />
    <RoomLog />
  </div>
</template>

<script>
import RoomControls from './RoomControls';
import PlayerInfo from './PlayerInfo';
import PlayerList from './PlayerList';
import RoomLog from './RoomLog';

export default {
  components: {
    RoomControls,
    PlayerInfo,
    PlayerList,
    RoomLog,
  },
};
</script>

<style module>
.container {
  margin-left: 10px;
  flex: 0 0 300px;
  border-left: 1px solid #ccc;
  padding-left: 20px;
}

.section {
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}
</style>
