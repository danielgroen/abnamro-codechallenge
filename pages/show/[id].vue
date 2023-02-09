<template>
  <div>{{ data }}</div>
</template>

<script setup lang="ts">
  import TileType from "@molecule/Tile/Tile.type"

  const {params: {id}} = useRoute()
  const { data } = await useFetch<TileType[]>(`https://api.tvmaze.com/shows/${id}`);

</script>
