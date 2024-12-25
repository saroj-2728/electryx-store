'use client'
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "@/context/ThemeContext"
import { IoSearchSharp } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { BsMoonStars } from "react-icons/bs";
import { useState, useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {

    const { data: session } = useSession()
    const { theme, toggleTheme } = useTheme()

    const [popupVisible, setPopupVisible] = useState<boolean>(false)

    const popupRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popupRef.current && event.target instanceof Node) {
                if (!popupRef.current.contains(event.target)) {
                    setPopupVisible(false);
                }
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const togglePopup = () => setPopupVisible((prev) => !prev)

    const handleSignOut = async () => {
        await signOut()
    }

    return (
        <nav className="sticky top-0 z-[51] bg-back-light dark:bg-back-dark border-b border-b-brd-light dark:border-b-brd-dark w-full  bg-background flex flex-row justify-between items-center px-14 py-0.5 text-sm">
            <div className="logo">
                <Link
                    href={'/'}
                    className="image-container">
                    <Image
                        src={theme === 'dark' ? '/images/logo_dark.png' : '/images/logo_light.png'}
                        priority
                        width={60}
                        height={60}
                        alt="Image"
                        className="object-cover rounded-lg"
                    >
                    </Image>
                </Link>
            </div>

            <div className="w-1/4 ">
                <div className="w-full relative">
                    <input
                        name="search"
                        placeholder="Search in the store"
                        className="py-1.5 px-5 font-allertaStencil rounded-lg w-full border-2 bg-back-light dark:bg-back-dark border-brd-light dark:border-brd-dark focus:border-btn-bg dark:focus:border-btn-dark-bg focus:outline-none"
                        type="search"
                    />
                    <IoSearchSharp
                        className="absolute h-full w-5 px-2 box-content border-l border-l-brd-light dark:border-l-brd-dark cursor-pointer right-0 top-1/2 transform -translate-y-1/2"
                    />
                </div>
            </div>

            <div className="flex flex-row gap-4 justify-around items-center">

                {session &&
                    <Link
                        href={'/my-cart'}
                        className="cursor-pointer hover:opacity-60 transition duration-300">
                        My cart
                    </Link>
                }

                {!(session?.user?.role === 'seller') &&
                    <Link
                        href={'/seller/sign-in'}
                        className="cursor-pointer hover:opacity-60 transition duration-300"> Become a Seller </Link>
                }
                <div className="cursor-pointer hover:opacity-60 transition duration-300"> Help and Support </div>

                {!session &&
                    <>
                        <Link
                            href={'/user/sign-in'}
                            className="cursor-pointer hover:opacity-60 transition duration-300">
                            Sign in
                        </Link>

                        <Link
                            href={'/user/sign-up'}
                            className="cursor-pointer hover:opacity-60 transition duration-300">
                            Sign up
                        </Link>
                    </>
                }

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

                {session &&
                    <div className="relative">
                        <button
                            onClick={togglePopup}
                            ref={buttonRef}
                            className="profile">
                            <div className="image h-8 w-8 rounded-full border border-brd-light dark:border-brd-dark  box-content cursor-pointer">
                                <Image
                                    src={session?.user?.image || '/images/defaultProfile.jpg'}
                                    width={200}
                                    height={200}
                                    alt="Profile"
                                    className="rounded-full"
                                />
                            </div>

                        </button>

                        {popupVisible &&
                            <div
                                ref={popupRef}
                                className="popup absolute right-3 top-full flex flex-col items-center justify-center w-80 border border-brd-light dark:border-brd-dark rounded-lg bg-back-light dark:bg-back-dark shadow-light-card py-0.5 animate-in slide-in-from-top-7 duration-200"
                            >
                                <div className="absolute top-0.5 right-0.5">
                                    <IoMdClose
                                        onClick={togglePopup}
                                        className="w-5 h-5 cursor-pointer rounded-full hover:bg-hvr-light dark:hover:bg-hvr-dark p-2 box-content transition duration-300"
                                    />
                                </div>

                                <div className="py-3 mt-4 w-full flex items-center justify-center flex-col">
                                    <p>{session?.user?.email}</p>
                                    <Link
                                        onClick={togglePopup}
                                        href={'/user/profile?tab=editprofile'}
                                        className="image relative py-3 h-20 w-20 rounded-full box-content hover:opacity-80 transition duration-300 cursor-pointer">
                                        <Image
                                            src={session?.user?.image || '/images/defaultProfile.jpg'}
                                            width={200}
                                            height={200}
                                            alt="Profile"
                                            className="rounded-full group-hover:opacity-80"
                                        />
                                        <MdOutlineEdit
                                            className="absolute bottom-3 border border-brd-light dark:border-brd-dark right-1 p-1 box-content w-4 h-4 bg-back-light  dark:bg-back-dark rounded-full"
                                        />
                                    </Link>
                                    <p className="font-allertaStencil">Hi, {session?.user?.name || "User"}</p>
                                </div>

                                <div
                                    onClick={togglePopup}
                                    className="w-full flex flex-col justify-center items-center cursor-pointer">
                                    <Link
                                        href={'/user/profile'}
                                        className="text-center py-2.5 border-y border-brd-light dark:border-brd-dark w-full hover:bg-hvr-light dark:hover:bg-hvr-dark transition duration-300 hover:opacity-60">
                                        My account
                                    </Link>

                                    <Link
                                        href={'/user/profile?tab=orders'}
                                        className="text-center py-2.5 border-b border-brd-light dark:border-brd-dark w-full hover:bg-hvr-light dark:hover:bg-hvr-dark transition duration-300 hover:opacity-60">
                                        My orders
                                    </Link>

                                    <div
                                        onClick={handleSignOut}
                                        className="text-center py-2.5 w-full hover:bg-hvr-light dark:hover:bg-hvr-dark transition duration-300l hover:opacity-60">
                                        Sign out
                                    </div>
                                </div>

                            </div>
                        }
                    </div>
                }
            </div>
        </nav>
    )
}

export default Navbar