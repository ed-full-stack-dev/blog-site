import { useQuery } from "@apollo/client";
import client from "@/lib/apollo-client";
import { BLOG_QUERY_CONTENT, BLOGS_QUERY, PROJECT_QUERY_CONTENT, PROJECTS_QUERY } from "@/queries";
import Blog, { BlogCollection, UseBlogPostResult, UseBlogsResult } from "@/types/blog";
import { Project, ProjectsCollection } from "@/types/project";


export async function fetchProject(slug: string): Promise<Project | undefined> {

  try {
    const result = await client.query<{ projectsCollection: { items: Project[] } }>({
      query: PROJECT_QUERY_CONTENT,
      variables: { slug }
    })
    const project = result?.data?.projectsCollection?.items?.[0];
    return project
  } catch (error) {
    console.log('Error fetching the project!', error);
    return undefined;
  }
}

export async function fetchBlogPost(slug: string): Promise<Blog | undefined> {
  try {
    const result = await client.query<{ blogCollection: { items: Blog[] } }>({
      query: BLOG_QUERY_CONTENT,
      variables: { slug },
    });


    // Ensure the response structure matches your expectations
    const blog = result?.data?.blogCollection?.items?.[0];

    return blog;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return undefined; // Return undefined if there's an error
  }
}

export function useProjects() {
  const { data, loading, error } = useQuery<{ projectsCollection: ProjectsCollection; }>(PROJECTS_QUERY);
  return { data, loading, error };
}
export function useBlogPosts(): UseBlogsResult {
  const { data, loading, error } = useQuery<{ blogCollection: BlogCollection }>(BLOGS_QUERY);

  // Extract unique tags
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
}

export const useBlogPost = (slug: string): UseBlogPostResult => {
  const { data, loading, error } = useQuery<{
    blogCollection: BlogCollection;
    allBlogTitles: {
      items: {
        title: string;
        slug: string;
      }[];
    };
  }>(BLOG_QUERY_CONTENT, {
    variables: { slug },
  });

  return { data, loading, error };
};