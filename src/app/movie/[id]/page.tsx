const API_KEY = process.env.API_KEY;

const getMovieById = async (movieId: number) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`);
    const result = await response.json();
    return result;
}


export default async function MoviePage(id: number) {
    const movie = await getMovieById(id)
    return (
        <div>{movie.}</div>
    );
}