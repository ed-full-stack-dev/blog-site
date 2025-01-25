"use client";
import React from 'react'
import Header from '../../components/header'
import Search from '../../components/search'
import { useProjects } from '@/hooks/blog';
import SharedCard from '../../components/shared-card';
import { Project } from '../../types/project';
import ReactMarkdown from 'react-markdown';
function Portfolio() {
    const { data, loading, error } = useProjects();
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error! {error.message}</div>;
    const projects = data?.projectsCollection.items;
    console.log(projects);
    return (
        <div>
            <Header />
            <div className='max-w-[1200px] m-auto'>
                <div className="flex  mt-10 mb-5">
                    <Search placeholder="Search Portfolio" onSearch={() => { }} />
                </div>
                <hr />
                {/* Projects */}
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-11 gap-x-5 py-8 px-5'>
                    {
                        projects && projects.map((project: Project) => (
                            <ProjectCard imgHeight='h-96' key={project.slug} project={project} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Portfolio


interface ProjectCardProps {
    project: Project;
    imgHeight?: 'none' | 'h-48' | 'h-74' | 'h-96';
    isFeatured?: boolean;
    hasImage?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = (props) => {
    const { project, imgHeight, isFeatured, hasImage } = props;
    const { slug, title, description, imagesCollection, languages } = project;

    return (
        <SharedCard
            title={title}
            slug={slug}
            description={<ReactMarkdown>{description}</ReactMarkdown>}
            image={imagesCollection.items[0]}
            extras={languages}
            imgHeight={imgHeight}
            isFeatured={isFeatured}
            hasImage={hasImage}
            linkPrefix="project"
        />
    );
};
