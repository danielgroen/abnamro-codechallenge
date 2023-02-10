<template>
  <div class="search-container" >
    <input ref="searchEl" placeholder="Search..." @input="catchData()" v-model="searchInput" v-focus class="search-container__input" type="search" name="search" id="">
    <div class="search-container__wrapper" >
      <Tile v-for="{show} in searchItemResults" @click="toggleSearch()" :key="show.id" :data="show" />
      <div v-if="showNotfoundMessage" >Couldn't find your movie... Try again!</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import TileType from '@molecule/Tile/Tile.type';
  const { toggleSearch } = useSearchContainer();

  const searchEl = ref();
  const searchInput = ref('');

  const showNotfoundMessage = computed(() =>  unref(searchInput).length > 2 && unref(searchItemResults).length === 0);
  const searchItemResults = ref<TileType | []>([]);

  
  const catchData = async () => {
    const { data } = await useLazyFetch<TileType[] | []>(`https://api.tvmaze.com/search/shows?q=${ unref(searchInput) }`);

    if (unref(searchInput).length > 2) {
      searchItemResults.value = unref(data);
    }
  }

  onMounted(() => {
    unref(searchEl).focus();
  });



</script>

<style scoped lang="scss">
.search-container {
  display: flex;
  margin-top: spacing(4);
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;

  &__input {
    background-color: $white;
    border: none;
    padding: spacing(.5);
    margin-bottom: spacing(4);
    font-size: 1.5rem;
    font-family: inherit;
  }

  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: spacing(.5) spacing(1);
  }
}
</style>