<template>
  <div :class="$style.container">
    <div :class="$style.attack">
      <Card
        v-for="attackCard in $root.game.round.attackCards"
        :class="$style.card"
        :card="attackCard"
        :key="`${attackCard.suite}-${attackCard.rank}`"
      />
      <div :class="$style.defence">
        <Card
          v-for="defenceCard in $root.game.round.defenceCards"
          :class="$style.card"
          :card="defenceCard"
          :key="`${defenceCard.suite}-${defenceCard.rank}`"
          :shadow="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from './Card';

export default {
  components: {
    Card,
  },
};
</script>

<style module>
.container {
  flex: 1;
  display: flex;
}

.attack {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  padding: 20px 0 0 0;
  align-items: self-start;
}

.card {
  margin-right: 72px;
}

.defence {
  position: absolute;
  display: flex;
  top: 30px;
  bottom: 0;
  left: 40px;
  right: -40px;
  flex-wrap: wrap;
  align-items: self-start;
}
</style>
