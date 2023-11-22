'use client';

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function SearchBox() {
    const [search, setSearch] = useState<string>();

    const router = useRouter()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(!search) return;
        router.push(`/search/${search}`)
    }
    return (
        <form 
        action="" 
        className="flex justify-center items-center mt-4"
        onSubmit={(e) => handleSubmit(e)}>
            <input
            onSubmit={(e: React.FormEvent) => handleSubmit(e)}
            value={search}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)}
            type="text" 
            placeholder="Search keywords..."
            className="rounded-sm placeholder-shown:placeholder-amber-200 h-8 outline-none bg-transparent"
            />
            <button 
            type="submit" 
            className="text-amber-200 disabled:text-gray-600"
            disabled={!search && true}
            >
                Search
            </button>
        </form>
    )
}