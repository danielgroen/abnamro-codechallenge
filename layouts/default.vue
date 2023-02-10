<template>
  <header class="header">
    <nuxt-link to="/">
      <Heading h1 primary-color >Videoflix</Heading>
    </nuxt-link>
    <Svg class="header__search" icon="search"></Svg>
  </header>

  <slot />

</template>

<style scoped lang="scss">
  .header {
    display: flex;
    justify-content: space-between;
    padding-right: spacing(4);
    padding-right: clamp-calc(spacing(2), spacing(4));

    align-items: center;

    &__search {
      cursor: pointer;
    }
  }
</style>