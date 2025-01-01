import React from 'react';
import BlogCard from './blog-card';
import Blog from '../types/blog';

export interface FeaturedPostsSectionProps {
  posts: Blog[];
}

const FeaturedPostsSection: React.FC<FeaturedPostsSectionProps> = ({ posts }) => {
  return (
    <section className="featured-section">
      <h2 className="featured-title">Featured Posts</h2>
      <div className="featured-grid-main">
        {posts.slice(0, 2).map((post) => (
          <BlogCard
            key={post.sys.id}
            blog={post}
            imgHeight="h-74"
            hasImage={true}
            isFeatured={true}
          />
        ))}
      </div>
      <div className="featured-grid-secondary">
        <BlogCard
          key={posts[2].sys.id}
          blog={posts[2]}
          isFeatured={true}
          hasImage={true}
        />
        <div className="featured-grid-column">
          {posts.slice(3, 5).map((post) => (
            <BlogCard
              key={post.sys.id}
              blog={post}
              hasImage={false}
              isFeatured={true}
            />
          ))}
        </div>
        <BlogCard
          key={posts[5].sys.id}
          blog={posts[5]}
          imgHeight="h-48"
          hasImage={true}
          isFeatured={true}
        />
      </div>
    </section>
  );
};

export default FeaturedPostsSection;
