<template>
  <div class="full" v-if="data">
    <img class="full__image" :src="data.image.original">
    <div class="full__intro">
      <Heading h1>{{ data.name }}</Heading>
      <Heading h2> - </Heading>
      <Heading h2 gray>{{ data.premiered.split("-")[0] }}</Heading>
    </div>
    <div class="full__stars">
      <Svg v-for="star in computedRating" :key="star" icon="star"></Svg>
      ({{ data.rating.average }} / 10)
    </div>

    <p v-html="data.summary"></p>
  </div>
</template>

<script setup lang="ts">
  import TileType from "@molecule/Tile/Tile.type"
  const {params: {id}} = useRoute()

  const { data } = await useFetch<TileType[]>(`https://api.tvmaze.com/shows/${id}`);
  const computedRating = computed(() => {
    return Math.round(unref(data).rating.average / 2);
  })

</script>

<style scoped lang="scss">
.full {
  margin-top: clamp-calc(spacing(1), spacing(4));

  &__intro {
    display: flex;
    align-items: center;
    gap: spacing(1);

    &__date {
      opacity: .5;
    }
  }
  &__stars {
    display: flex;
    gap: spacing(.5);
    align-items: center;
    color: gray;
    margin-bottom: clamp-calc(spacing(1), spacing(2));
    margin-bottom: clamp-calc(spacing(1), spacing(2));
  }

  &__image {
    width: 100%;
    aspect-ratio: 4/1;
    background: linear-gradient(to right bottom,  #666, #4b4b4b);
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: clamp-calc(spacing(1), spacing(4));

  }
}
</style>