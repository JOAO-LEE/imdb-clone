import Link from "next/link";
import NavLink from "../Nav/NavLink";
import { AiFillHome } from 'react-icons/ai';
import { LuInfo } from 'react-icons/lu';

export default function Header()  {
    return (
        <header className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
             <nav>
                <ul className="flex">
                <NavLink title="Home" address="/" Icon={AiFillHome}/>
                <NavLink title="About" address="/about" Icon={LuInfo}/>
                </ul>
            </nav>
            <div>
                <Link href="/">
                    <h2 className="text-2xl">
                        <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg">IMDb</span>
                        <span className="text-xl hidden sm:inline ml-1">Clone</span>
                    </h2>
                </Link>
            </div>
        </header>
    );
};