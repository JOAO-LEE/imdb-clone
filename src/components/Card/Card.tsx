import { ICard } from "@/interfaces/IResult";
import Image from "next/image";
import Link from "next/link";
import { FaRegThumbsUp } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";

export default function Card({key, result}: ICard) {
    const baseImageUrl = "https://image.tmdb.org/t/p/original"
    return (
        <div 
        className="
        cursor-pointer 
        sm:p-3
        sm:hover:shadow-slate-400
        sm:shadow-md
        rounded-lg
        sm:border
        sm:border-slate-300
        sm:m-2
        transition-shadow
        duration-500
        group"
        >
            <Link href={`/movie/${result.id}`}>
                <Image 
                src={`${baseImageUrl}${result.backdrop_path || result.poster_path}`} 
                alt={`${result.title} image`} width={500} height={500} 
                style={{maxWidth: "100%", height: "auto"}}
                placeholder="blur"
                blurDataURL="/loading-spinner.svg"
                className="
                sm:rounded-t-lg
                group-hover:opacity-80
                transition-opacity
                duration-500"
                />
                <div className="p-2">
                    <h2 
                    title={`${!result.title ? result.original_name : result.title}`} 
                    className="text-lg
                    font-semibold
                    truncate
                    hover:scale-105
                    transition-transform
                    duration-200
                    delay-100
                    dark:hover:text-amber-400"
                    >
                        {!result.title ? result.original_name : result.title }
                    </h2>
                    <p
                    className="
                    line-clamp-2
                    text-md"
                    >
                        {result.overview}
                    </p>
                    <p
                    className="flex items-center cursor-default text-sm font-semibold
                    dark:text-amber-200"
                    >
                        {result?.release_date?.replaceAll("-", "/") || result?.first_air_date?.replaceAll("-", "/") }
                    <FaRegThumbsUp className="h-5 mr-1 ml-8"/>{result.vote_count} / 
                    <FaRegStar className="h-5 mr-1 ml-1" />{result.vote_average.toFixed(2)} 
                    </p>    
                </div>
            </Link>
        </div>
    )
}