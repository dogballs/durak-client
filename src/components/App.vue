<template>
  <div :class="$style.app">
    <PlayerHint />
    <div :class="$style.content">
      <div :class="$style.main">
        <EnemyList />
        <Table />
        <PlayerHand :class="$style.hand" v-if="$root.isRoomPlaying" />
        <PlayerActions :class="$style.actions" v-if="$root.isRoomPlaying" />
      </div>
      <Sidebar />
    </div>
  </div>
</template>

<script>
import EnemyList from './EnemyList';
import Header from './Header';
import PlayerActions from './PlayerActions';
import PlayerHand from './PlayerHand';
import PlayerHint from './PlayerHint';
import Sidebar from './Sidebar';
import Table from './Table';

export default {
  components: {
    EnemyList,
    Header,
    PlayerActions,
    PlayerHand,
    PlayerHint,
    Sidebar,
    Table,
  },
};
</script>

<style module>
.app {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px;
}

.main {
  flex: 0 0 850px;
}

.content {
  flex: 1;
  display: flex;
}

.actions {
  margin-top: 10px;
}

.hand {
  margin-top: 20px;
}
</style>
