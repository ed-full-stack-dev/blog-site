interface Blog {
    sys: {
        id: string;
    };
    author: string;
    authorImage: {
        url: string;
    };
    date: Date;
    tags: string[];
    title: string;
    blogImage: {
        url: string;
    };
    summary: string;
    content: any;
}

export default Blog;
