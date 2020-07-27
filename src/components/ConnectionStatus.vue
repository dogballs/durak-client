<template>
  <div :class="$style.container">
    <div v-if="$root.isConnectionInitiating">
      Подключение...
    </div>
    <div v-if="$root.isConnectionFailed">
      Не удалось подключиться к игре
      <br />
      <span :class="$style.subtitle">
        Попробуйте перезагрузить страницу или связаться с организатором игры
      </span>
    </div>
    <div v-if="$root.isConnectionFailed">
      <button :class="$style.button" @click="goHome">
        Вернуться на главную страницу
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push({ name: 'home' });
    },
  },
};
</script>

<style module>
.container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 30px;
  text-align: center;
  margin-top: 30px;
}

.subtitle {
  font-size: 18px;
}

.button {
  border-radius: 4px;
  border: 3px solid #06a947;
  font-size: 20px;
  background: #fff;
  color: #06a947;
  padding: 10px;
  cursor: pointer;
  margin-top: 50px;
  outline: none;
}

.button:hover {
  border-color: #06bf50;
  color: #06bf50;
}
</style>
