import { baseImageUrl } from "@/components/Card/Card";
import { IMovie } from "@/interfaces/IMovie";
import Image from "next/image";
import { FaRegThumbsUp, FaRegStar } from "react-icons/fa";
import { BsCameraReelsFill } from "react-icons/bs";
import { LuTimer } from "react-icons/lu";

const API_KEY = process.env.API_KEY;

const getMovieById = async (movieId: number): Promise<IMovie | undefined> => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`, { next: { revalidate: 10000 } });
    const result = await response.json();
    return result;
}

export default async function MoviePage({params: { id }}: { params: {id: number }}) {
    const movie = await getMovieById(id);
    console.log(movie)
    return (
        <main className="w-full">
            <section className="w-full">
                <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
                    <Image
                    title={`${movie?.title} cover image`}  
                    src={`${baseImageUrl}${movie?.backdrop_path || movie?.poster_path}`} 
                    alt={`${movie?.title} image`} 
                    width={500} 
                    height={500} 
                    style={{maxWidth: "100%", height: "100%"}}
                    placeholder="blur"
                    blurDataURL="/loading-spinner.svg"
                    className="sm:rounded"
                    />
                    <div className="p-2">
                        <h1 className="font-extrabold text-2xl">{movie?.title || movie?.original_name}</h1> 
                        {movie?.tagline && <em className="text-sm font-light dark:text-amber-300">"{movie?.tagline}"</em>}
                        <h2 className="font-semibold text-xl  underline underline-offset-4 decoration-2 decoration-amber-400 rounded-lg">Overview</h2>
                        <p>{movie?.overview}</p>
                        <div className="flex flex-row justify-between py-2">
                            <div className="flex flex-col">
                                <div className="flex items-center space-x-1">
                                    <h2 className="font-semibold text-sm mb-1 underline underline-offset-4 decoration-2 decoration-amber-400 rounded-lg">Duration:</h2> 
                                    <p className="font-normal dark:text-amber-200">{movie?.runtime && (movie?.runtime / 60).toFixed(2)}h</p>
                                    <LuTimer className="text-lg dark:text-amber-400"/>
                            </div>
                                <div className="flex space-x-2">
                                    <h2 className="font-semibold text-sm mb-1 underline underline-offset-4 decoration-2 decoration-amber-400 rounded-lg">Rating</h2>
                                    <p className="text-sm flex items-center"><FaRegThumbsUp className="text-sm dark:text-amber-300 mr-1"/>{movie?.vote_count} | <FaRegStar className="text-sm dark:text-amber-300 ml-1 mr-1"/>{movie?.vote_average?.toFixed(2)}</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-end py-1">
                            {movie?.genres &&
                                <div className="flex flex-col items-end">
                                    <h2 className="font-semibold text-sm mb-1 underline underline-offset-4 decoration-2 decoration-amber-400 rounded-lg">Genre(s)</h2>
                                    <div className="flex flex-col">
                                        <ul className="flex items-center">
                                            {movie?.genres.map((genre, index) => (<li key={genre.id} className="text-sm ml-1">{genre.name}{movie?.genres[index] === movie?.genres.at(-1) ? null : " - "}</li>))}
                                        </ul>
                                    </div>
                                </div>
                            }
                                <h2 className="font-semibold text-sm mb-1 underline underline-offset-4 decoration-2 decoration-amber-400 rounded-lg">Released/First Aired</h2>
                                <p className="text-sm">{movie?.release_date?.replaceAll("-", "/") || movie?.first_air_date?.replaceAll("-", "/")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full">
                
            </section>
        </main>
    );
}