'use client';
import { FaSun } from 'react-icons/fa';
import { PiMoonStarsFill } from 'react-icons/pi';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeSwitch() {
    const [isMounted, setIsMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setIsMounted(true)
    }, []);

    const currentTheme = theme === "light" ? "dark" : "light";

    return (
       <>
        { isMounted && 
            (currentTheme === "light")
            ? 
            (<FaSun className="cursor-pointer text-xl hover:text-amber-500" onClick={() => setTheme(currentTheme)}/>) 
            : 
            (<PiMoonStarsFill className="cursor-pointer text-xl hover:text-amber-500" onClick={() => setTheme(currentTheme)} />)
        }
       </>
    )
}