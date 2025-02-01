import AllBlogsSection from "@/components/all-blogs-section";
import BlogCategories from "@/components/blog-categories";
import FeaturedPostsSection from "@/components/featured-posts-section";
import Blog from "@/types/blog";

interface BlogListProps {
    uniqueTags: string[];
    posts: Blog[];
}

function BlogList({ uniqueTags, posts }: BlogListProps) {
    return (
        <div className="flex-grow grid grid-cols-12">
            <main className="col-span-12">
                <>
                    <BlogCategories uniqueTags={uniqueTags} />
                    <FeaturedPostsSection posts={posts?.slice(0, 7)} />
                    <AllBlogsSection posts={posts} />
                </>
            </main>
        </div>
    )
}

export default BlogList;