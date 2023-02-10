<template>
  <component v-if="icon" class="svg" :is="Icons[icon]"/>
</template>

<script setup lang="ts">
  // https://nuxt.com/docs/guide/directory-structure/composables
  import Icons from '@utils/icons.util';
  
  type availableIcons = "search";
  const { icon } = defineProps<{ icon: availableIcons }>();
</script>

<style scoped lang="scss">
.svg {
  width: 24px;
  height: 24px;
}

</style>