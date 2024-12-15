import React from 'react';
import { useParams } from 'react-router-dom';
import { useBlogPost } from '../hooks/blog';
import Header from '../components/header';
import { HeaderArticle } from '../components/blog-details-section/header-arttilcle';
import { ArticleBody } from '../components/blog-details-section/article-body';
import { RelatedArticlesSection } from '../components/blog-details-section/related-articles';
import { calculateReadTime } from '../utils/calculate-read-time';
import Projects from '../projects';
import SEO from '../components/SEO';

function BlogPostDetails() {
    const { slug } = useParams() as { slug: string };
    const { data, loading, error } = useBlogPost(slug);

    if (loading || !data.blogCollection.items.length) return <div>Loading...</div>;
    if (error) return <div>Error! {error.message}</div>;

    const {
        author,
        sys: { id },
        authorImage,
        date,
        tags,
        title,
        blogImage,
        summary,
        body: { json: content }
    } = data.blogCollection.items[0];

    const readTime = calculateReadTime(content);


    return (
        <>
            <SEO
                title={title}
                description={summary}
                keywords={tags.join(',')}
                image={blogImage.url}
                url={`https://e-rojas.io/blog/${slug}`}
                datePublished={new Date(date).toISOString().split('T')[0]}
            />
            <div className="max-w-4xl mx-auto px-4 py-8">
                {/* Page Content */}
                <Header />
                <HeaderArticle
                    title={title}
                    author={author}
                    authorImage={authorImage.url}
                    date={date}
                    readTime={readTime}
                />
                <ArticleBody
                    blogImage={blogImage}
                    summary={summary}
                    content={content}
                    tags={tags}
                />
                <Projects sysId={id as string} />
                <RelatedArticlesSection />
            </div>
        </>
    );
}

export default BlogPostDetails;
