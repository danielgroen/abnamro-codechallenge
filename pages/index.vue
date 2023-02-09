<template>
  <TileContainer class="category-section" v-for="genre in genres" :genre="genre"/>
</template>

<script setup lang="ts">
  import genres from '@constants/genres';
</script>

<style scoped lang="scss">
.category-section {
  margin-bottom: spacing(2);
}
</style>