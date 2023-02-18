import ContactIcons from "./ContactIcons"

const Main = () => {
    return (
        <div className="w-full h-screen text-center" id="home">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <p className="uppercase text-sm tracking-widest text-gray-600">
                        Let&apos;s work together
                    </p>
                    <h1 className="py-4 text-gray-700">
                        Hi, I&apos;m
                        <span className="text-violet-700">Denis</span>
                    </h1>
                    <h1 className="py-4 text-gray-700">
                        A Front-End Web Developer
                    </h1>
                    <p className="py-4 text-gray-600 max-w-[70%] m-auto">
                        I am constantly developing on the web.
                        <br /> Using and learning new technologies.
                    </p>
                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                        <ContactIcons />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
