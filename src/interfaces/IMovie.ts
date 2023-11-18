import { IResults } from "./IResult"

interface IGenre {
    id: number
    name: string
}

interface IProdCompany {
    id: number
    name: string
    logo_path: string
    origin_country: string
}

interface ISpokenLang {
    english_name: string 
    name: string
    iso_639_1: string
}

interface IMovie extends IResults {
    genres: Array<IGenre>
    budget: number
    production_companies: Array<IProdCompany>
    belongs_to_collection: string
    homepage: string
    spoken_languages: Array<ISpokenLang>
    revenue: number
    runtime: number
    imdb_id: string
    video: boolean
    tagline: string
    status: string
    duration: number
}

export type { IMovie };