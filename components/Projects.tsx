import Project from "./Project"
import propertyImage from "../public/assets/projects/property.jpg"

// Add array with projects and images

const Projects = () => {
    return (
        <div className="w-full" id="projects">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="text-xl tracking-widest uppercase text-violet-700">
                    Project
                </p>
                <h2 className="py-4">What I've Built</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <Project
                        title="Property Finder"
                        backgroundImg={propertyImage}
                        projectUrl="/property"
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects
