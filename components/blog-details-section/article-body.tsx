import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { TagsSection } from "./tags-section";
import { Document } from '@contentful/rich-text-types';

import { RICHTEXT_OPTIONS } from "../rich-text-options";
import Image from "next/image";

export const BlogBody = ({ blogImage, summary, content, tags }: {
    blogImage: { url: string; description: string };
    summary: string;
    content: Document;
    tags: string[];
}) => (
    <>
        <div className="mb-8">
            <Image
                style={{ objectFit: 'cover', borderRadius: '0.5rem' }}
                src={blogImage.url}
                alt={blogImage.description}
                width={1200}
                height={1200}
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