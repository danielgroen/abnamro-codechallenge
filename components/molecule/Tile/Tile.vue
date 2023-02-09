<template>
  <nuxt-link class="tile" :href="`/show/${data.id}`">
    <img class="tile__img" :src="data.image.medium" :alt="data.name">
    <Heading h3 white >{{ data.name }}</Heading>
  </nuxt-link>
</template>

<script setup lang="ts">
  import TileType from "./Tile.type"

  const { data } = defineProps<{ data: TileType }>();

</script>

<style lang="scss" scoped>
  .tile {
    position: relative;
    user-select: none;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }

    @media (pointer:none), (pointer:coarse) {
      &:hover {
        transform: none;
      }
    }
  }
</style>