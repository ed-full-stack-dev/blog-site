import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleBody } from '../components/blog-details-section/article-body';
import { HeaderArticle } from '../components/blog-details-section/header-arttilcle';
import { RelatedArticlesSection } from '../components/blog-details-section/related-articles';
import Header from '../components/header';
import SEO from '../components/SEO';
import { useBlogPost } from '../hooks/blog';
import Projects from '../projects';
import { calculateReadTime } from '../utils/calculate-read-time';


function BlogPostDetails() {
    const { slug } = useParams() as { slug: string };
    const { data, loading, error } = useBlogPost(slug);

    const blogItems = data?.blogCollection?.items || [];
    const blog = blogItems[0];
    const content = blog?.body?.json;

    const tags = useMemo(() => blog?.tags || [], [blog]);

    const readTime = useMemo(() => calculateReadTime(content), [content]);
    const keywords = useMemo(() => tags.join(','), [tags]);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="loader"></div>
                <p>Loading blog post...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center text-red-500">
                <h2>Error Loading Blog</h2>
                <p>{error.message}</p>
            </div>
        );
    }

    if (!blogItems.length) return <div>No blog post found.</div>;

    const {
        author,
        sys: { id },
        authorImage,
        date,
        title,
        blogImage,
        summary,
    } = blog;

    return (
        <>
            <SEO
                title={title}
                description={summary}
                keywords={keywords}
                image={blogImage?.url}
                url={`https://e-rojas.io/blog/${slug}`}
                datePublished={new Date(date).toISOString().split('T')[0]}
            />
            <div className="max-w-4xl mx-auto px-4 py-8">
                <Header />
                <HeaderArticle
                    title={title}
                    author={author}
                    authorImage={authorImage?.url}
                    date={date}
                    readTime={readTime}
                />
                <ArticleBody
                    blogImage={blogImage}
                    summary={summary}
                    content={content}
                    tags={tags}
                />
                <Projects sysId={id} />
                <React.Suspense fallback={<div>Loading related articles...</div>}>
                    <RelatedArticlesSection />
                </React.Suspense>
            </div>
        </>
    );
}

export default BlogPostDetails;