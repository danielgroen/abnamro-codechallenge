<template>
  <component :class="['heading', colors]" :is="headings">
    <slot />
  </component>
</template>

<script>
  export default { inheritAttrs: false };
</script>

<script setup>
  import attrsToInstance from '@utils/attrsToInstance.util';

  const { headings, colors } = attrsToInstance();
  
</script>

<style scoped lang="scss">
  .heading {
    font-family: $secondary-font;
  }

  h1 {
    font-size: 3rem; // Don't mind this ugly styling
  }

  h2 {
    font-size: 2rem; // Don't mind this ugly styling
  }
</style>