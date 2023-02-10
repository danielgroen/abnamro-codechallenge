<template>
  <section class="tile-container">
  <Heading h2 white >{{ genre }}</Heading>

  <div class="tile-container__wrapper">
    <Tile class="tile-container__tile" v-for="item in dataPerGenreFiltered" :data="item" />
  </div>
  </section>
</template>

<script lang="ts" setup>

const props = defineProps<{ genre: string }>();
const { dataPerGenreFiltered } = await useTileContainer(props.genre);

</script>

<style scoped lang="scss">
.tile-container {
  margin-top: spacing(4);
  
  &__wrapper {
    display: flex;
    gap: spacing(2);
    overflow-x: scroll;
    overflow-y: hidden;
    margin-right: calc(#{clamp-calc(spacing(2), spacing(4))} * -1);
    position: relative;

    &::after {
      content: '';
      width: clamp-calc(spacing(2), spacing(6));
      background: linear-gradient(90deg, rgba($background-color,0) 0%, rgba($background-color,1) 100%); 
      position: fixed;
      right: 0;
      top: 0;
      height: 100%;
    }
  }

  &__tile {
    height: 330px;
    margin-top: spacing(1);
  }
}
</style>