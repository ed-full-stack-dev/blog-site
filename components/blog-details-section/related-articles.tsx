import Link from 'next/link';


interface RelatedArticlesProps {
    currentSlug: string;
    allBlogTitles: {
        title: string;
        slug: string;
    }[];
}

const RelatedArticles: React.FC<RelatedArticlesProps> = ({ currentSlug, allBlogTitles }) => {

    const currentIndex = allBlogTitles.findIndex(article => article.slug === currentSlug);

    const previousArticle = currentIndex > 0 ? allBlogTitles[currentIndex - 1] : null;
    const nextArticle = currentIndex < allBlogTitles.length - 1 ? allBlogTitles[currentIndex + 1] : null;



    return (
        <div className="related-articles flex flex-col space-y-2 md:space-y-0 md:flex-row md:justify-between mt-8">
            {previousArticle && (
                <Link href={`/blog/${previousArticle.slug}`}

                    className="previous-article bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                    Previous: {previousArticle.title}
                </Link>
            )}
            {nextArticle && (
                <Link href={`/blog/${nextArticle.slug}`}

                    className="next-article bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                    Next: {nextArticle.title}
                </Link>
            )}
        </div>
    );
};

export default RelatedArticles;