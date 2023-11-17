interface IResults {
    release_date: string
    id: number
    title: string
    adult: boolean
    backdrop_path: string
    original_name: string
    original_language: string
    overview: string
    poster_path: string
    media_type: string
    genre_ids: Array<number>
    popularity: number
    first_air_date: string
    vote_average: number
    vote_count: number
    origin_country: Array<string>
}

interface ICard {
    key: number
    result: IResults
}

export type { IResults, ICard };