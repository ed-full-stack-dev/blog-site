import { gql } from "@apollo/client";


export const BLOGS_QUERY = gql`
query{
    blogCollection(order: date_ASC) {
      items {
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