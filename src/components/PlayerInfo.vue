<template>
  <div>
    <h3>Игрок</h3>
    <PlayerAvatar :class="$style.avatar" :id="$root.player.id" />
    <div :class="$style.name">
      <strong>
        {{ $root.player.name }} (<PlayerRole :role="$root.player.role" />)
      </strong>
    </div>
    <div>
      Проигрышей: <span :class="$style.loss">{{ $root.player.lossCount }}</span>
    </div>
    <div :class="$style.sortContainer">
      Сортировать карты:
      <div v-for="option in sortOptions">
        <input
          type="radio"
          name="hand-sort"
          v-model="$root.handSort"
          :value="option.value"
          :class="$style.radio"
        />
        {{ option.title }}
      </div>
    </div>
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

  data() {
    return {
      sortOptions: [
        {
          title: 'без сортировки',
          value: 0,
        },
        {
          title: 'по масти (б/к/ч/п), козыри в начале',
          value: 1,
        },
        {
          title: 'по масти (б/к/ч/п), козыри в конце',
          value: 2,
        },
      ],
    };
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

.loss {
  color: #ff6363;
}

.radio {
  vertical-align: middle;
  margin-top: -2px;
}

.sortContainer {
  margin-top: 10px;
}
</style>
