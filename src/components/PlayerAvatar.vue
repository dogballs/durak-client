<template>
  <div :class="[$style.avatar, imageClassName]"></div>
</template>

<script>
const IMAGE_CLASS_NAMES = [
  'avatar-asia',
  'avatar-carpenter',
  'avatar-nerd-glasses',
  'avatar-female',
  'avatar-uncle',
  'avatar-jason',
  'avatar-pirate',
  'avatar-woman',
  'avatar-user',
  'avatar-diver',
];

export default {
  props: {
    id: Number,
  },
  computed: {
    imageClassName() {
      const roomIndex = this.$root.room.players.findIndex(
        (player) => player.id === this.id,
      );
      const imageName = IMAGE_CLASS_NAMES[roomIndex];
      return imageName;
    },
  },
};
</script>

<style module>
.avatar {
  background-size: contain;
  height: 90px;
  width: 90px;
}
</style>
