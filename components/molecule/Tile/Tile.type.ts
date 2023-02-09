// Not checked on null or undefined
export default interface TileType {
  id: Number,
  url: String,
  name: String,
  type: String,
  language: String,
  genres: String[],
  status: String,
  runtime: Number,
  averageRuntime: Number,
  premiered: String,
  ended: String,
  officialSite: String,
  schedule: { time: String, days: String[] },
  rating: { average: Number },
  weight: Number,
  network: any,
  webChannel?: String,
  dvdCountry?: String,
  externals: {
    tvrage: String,
    thetvdb: Number,
    imdb: String
  },
  image: {
    medium: String,
    original: String
  },
  summary: String,
  updated: Number,
  _links: {
    self: { href: String },
    previousepisode?: { href: String }
  }
}