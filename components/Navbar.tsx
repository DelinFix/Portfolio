import Link from "next/link"
import { useState } from "react"
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai"
import { FaTelegramPlane, FaVk, FaGithub } from "react-icons/fa"

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className="fixed w-full h-20 shadow-xl z-[100]">
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 ">
                <div className="text-violet-700 text-4xl italic font-bold w-32">
                    DB
                </div>
                <div>
                    <ul className="hidden md:flex">
                        <li className="ml-10 text-sm uppercase hover:border-b hover:border-violet-400">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="ml-10 text-sm uppercase hover:border-b hover:border-violet-400">
                            <Link href="/">About</Link>
                        </li>
                        <li className="ml-10 text-sm uppercase hover:border-b hover:border-violet-400">
                            <Link href="/">Skills</Link>
                        </li>
                        <li className="ml-10 text-sm uppercase hover:border-b hover:border-violet-400">
                            <Link href="/">Projects</Link>
                        </li>
                        <li className="ml-10 text-sm uppercase hover:border-b hover:border-violet-400">
                            <Link href="/">Contact</Link>
                        </li>
                    </ul>
                    <div onClick={handleNav} className="md:hidden">
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>
            <div
                className={
                    nav
                        ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/60"
                        : ""
                }
            >
                <div
                    className={
                        nav
                            ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] lg:w-[30%] bg-[#ecf0f3] p-10 ease-in duration-500"
                            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
                    }
                >
                    <div className="flex w-full items-center justify-between">
                        <div className="text-violet-700 text-2xl italic font-bold">
                            DB
                        </div>
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
                            <Link href="/">
                                <li className="py-4 text-sm">Home</li>
                            </Link>
                            <Link href="/">
                                <li className="py-4 text-sm">About</li>
                            </Link>
                            <Link href="/">
                                <li className="py-4 text-sm">Skills</li>
                            </Link>
                            <Link href="/">
                                <li className="py-4 text-sm">Projects</li>
                            </Link>
                            <Link href="/">
                                <li className="py-4 text-sm">Contact</li>
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
