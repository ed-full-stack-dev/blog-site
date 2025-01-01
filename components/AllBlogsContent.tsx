"use client"; // ApolloProvider must be in a Client Component
import React from 'react';
import AllBlogsSection from "@/components/all-blogs-section";
import BlogCategories from "@/components/blog-categories";
import FeaturedPostsSection from "@/components/featured-posts-section";
import { useBlogPosts } from "@/hooks/blog";

const AllBlogsContent: React.FC = () => {
    const { data, loading, error, uniqueTags } = useBlogPosts();
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error! {error.message}</div>;
    const { items } = data.blogCollection;

    return (
        <div className="min-h-screen mx-auto max-w-[1600px] bg-gray-50">
            <main>
                <BlogCategories uniqueTags={uniqueTags} />
                <FeaturedPostsSection posts={items.slice(0, 7)} />
                <AllBlogsSection posts={items} />
            </main>
            {/* <Footer /> */}
        </div>
    );
};

export default AllBlogsContent;