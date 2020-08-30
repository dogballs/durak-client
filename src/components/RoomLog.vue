<template>
  <div>
    <h3>Журнал</h3>
    <div :class="$style.list">
      <div :class="$style.message" v-for="message in $root.messages">
        - {{ message }}
      </div>
    </div>
  </div>
</template>

<style module>
.message {
  color: #777;
  font-size: 12px;
}

.list {
  max-height: 200px;
  overflow-y: auto;
}
</style>
