<template>
  <nuxt-link class="tile" :href="`/show/${data.id}`">
    <img v-if="hasImage" class="tile__img" :src="data.image.medium" :alt="data.name">
    <div v-else class="tile__img" />
    <Heading h3 white >{{ data.name }}</Heading>
  </nuxt-link>
</template>

<script setup lang="ts">
  import TileType from "./Tile.type"

  const { data } = defineProps<{ data: TileType }>();
  
  const hasImage = computed(() => !!data.image?.medium);

</script>

<style lang="scss" scoped>
  .tile {
    position: relative;
    user-select: none;
    transition: transform 0.2s ease-in-out;

    &__img {
      width: 210px;
      height: 295px;
      background: linear-gradient(to right bottom,  #666, #4b4b4b);
      font-size: 0;
    }

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