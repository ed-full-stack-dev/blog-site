"use client"; // ApolloProvider must be in a Client Component
import React from "react";
import AllBlogsSection from "@/components/all-blogs-section";
import BlogCategories from "@/components/blog-categories";
import FeaturedPostsSection from "@/components/featured-posts-section";
import { useBlogPosts } from "@/hooks/blog";

import Loader from "@/components/loader"; // Import the Loader component

const BlogOverview: React.FC = () => {
    const { data, loading, error, uniqueTags } = useBlogPosts();

    if (error) return <div>Error! {error.message}</div>;

    const { items } = data?.blogCollection || {};
    console.log('LOADING', loading);

    return (
        <>
            <Loader  timer={2000} >
                <div className="min-h-screen mx-auto max-w-[1600px] flex">
                    <div className="flex-grow grid grid-cols-12">
                        <section className="col-span-12">
                            <main>
                                <BlogCategories uniqueTags={uniqueTags} />
                                <FeaturedPostsSection posts={items?.slice(0, 7)} />
                                <AllBlogsSection posts={items} />
                            </main>
                        </section>
                    </div>
                </div>
            </Loader>
        </>
    );
};

export default BlogOverview;
