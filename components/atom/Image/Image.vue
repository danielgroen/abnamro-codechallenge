<template>
  <div v-bind="$attrs" v-if="!isImgLoaded" >SkeletonLoader ;-)</div>
  <img v-bind="$attrs" v-show="isImgLoaded" class="img" :src="src" @load="onImgLoad" :alt="alt"/>
</template>

<script setup lang="ts">
  const { src, alt } = defineProps<{ src: string, alt?: string }>();
  
  const isImgLoaded = ref(false);
  const onImgLoad = () => { isImgLoaded.value = true }
</script>

<style scoped>
.img {
  width: 44px;
  height: 44px;
  object-fit: contain;
}
</style>