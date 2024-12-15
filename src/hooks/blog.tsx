import { useQuery } from "@apollo/client";
import { BLOG_QUERY_CONTENT, BLOGS_QUERY } from "../queries";
import Blog, { BlogCollection, UseBlogPostResult, UseBlogsResult } from "../types/blog";
import SEO from "../components/SEO";



export function useBlogPosts(): UseBlogsResult {
  const { data, loading, error } = useQuery<{ blogCollection: BlogCollection }>(BLOGS_QUERY);

  // Extract unique tags
  const uniqueTags: Set<string> = new Set();
  if (data) {
    data.blogCollection.items.forEach((blog: Blog) => {
      blog.tags.forEach((tag) => uniqueTags.add(tag));
    });
  }

  // Generate SEO metadata for the blog listing page
  const seo = (
    <SEO
      title="E-Rojas Blog - All Posts"
      description="Browse all posts on web development, software engineering, and more."
      keywords="web development, software engineering, react, javascript"
      image="https://images.ctfassets.net/d502s68us4nn/3kmYZyqYM6yWqNmV7yXba4/8451e85360d6a1d735773daf25a0d3a1/Screenshot_2024-12-11_at_9.32.24_PM.png"
      url="https://e-rojas.io"
      datePublished={new Date().toISOString().split("T")[0]}
      author="Edgar Rojas"
    />
  );

  return {
    data: data || { blogCollection: { items: [] } },
    loading,
    error,
    uniqueTags: Array.from(uniqueTags),
    seo, // Add SEO component for the blog listing page
  };
}

export const useBlogPost = (slug: string): UseBlogPostResult => {
  const { data, loading, error } = useQuery<{
      blog: Blog;
      blogCollection: BlogCollection;
  }>(BLOG_QUERY_CONTENT, {
      variables: { slug },
  });

  const blog = data?.blogCollection?.items[0];

  return {
      data: data || { blog: {} as Blog, blogCollection: { items: [] } },
      loading,
      error,
      seo: blog ? (
          <SEO
              title={blog.title}
              description={blog.summary}
              keywords={blog.tags?.join(",")}
              image={blog.blogImage?.url}
              url={`https://e-rojas.io/post/${slug}`}
              datePublished={blog.date ? new Date(blog.date).toISOString().split("T")[0] : undefined}
              author={blog.author}
          />
      ) : null,
  };
};
