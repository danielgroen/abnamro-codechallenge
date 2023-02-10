<template>
  <header class="header">
    <nuxt-link to="/"><Heading h1 primary-color >Videoflix</Heading></nuxt-link>
    <Svg @click="toggleSearch" class="header__search" :icon="isSearchIcon"></Svg>
  </header>
  
  <SearchContainer v-if="isSearching" class="header__search__bar"></SearchContainer>
  <slot v-else />
</template>

<script setup lang="ts">
  const { isSearching, toggleSearch } = useSearchContainer();

  const isSearchIcon = computed(() =>  isSearching.value ? 'close' : 'search');
</script>

<style scoped lang="scss">
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    position: relative;

    &__search {
      cursor: pointer;
    }
  }
</style>