'use-client';
import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import BlogCard from "./blog-card";
import { FeaturedPostsSectionProps } from "./featured-posts-section";

const POSTS_PER_PAGE = 4;

function AllBlogsSection({ posts }: FeaturedPostsSectionProps) {
  const [activePage, setActivePage] = useState(1);

  const startIndex = (activePage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const displayedPosts = posts.slice(startIndex, endIndex);

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setActivePage(page);
  };

  return (
    <div className="max-w-7xl mx-auto px-2 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {displayedPosts.map((post) => (
          <BlogCard
            key={post.sys.id}
            blog={post}
            hasImage={false}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <Pagination
          count={Math.ceil(posts.length / POSTS_PER_PAGE)}
          page={activePage}
          onChange={handlePageChange}
          siblingCount={1}
          boundaryCount={1}
          color="primary"
        />
      </div>
    </div>
  );
}

export default AllBlogsSection;
