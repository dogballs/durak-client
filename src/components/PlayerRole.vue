<template>
  <span>{{ displayRole }}</span>
</template>

<script>
export default {
  props: {
    role: Number,
  },
  computed: {
    displayRole() {
      switch (this.role) {
        case 0:
          return 'Хост';
        case 1:
          return 'Игрок';
        case 2:
          return 'Наблюдатель';
      }
      return 'Неизвестно';
    },
  },
};
</script>
