export default interface IResults {
    id: number
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

// adult: false,
//     backdrop_path: '/5OQEDTtB32RAjzyT1Q28TdPUtyM.jpg',
//     id: 155421,
//     backdrop_path: 'All the Light We Cannot See',
//     original_language: 'en',
//     original_name: 'All the Light We Cannot See',
//     overview: 'The story of Marie-Laure, a blind teenager, and Werner, a German soldier, whose paths collide in occupied France as both try to survive the devastation of World War II.',
//     poster_path: '/5vctOvdEXakZWTJrP8bgPEoCbqS.jpg',
//     media_type: 'tv',
//     genre_ids: [ 18 ],
//     popularity: 145.913,
//     first_air_date: '2023-11-02',
//     vote_average: 7.619,
//     vote_count: 80,
//     origin_country: [ 'US' ]