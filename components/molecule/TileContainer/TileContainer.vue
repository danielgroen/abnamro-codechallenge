<template>
  <section class="tile-container">
  <Heading h2 white >{{ genre }}</Heading>

  <div class="tile-container__wrapper">
    <Tile class="tile-container__tile" v-for="item in dataPerGenre" :data="item" />
  </div>
  </section>
</template>

<script lang="ts" setup>
import { useTileContainer } from './TileContainer.composable';

const props = defineProps<{ genre: string }>();
const { dataPerGenre } = await useTileContainer(props.genre);

</script>

<style scoped lang="scss">
.tile-container {
  margin-top: spacing(4);
  overflow-x: scroll;
  overflow-y: hidden;

  &__wrapper {
    display: flex;
    // flex-wrap: wrap;
    gap: spacing(2);
  }

  &__tile {
    height: 330px;
    margin-top: spacing(1);
  }
}
</style>