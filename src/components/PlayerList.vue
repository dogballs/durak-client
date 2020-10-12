<template>
  <div>
    <h3>Участники</h3>
    <ul>
      <li
        :class="{
          [$style.item]: true,
          [$style.current]: player.id === $root.game.currentId,
        }"
        v-for="(player, index) in $root.room.players"
      >
        <Dropdown title="" v-if="$root.isPlayerHost">
          <DropdownItem
            @click="moveUp(player.id)"
            :disabled="!$root.isGameIdle || index === 0"
          >
            Поменять местами с пред.
          </DropdownItem>
          <DropdownItem
            @click="moveDown(player.id)"
            :disabled="
              !$root.isGameIdle || index === $root.room.players.length - 1
            "
          >
            Поменять местами со след.
          </DropdownItem>
        </Dropdown>
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
import Button from './Button';
import Dropdown from './Dropdown';
import DropdownItem from './DropdownItem';
import PlayerRole from './PlayerRole';

export default {
  components: {
    Button,
    Dropdown,
    DropdownItem,
    PlayerRole,
  },

  methods: {
    moveUp(playerId) {
      this.$root.ws.send(JSON.stringify({ id: 'playerMoveUp', playerId }));
    },

    moveDown(playerId) {
      this.$root.ws.send(JSON.stringify({ id: 'playerMoveDown', playerId }));
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
