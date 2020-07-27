<template>
  <div :class="$style.app">
    <ConnectionStatus v-if="!$root.isConnectionCompleted" />
    <div v-if="$root.isConnectionCompleted">
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
  </div>
</template>

<script>
import ConnectionStatus from './ConnectionStatus';
import EnemyList from './EnemyList';
import Header from './Header';
import PlayerActions from './PlayerActions';
import PlayerHand from './PlayerHand';
import PlayerHint from './PlayerHint';
import Sidebar from './Sidebar';
import Table from './Table';

export default {
  components: {
    ConnectionStatus,
    EnemyList,
    Header,
    PlayerActions,
    PlayerHand,
    PlayerHint,
    Sidebar,
    Table,
  },
  mounted() {
    this.$root.connect();
  },
};
</script>

<style module>
.app {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 10px 20px;
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
