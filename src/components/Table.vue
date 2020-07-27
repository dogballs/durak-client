<template>
  <div :class="$style.container">
    <div :class="$style.stock">
      <TableStock />
    </div>
    <div :class="$style.field">
      <TableField />
    </div>
    <div :class="$style.discard">
      <TableDiscard />
    </div>
  </div>
</template>

<script>
import TableDiscard from './TableDiscard';
import TableField from './TableField';
import TableStock from './TableStock';

export default {
  components: {
    TableDiscard,
    TableField,
    TableStock,
  },
};
</script>

<style module>
.container {
  height: 400px;
  display: flex;
  background: green;
  border-radius: 20px;
}

.stock {
  flex: 0 0 200px;
  display: flex;
  align-items: center;
}

.field {
  flex: 1;
  display: flex;
}

.discard {
  flex: 0 0 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
