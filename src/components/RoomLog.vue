<template>
  <div>
    <h3>Room Log</h3>
    <div :class="$style.message" v-for="message in $root.messages">
      - {{ message }}
    </div>
  </div>
</template>

<style module>
.message {
  color: #777;
  font-size: 12px;
}
</style>
