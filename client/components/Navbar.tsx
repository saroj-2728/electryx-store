'use client'
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "@/context/ThemeContext"
import { IoSearchSharp } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { BsMoonStars } from "react-icons/bs";

const Navbar = () => {
    const { theme, toggleTheme } = useTheme()
    return (
        <nav className="border-b border-b-brd-light dark:border-b-brd-dark w-full py-5 bg-background flex flex-row justify-between items-center px-14">
            <div className="logo">
                <Link
                    href={'/'}
                    className="image-container rounded-full">
                    <Image
                        src={theme === 'light' ? '/images/Essence.gif' : '/images/Essence_1.gif'}
                        width={50}
                        height={50}
                        alt="Image"
                        className="object-cover rounded-full"
                    >
                    </Image>
                </Link>
            </div>

            <div className="w-1/4 ">
                <div className="w-full relative">
                    <input
                        placeholder="Search in the store"
                        className="py-2 px-5 rounded-lg w-full border bg-back-light dark:bg-back-dark border-brd-light dark:border-brd-dark text-txt-light dark:text-txt-dark"
                        type="search"
                    />
                    <IoSearchSharp
                        className="absolute h-full w-5 px-2 box-content border-l border-l-brd-light dark:border-l-brd-dark cursor-pointer right-0 top-1/2 transform -translate-y-1/2 text-back-dark dark:text-back-light"
                    />
                </div>
            </div>

            <div className="flex flex-row gap-4 justify-around items-center">
                <div className="text-txt-light dark:text-txt-dark cursor-pointer hover:opacity-60 transition duration-300"> Become a Seller </div>
                <div className="text-txt-light dark:text-txt-dark cursor-pointer hover:opacity-60 transition duration-300"> Help and Support </div>
                <div className="text-txt-light dark:text-txt-dark cursor-pointer hover:opacity-60 transition duration-300"> Login </div>
                <div className="text-txt-light dark:text-txt-dark cursor-pointer hover:opacity-60 transition duration-300"> Sign up </div>
                <div className="flex items-center">
                    <button
                        className="text-back-dark dark:text-back-light hover:opacity-60 transition duration-300"
                        onClick={toggleTheme}
                    >
                        {theme === 'dark'
                            ? <IoSunnyOutline className="w-5 h-5" />
                            : <BsMoonStars className="w-5 h-5" />
                        }
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
