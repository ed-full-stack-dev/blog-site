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

export default Blog;
