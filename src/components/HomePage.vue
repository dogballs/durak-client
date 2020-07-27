<template>
  <div :class="$style.container">
    <div :class="$style.subtitle">Карточная игра</div>
    <div :class="$style.title">ДУРАК</div>
    <div :class="$style.description">
      Играть онлайн без регистрации, просто поделитесь ссылкой на игру с другом
    </div>
    <button :class="$style.button" @click="createRoom" :disabled="isCreating">
      {{ isCreating ? 'Создание...' : 'Создать игру' }}
    </button>
    <div :class="$style.error" v-if="hasError">
      Ошибка при создании игры
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCreating: false,
      error: null,
    };
  },

  computed: {
    hasError() {
      return this.error !== null;
    },
  },

  methods: {
    async createRoom() {
      if (this.isCreating) {
        return;
      }

      this.error = null;
      this.isCreating = true;

      const url = `${process.env.API_BASE_URL}/room`;
      try {
        const response = await fetch(url, {
          method: 'POST',
        });
        const json = await response.json();
        this.$router.push(`/room/${json.roomId}`);
      } catch (err) {
        this.error = err;
        this.isCreating = false;
      }
    },
  },
};
</script>

<style module>
.container {
  padding: 30px;
}

.title {
  font-size: 80px;
  font-weight: bold;
}

.subtitle {
  font-size: 24px;
}

.description {
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
}

.button {
  border-radius: 6px;
  border: 4px solid #06a947;
  font-size: 30px;
  background: #fff;
  color: #06a947;
  padding: 16px;
  cursor: pointer;
  margin-top: 50px;
  outline: none;
  width: 225px;
}

.button:hover {
  border-color: #06bf50;
  color: #06bf50;
}

.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  color: #969696;
  border-color: #969696;
}

.error {
  margin-top: 20px;
  color: #ff6363;
  font-size: 18px;
}
</style>
