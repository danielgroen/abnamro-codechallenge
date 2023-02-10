// import genres from '@constants/genres';
import TileType from '@molecule/Tile/Tile.type';

export const useTileContainer = async (genre: String) => {

  const { data } = await useFetch<TileType[]>('https://api.tvmaze.com/shows');

  const dataPerGenre = data.value?.filter((item: any) => item.genres?.includes(genre));

  return {
    dataPerGenre
  }
}
