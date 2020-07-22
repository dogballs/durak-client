<template>
  <div :class="$style.container">
    <span v-if="$root.isConnectionInitiating">
      Подключение...
    </span>
    <span v-if="$root.isConnectionFailed">
      Не удалось подключиться
      <br />Попробуйте перезагрузить страницу или связаться с хостом комнаты
    </span>
  </div>
</template>

<style module>
.container {
  flex: 1;
  display: flex;
  justify-content: center;
  padding-top: 100px;
  font-size: 30px;
  text-align: center;
}
</style>
