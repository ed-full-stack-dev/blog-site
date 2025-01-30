import ProjectCard from "@/components/ProjectCard";
import Search from "@/components/search";
import { Project } from "@/types/project";

interface ProjectListProps {
    projects: Project[] | undefined;
}
function ProjectList({ projects }: ProjectListProps) {
    return (
        <>
            <section className="flex mt-10 mb-5">
                <Search placeholder="Search Portfolio" onSearch={() => { }} />
            </section>
            <hr />
            <main className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-11 gap-x-5 py-8 px-5'>
                {projects && projects.map((project: Project) => (
                    <ProjectCard imgHeight='h-96' key={project.slug} project={project} />
                ))}
            </main>
        </>
    );
}

export default ProjectList;