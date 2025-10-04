export type Asset = {
    url: string;
    width?: number;
    height?: number;
    description?: string;
    title?: string;
}
export type Sys = {
    id: string;
}
export type Blog = {
    sys: Sys;
    title: string;
    slug: string;
    author: string;
    date: Date;
    authorImage: Asset;
    summary: string;
    tags: string[];
    body: string;
    blogImage: Asset
    vlog: Asset
}

export type GetBlogsResponse = {
   blogCollection: {items: Blog[]}
}