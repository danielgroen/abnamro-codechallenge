<template>
  <component v-if="icon" :class="['svg', `svg--${color}`]" :is="Icons[icon]"/>
</template>

<script setup lang="ts">
  // https://nuxt.com/docs/guide/directory-structure/composables
  import Icons from '@utils/icons.util';
  
  type availableIcons = "search";
  type availableFill = "white" | "primary";
  const { icon, color } = defineProps<{ icon: availableIcons, color: availableFill }>();
</script>

<style scoped lang="scss">
.svg {
  width: 24px;
  height: 24px;
}
.svg--white {
  fill: white;
}
.svg--primary {
  fill: $color-primary;
}
</style>