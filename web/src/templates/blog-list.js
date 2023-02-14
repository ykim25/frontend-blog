import { graphql } from 'gatsby';
import React from 'react';
import PageHeader from '../components/PageHeader';
import PageSpace from '../components/PageSpace';
import BlogGrid from '../components/blog/BlogGrid';
import SEO from '../components/SEO';
import Pagination from '../components/Pagination';

export const BlogsQuery = graphql`
  query blogListQuery($limit: Int!, $offset: Int!) {
    allSanityBlog(
      sort: { fields: publishedAt, order: DESC }
      limit: $limit
      skip: $offset
    ) {
      nodes {
        id
        title
        publishedAt
        slug {
          current
        }
        categories {
          title
          slug {
            current
          }
        }
        coverImage {
          alt
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

function BlogList({ data, pageContext }) {
  const { currentPage, numberOfPages } = pageContext;
  const blogs = data.allSanityBlog.nodes;

  return (
    <>
      <SEO title="Blogs" />
      <PageSpace top={80} bottom={100}>
        <div className="container">
          <PageHeader
            title="All Blogs"
            // description="This month will bring about the 88th Academy Awards. Starting in 1928, this prestigious award ceremony..."
          />
          <BlogGrid blogs={blogs} />
          {numberOfPages > 1 && (
            <Pagination
              currentPage={currentPage}
              numberOfPages={numberOfPages}
              baseURL="/blogs"
            />
          )}
        </div>
      </PageSpace>
    </>
  );
}

export default BlogList;
