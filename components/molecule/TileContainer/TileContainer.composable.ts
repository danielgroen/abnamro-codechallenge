// import genres from '@constants/genres';
import TileType from '@molecule/Tile/Tile.type';

export const useTileContainer = async (genre: String) => {

  const { data } = await useFetch<TileType[]>('https://api.tvmaze.com/shows');

  const dataPerGenre = unref(data)?.filter((item: any) => item.genres?.includes(genre)) || [];
  const dataPerGenreFiltered = unref(dataPerGenre).sort((a, b) => (a.rating.average < b.rating.average) ? 1 : -1);

  return {
    dataPerGenreFiltered
  }
}
