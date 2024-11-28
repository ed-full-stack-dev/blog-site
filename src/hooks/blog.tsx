import { ApolloError, useQuery } from "@apollo/client";
import { BLOGS_QUERY } from "../queries";
import Blog from "../types/blog";


export const useBlogs = (): {
    data: {
        blogCollection: {
            items: Blog[];
        };
    };
    loading: boolean;
    error: ApolloError | undefined;
    uniqueTags: string[];
} => {
    const { data, loading, error } = useQuery(BLOGS_QUERY);
    const uniqueTags: Set<string> = new Set();
    if (data) {
        data.blogCollection.items.forEach((blog: Blog) => {
            blog.tags.forEach((tag) => uniqueTags.add(tag));
        });

    }
    return { data, loading, error, uniqueTags: Array.from(uniqueTags) };
};
