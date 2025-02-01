import ReactMarkdown from "react-markdown";
import SharedCard from "./shared-card";
import { Project } from "@/types/project";

interface ProjectCardProps {
    project: Project;
    imgHeight?: 'none' | 'h-48' | 'h-74' | 'h-96';
    isFeatured?: boolean;
    hasImage?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
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
            linkPrefix="portfolio"
        />
    );
};


export default ProjectCard;