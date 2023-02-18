import Skill from "./Skill"

const Skills = () => {
    const skills = [
        { name: "HTML", link: "html" },
        { name: "CSS", link: "css" },
        { name: "TypeScript", link: "typescript" },
        { name: "Vue", link: "vue" },
        { name: "React", link: "react" },
        { name: "Redux", link: "redux" },
        { name: "Nexs.js", link: "nextjs" },
        { name: "Docker", link: "docker" },
        { name: "Jest", link: "jest" },
        { name: "Apollo", link: "apollo" },
        { name: "Tailwind", link: "tailwind" },
        { name: "Storybook", link: "storybook" },
    ]
    return (
        <div className="w-full lg:h-screen p-2" id="skills">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
                <p className="text-xl tracking-widest uppercase text-violet-700">
                    Skills
                </p>
                <h2 className="py-4">What I Can Do</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map(({ name, link }) => {
                        return <Skill name={name} link={link} key={name} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Skills
