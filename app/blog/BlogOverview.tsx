"use client";
import React from "react";
import { useBlogPosts } from "@/hooks/blog";
import Loader from "@/components/loader";
import BlogList from "./BlogList";
import Show from "@/components/Show";

const BlogOverview: React.FC = () => {
    const { data, loading, error, uniqueTags } = useBlogPosts();
    const { items } = data?.blogCollection || {};

    return (
            <Loader timer={2000} >
                <div className="min-h-screen mx-auto max-w-[1600px] flex">
                    <Show when={!loading} fallback={<div>Loading...</div>}>
                        <Show when={!error} fallback={<div>Error Loading!</div>}>
                            <BlogList uniqueTags={uniqueTags} posts={items} />
                        </Show>
                    </Show>
                </div>
            </Loader>
    );
};

export default BlogOverview;