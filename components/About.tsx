import Link from "next/link"
import React from "react"

//TODO написать про себя

const About = () => {
    return (
        <div
            className="w-full md:h-screen px-2 flex items-center py-16"
            id="about"
        >
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="uppercase text-xl tracking-widest text-violet-700">
                        About
                    </p>
                    <p className="py-4">Who I Am</p>
                    <p className="py-2 text-gray-600">
                        // I am not your normal developer
                    </p>
                    <p className="py-2 text-gray-600">
                        I started web developement in 2013 managing multiple
                        e-commerce websites on CMS platforms such as WordPress,
                        BigCommerce, and Shopify. I have experience working
                        directly with clients and taking mock wireframes all the
                        way to deployed applications. In my spare time I run
                        Code Commerce, a Youtube channel where I teach web
                        developement and various front-end technologies.
                    </p>
                    <Link href="/#projects">
                        <p className="py-2 text-gray-600 underline cursor-pointer">
                            Check out some of my latest projects.
                        </p>
                    </Link>
                </div>
                <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 ease-in duration-300 hover:scale-105">
                    {/* IMAGE */}
                    <div />
                </div>
            </div>
        </div>
    )
}

export default About
