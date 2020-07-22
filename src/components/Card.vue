<template>
  <div
    :class="{
      [$style.card]: true,
      [$style.red]: isRed,
      [$style.shadow]: shadow,
    }"
    v-html="symbol"
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
    isRed() {
      return this.card.suite === 2 || this.card.suite === 3;
    },
    symbol() {
      if (!this.card) {
        return '?';
      }

      // https://en.wikipedia.org/wiki/Playing_cards_in_Unicode
      const suiteMap = {
        1: 'D',
        2: 'C',
        3: 'B',
        4: 'A',
      };

      const rankMap = {
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: 'A',
        11: 'B',
        12: 'D',
        13: 'E',
        14: '1',
      };

      let codeStr = '&#x1F0';
      codeStr += suiteMap[this.card.suite];
      codeStr += rankMap[this.card.rank];

      return codeStr;
    },
  },
};
</script>

<style module>
.card {
  background: #fff;
  display: inline-block;
  font-size: 80px;
}

.shadow {
  box-shadow: -4px -3px 8px 0px #714747;
}

.red {
  color: red;
}
</style>
