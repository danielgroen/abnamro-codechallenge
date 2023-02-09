<template>
  <component :is="text">
    <slot />
  </component>
</template>

<script setup>
  import attrsToInstance from '@utils/attrsToInstance.util';
  const { text } = attrsToInstance();
</script>