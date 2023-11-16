'use client';
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function BarItem({ title, param }: { title: string, param: string }) {
    const searchParams  = useSearchParams();
    const genre = searchParams.get("genre");

    const textHighlightedStyles = genre && (genre === param) && "underline underline-offset-8 decoration-4 decoration-amber-400 rounded-lg"
    return (
        <>
            <Link href={`/?genre=${param}`} className={`${textHighlightedStyles} m-4 p-1 font-semibold dark:hover:text-amber-300 transition-colors duration-500`}><p>{title}</p></Link>
        </>
    )
}