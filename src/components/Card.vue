<template>
  <div
    :class="{
      [$style.card]: true,
      [rankClass]: true,
      [suiteClass]: true,
      [$style.shadow]: true,
    }"
  ></div>
</template>

<script>
export default {
  props: {
    card: Object,
    shadow: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    rankClass() {
      return 'card-rank-' + this.card.rank;
    },
    suiteClass() {
      return 'card-suite-' + this.card.suite;
    },
  },
};
</script>
<style module>
.card {
  background-image: url('../assets/images/cards.png');
  display: inline-block;
  width: 90px;
  height: 134px;
  border-radius: 8px;
}

.shadow {
  box-shadow: 1px 1px 4px 1px #777777;
  /*box-shadow: 0px 1px 0px 11px #ff3b3b;*/
}
</style>
