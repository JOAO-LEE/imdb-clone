'use client';
import { FaSun } from 'react-icons/fa';
import { PiMoonStarsFill } from 'react-icons/pi';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true)
    }, []);
    // const currentTheme = theme === "system" ? systemTheme : theme;
    const currentTheme = theme === "light" ? "dark" : "light";

    return (
       <>
        { mounted && 
            (currentTheme === "light")
            ? 
            (<FaSun className="cursor-pointer text-xl hover:text-amber-500" onClick={() => setTheme(currentTheme)}/>) 
            : 
            (<PiMoonStarsFill className="cursor-pointer text-xl hover:text-amber-500" onClick={() => setTheme(currentTheme)} />)
        }
       </>
    )
}