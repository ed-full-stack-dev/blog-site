"use client";

import React, { useMemo } from "react";
import { useBlogPost } from "@/hooks/blog";
import { calculateReadTime } from "@/utils/calculate-read-time";
import { BlogHeader } from "./blog-details-section/header-arttilcle";
import { BlogBody } from "./blog-details-section/article-body";
import RelatedArticles from "./blog-details-section/related-articles";
import Loader from "./loader";

interface BlogContentProps {
  slug: string;
}

export default function BlogContent({ slug }: BlogContentProps) {
  const { data, loading, error } = useBlogPost(slug);
  const blog = data?.blogCollection?.items[0];
  const readTime = useMemo(() => blog?.body?.json && calculateReadTime(blog.body.json), [blog]);

  if (loading) {
    return <p className="text-gray-500">Loading blog...</p>;
  }

  if (error) {
    return (
      <p className="text-red-500">
        Error fetching blog: {error.message}
      </p>
    );
  }


  if (!blog) {
    return <p className="text-gray-500">Blog not found!</p>;
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
    <Loader timer={500}>
      <main key={id} className="max-w-4xl mx-auto px-4 py-8">
        <BlogHeader
          title={title}
          author={author}
          authorImage={authorImage?.url}
          date={new Date(date).toISOString()}
          readTime={readTime}
        />
        <BlogBody
          blogImage={blogImage}
          summary={summary}
          content={content}
          tags={tags}
        />
        <RelatedArticles currentSlug={slug} allBlogTitles={data?.allBlogTitles?.items} />
      </main>
    </Loader>
  );
}
