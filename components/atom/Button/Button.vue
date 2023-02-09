<template>
  <button :class="['btn', `btn--${color}`, `btn--${type}`]">
    <slot />
  </button>
</template>

<script setup lang="ts">
  type type = "pill";
  const { color } = defineProps<{ color?: string, type?: type }>();
</script>

<style scoped>
.btn {
  background-color: transparent;
  padding: 6px 16px;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: green;
}
</style>