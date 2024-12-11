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
}
export interface UseBlogPostResult {
    data: {
        blog: Blog;
        blogCollection: BlogCollection;
    };
    error: ApolloError | undefined;
    loading: boolean;
}

export default Blog;
