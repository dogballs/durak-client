<template>
  <div>
    <h3>Room Log</h3>
    <div :class="$style.message" v-for="message in messages">
      - {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
    };
  },

  mounted() {
    this.$root.ws.addEventListener('message', (ev) => {
      let message = null;
      try {
        message = JSON.parse(ev.data);
      } catch (err) {
        // Ignore parse error
      }
      if (message === null) {
        return;
      }

      if (message.id === 'log') {
        this.messages.push(message.message);
      }
    });
  },
};
</script>

<style module>
.message {
  color: #777;
  font-size: 12px;
}
</style>
