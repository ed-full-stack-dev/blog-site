/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApolloError } from "@apollo/client";

interface Blog {
    sys: {
        id: string;
    };
    slug: string;
    author: string;
    authorImage: {
        url: string;
    };
    date: Date;
    tags: string[];
    title: string;
    blogImage: {
        url: string;
        description: string;
    };
    body: {
        json: any;
    };
    summary: string;
    content: any;
}
export interface BlogCollection {
    items: Blog[];
}
export interface UseBlogsResult {
    data: {
        blogCollection: BlogCollection; 
    }
    loading: boolean;
    uniqueTags: string[];
    error: ApolloError | undefined;
    seo?: React.ReactNode;
}
export interface UseBlogPostResult {
    data: {
      blogCollection: BlogCollection;
      allBlogTitles: {
        items: {
          title: string;
          slug: string;
        }[];
      };
    } | undefined;
    loading: boolean;
    error: any;
  }

export default Blog;
