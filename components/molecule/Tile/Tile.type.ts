// Not checked on null or undefined
export default interface TileType {
  id: Number,
  url: string,
  name: string,
  type: string,
  language: string,
  genres: string[],
  status: string,
  runtime: Number,
  averageRuntime: Number,
  premiered: string,
  ended: string,
  officialSite: string,
  schedule: { time: string, days: string[] },
  rating: { average: Number },
  weight: Number,
  network: any,
  webChannel?: string,
  dvdCountry?: string,
  externals: {
    tvrage: string,
    thetvdb: Number,
    imdb: string
  },
  image: {
    medium: string,
    original: string
  },
  summary: string,
  updated: Number,
  _links: {
    self: { href: string },
    previousepisode?: { href: string }
  }
}