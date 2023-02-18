import Link from "next/link"
import { useState, useEffect } from "react"
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai"
import { FaTelegramPlane, FaVk, FaGithub } from "react-icons/fa"
import cls from "classnames"
import { useRouter } from "next/router"

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    const [navBg, setNavBg] = useState("bg-[#ecf0f3]")
    const [linkColor, setLickColor] = useState("text-[#1f2937]")

    const router = useRouter()

    useEffect(() => {
        if (router.asPath === "/property") {
            setNavBg("transparent")
            setLickColor("text-[#ecf0f3]")
        } else {
            setNavBg("bg-[#ecf0f3]")
            setLickColor("text-[#1f2937]")
        }
    }, [router])

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        }

        window.addEventListener("scroll", handleShadow)

        return () => {
            window.removeEventListener("scroll", handleShadow)
        }
    }, [])

    return (
        <div
            className={cls(
                "fixed w-full h-20 z-[100]",
                shadow && "shadow-xl",
                navBg
            )}
        >
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 ">
                <Link href="/">
                    <div className="text-violet-700 text-4xl italic font-bold w-32">
                        DB
                    </div>
                </Link>
                <div>
                    <ul className={cls("hidden md:flex", linkColor)}>
                        <li className="ml-10 text-sm uppercase hover:border-b hover:border-violet-400">
                            <Link href="/#home">Home</Link>
                        </li>
                        <li className="ml-10 text-sm uppercase hover:border-b hover:border-violet-400">
                            <Link href="/#about">About</Link>
                        </li>
                        <li className="ml-10 text-sm uppercase hover:border-b hover:border-violet-400">
                            <Link href="/#skills">Skills</Link>
                        </li>
                        <li className="ml-10 text-sm uppercase hover:border-b hover:border-violet-400">
                            <Link href="/#projects">Projects</Link>
                        </li>
                        <li className="ml-10 text-sm uppercase hover:border-b hover:border-violet-400">
                            <Link href="/#contact">Contact</Link>
                        </li>
                    </ul>
                    <div onClick={handleNav} className="md:hidden">
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>
            <div
                className={cls({
                    "md:hidden fixed left-0 top-0 w-full h-screen bg-black/60":
                        nav,
                })}
            >
                <div
                    className={
                        nav
                            ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] lg:w-[30%] bg-[#ecf0f3] p-10 ease-in duration-500 h-full"
                            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
                    }
                >
                    <div className="flex w-full items-center justify-between">
                        <Link href="/">
                            <div className="text-violet-700 text-2xl italic font-bold">
                                DB
                            </div>
                        </Link>
                        <div
                            onClick={handleNav}
                            className="rounded-full shadow-xl shadow-gray-400 p-3 cursor-pointer"
                        >
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className="border-b border-gray-300 my-4">
                        <p className="w-[85%] md:w-[90%] py-4">
                            Let's build something legendary together
                        </p>
                    </div>
                    <div className="py-4 flex flex-col">
                        <ul className="uppercase">
                            <Link href="/#home">
                                <li
                                    onClick={handleNav}
                                    className="py-4 text-sm"
                                >
                                    Home
                                </li>
                            </Link>
                            <Link href="/#about">
                                <li
                                    onClick={handleNav}
                                    className="py-4 text-sm"
                                >
                                    About
                                </li>
                            </Link>
                            <Link href="/#skills">
                                <li
                                    onClick={handleNav}
                                    className="py-4 text-sm"
                                >
                                    Skills
                                </li>
                            </Link>
                            <Link href="/#projects">
                                <li
                                    onClick={handleNav}
                                    className="py-4 text-sm"
                                >
                                    Projects
                                </li>
                            </Link>
                            <Link href="/#contact">
                                <li
                                    onClick={handleNav}
                                    className="py-4 text-sm"
                                >
                                    Contact
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div className="pt-40">
                        <p className="uppercase tracking-widest text-violet-700">
                            Let's Connect
                        </p>
                        <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ease-in duration-300 hover:scale-105">
                                <FaTelegramPlane />
                            </div>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ease-in duration-300 hover:scale-105">
                                <FaVk />
                            </div>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ease-in duration-300 hover:scale-105">
                                <AiOutlineMail />
                            </div>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ease-in duration-300 hover:scale-105">
                                <FaGithub />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
