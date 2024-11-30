import React from 'react';
import { RICHTEXT_OPTIONS } from '../utils/rich-text-options';
import { useParams } from 'react-router-dom';
import { useBlogContent } from '../hooks/blog';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function BlogPostDetails() {
    const { slug } = useParams() as { slug: string };
    const { data, loading, error } = useBlogContent(slug);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error! {error.message}</div>;

    const {
        author,
        authorImage,
        date,
        tags,
        title,
        blogImage,
        summary,
        body: { json: content }
    } = data.blogCollection.items[0];

    // Function to calculate read time
    const calculateReadTime = (content: any) => {
        const plainText = content.content
            .map((node: any) => node.content.map((childNode: any) => childNode.value).join(' '))
            .join(' ');
        const wordCount = plainText.split(/\s+/).length;
        const readTime = Math.ceil(wordCount / 200); // Assuming average reading speed of 200 words per minute
        return readTime;
    };

    const readTime = calculateReadTime(content);

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            {/* Blog Header Section */}
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">{title}</h1>
                <div className="flex items-center space-x-4">
                    <img
                        src={authorImage.url}
                        alt="Author"
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <p className="text-sm font-medium text-gray-700">By {author}</p>
                        <p className="text-xs text-gray-500">Published on {
                            new Date(date).toLocaleDateString()
                        } • {readTime} min read</p>
                    </div>
                </div>
            </header>

            {/* Blog Image */}
            <div className="mb-8">
                <img
                    src={blogImage.url}
                    alt={blogImage.description}
                    className="w-full rounded-md shadow-md"
                />
            </div>

            {/* Blog Summary */}
            <article className="prose lg:prose-lg max-w-none mb-8">
                <p className=' text-xl'>{summary}</p>
            </article>

            {/* Blog Content Section */}
            <article className="prose lg:prose-lg max-w-none mb-8">
                {documentToReactComponents(content, RICHTEXT_OPTIONS)}
            </article>

            {/* Tags Section */}
            <section className="mb-8">
                <h4 className="font-semibold text-gray-800 mb-2">Tags:</h4>
                <div className="flex space-x-2">
                    {[...tags].map((tag) => (
                        <span
                            key={tag}
                            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </section>

            {/* Related Articles Section */}
            <section>
                <h4 className="text-xl font-bold text-gray-800 mb-4">Related Articles</h4>
                <ul className="list-none space-y-4">
                    {['Introduction to React', 'Advanced State Management with Hooks', 'Handling Side Effects in React'].map((title, index) => (
                        <li key={index} className="border-b pb-2">
                            <a href="#d" className="text-blue-500 hover:underline">{title}</a>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}

export default BlogPostDetails;