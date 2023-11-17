import { baseImageUrl } from "@/components/Card/Card";
import { IMovie } from "@/interfaces/IMovie";
import Image from "next/image";

const API_KEY = process.env.API_KEY;

const getMovieById = async (movieId: number): Promise<IMovie | undefined> => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`);
    const result = await response.json();
    return result;
}

export default async function MoviePage({params: { id }}: { params: {id: number }}) {
    const movie = await getMovieById(id);
    return (
        // <main>
            <section className="w-full">
                <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
                {/* */}
                <Image  
                src={`${baseImageUrl}${movie?.backdrop_path || movie?.poster_path}`} 
                alt={`${movie?.title} image`} width={500} height={500} 
                style={{maxWidth: "100%", height: "100%"}}
                placeholder="blur"
                blurDataURL="/loading-spinner.svg"
                className="sm:rounded"
                />
                <div className="p-1">
                    <h1 className="font-bold text-2xl mb-1">{movie?.title || movie?.original_name}</h1> 
                    <h2 className="text-xl mb-2 underline underline-offset-4 decoration-2 dark:decoration-amber-400 rounded-lg">Overview</h2>
                    <p>{movie?.overview}</p>
                    <h2 className="text-xl mb-2 underline underline-offset-4 decoration-2 dark:decoration-amber-400 rounded-lg" >Released/First Aired - <p>{movie?.release_date?.replaceAll("-", "/") || movie?.first_air_date?.replaceAll("-", "/") }</p></h2>
                    

                </div>
                </div>
            </section>
        // </main>
    );
}
// Overview