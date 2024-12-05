import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { TagsSection } from "./tags-section";
import { RICHTEXT_OPTIONS } from "../../utils/rich-text-options";

export const ArticleBody = ({ blogImage, summary, content, tags }: any) => (
    <>
        <div className="mb-8">
            <img
                src={blogImage.url}
                alt={blogImage.description}
                className="w-full rounded-md shadow-md"
            />
        </div>
        <article className="prose lg:prose-lg max-w-none mb-8">
            <p className='text-xl'>{summary}</p>
        </article>
        <article className="prose lg:prose-lg max-w-none mb-8">
            {documentToReactComponents(content, RICHTEXT_OPTIONS)}
        </article>
        <TagsSection tags={tags} />
    </>
);