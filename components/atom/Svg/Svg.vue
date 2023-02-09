<template>
  <component v-if="icon" :class="['svg', `svg--${color}`]" :is="Icons[icon]"/>
</template>

<script setup lang="ts">
  // https://nuxt.com/docs/guide/directory-structure/composables
  import Icons from '@utils/icons.util';
  
  type availableIcons = "star" | "starFilled" | "cart";
  type availableFill = "white" | "green";
  const { icon, color } = defineProps<{ icon: availableIcons, color: availableFill }>();
</script>

<style scoped>
.svg {
  width: 24px;
  height: 24px;
}
.svg--white {
  fill: white;
}
.svg--green {
  fill: green;
}
</style>