<template>
  <main class="main">
    <TileContainer class="main__category-section" v-for="genre in genres" :genre="genre"/>
  </main>
</template>

<script setup lang="ts">
  import genres from '@constants/genres';
</script>

<style scoped lang="scss">
.main {
  height: 1000px;
  scroll-snap-type: y mandatory;
  scroll-snap-points-y: repeat(300px);

  &__category-section {
    margin-bottom: spacing(2);
    scroll-snap-align: start;
  }

}
</style>