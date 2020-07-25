<template>
  <div :class="$style.container">
    <h1>Дурак</h1>
    <button @click="createRoom" :disable="isCreating">Создать комнату</button>
    <div>
      {{ error }}
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

  methods: {
    async createRoom() {
      if (this.isCreating) {
        return;
      }

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
</style>
