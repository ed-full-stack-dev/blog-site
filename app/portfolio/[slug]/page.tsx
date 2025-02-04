
import ProjectRenderer from "./ProjectRenderer";
import { generateProjectMetadata } from "@/utils/metadata";
export type PageProps = {
    params: Promise<{ slug: string }>;
}

export { generateProjectMetadata as generateMetadata };
export default async function PortfolioProjectPage({ params }: PageProps) {
    const { slug } = await params;
    return (
        <ProjectRenderer slug={slug} />
    )
}

