import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useBlogPost } from '../hooks/blog';
import Header from '../components/header';
import { HeaderArticle } from '../components/blog-details-section/header-arttilcle';
import { ArticleBody } from '../components/blog-details-section/article-body';
import { RelatedArticlesSection } from '../components/blog-details-section/related-articles';
import { calculateReadTime } from '../utils/calculate-read-time';
import Projects from '../projects';


function BlogPostDetails() {
    const { slug } = useParams() as { slug: string };
    const { data, loading, error, seo } = useBlogPost(slug);

    const blogItems = data?.blogCollection?.items || [];
    const blog = blogItems[0];

    const readTime = useMemo(() => blog?.body?.json && calculateReadTime(blog.body.json), [blog]);



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

    if (!blogItems.length) {
        return <div>No blog post found.</div>;
    }

    const {
        author,
        sys: { id },
        authorImage,
        date,
        tags,
        title,
        blogImage,
        summary,
        body: { json: content },
    } = blog;

    return (
        <>
        {seo}
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
