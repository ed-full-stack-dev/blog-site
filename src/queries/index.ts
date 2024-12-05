import { gql } from "@apollo/client";


export const BLOGS_QUERY = gql`
query{
    blogCollection(order: date_DESC) {
      items {
        slug
        sys {
          id
        }
        authorImage{
            url
          }
        title
        author
        date
        summary
        tags
        blogImage {
          url
        }
      }
    }
  }
`;

export const BLOG_QUERY_CONTENT = gql`
query GetBlogBySlug($slug: String) {
    blogCollection(where: {slug: $slug}) {
      items {
        summary
        title
        author
        blogImage {
          url
          description
        }
        tags
        date
        authorImage {
          url
        }
        body {
          json
        }
      }
    }
  }
`;