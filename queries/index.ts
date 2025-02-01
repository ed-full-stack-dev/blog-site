import { gql } from "@apollo/client";

export const PROJECTS_QUERY = gql`
query {
  projectsCollection {
    items {
      title
      slug
      languages
      description
      brief
      extras
      imagesCollection {
        items {
          url
          title
        }
      }
    }
  }
}
`;
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
query GetBlogBySlugAndAllTitles($slug: String) {
  blogCollection(where: {slug: $slug}) {
    items {
      sys {
        id
      }
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
  allBlogTitles: blogCollection {
    items {
      title
      slug
    }
  }
}
`;