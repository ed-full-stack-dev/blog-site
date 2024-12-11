import { useQuery } from "@apollo/client";
import { BLOG_QUERY_CONTENT, BLOGS_QUERY } from "../queries";
import Blog, { BlogCollection, UseBlogPostResult, UseBlogsResult } from "../types/blog";



export function useBlogPosts():UseBlogsResult {
  const { data, loading, error } = useQuery<{blogCollection: BlogCollection}>(BLOGS_QUERY);
  const uniqueTags: Set<string> = new Set();
  if (data) {
      data.blogCollection.items.forEach((blog: Blog) => {
          blog.tags.forEach((tag) => uniqueTags.add(tag));
      });

  }
  return {
    data: data || { blogCollection: { items: [] } },
    loading,
    error,
    uniqueTags: Array.from(uniqueTags),
  };
};

export const useBlogPost = (
    slug: string,
  ): UseBlogPostResult => {
    const { data, loading, error } = useQuery<{blog: Blog;
      blogCollection: BlogCollection;}>(BLOG_QUERY_CONTENT, {
      variables: { slug },
    });
  
    return { data: data || { blog: {} as Blog, blogCollection: { items: [] } }
      , loading, error };
  };
