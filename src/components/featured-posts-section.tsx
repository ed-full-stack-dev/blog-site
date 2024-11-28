import React from 'react';
import BlogCard from './blog-card';
import Blog from '../types/blog';
export interface FeaturedPostsSectionProps {
  posts: Blog[];
}

const FeaturedPostsSection: React.FC<FeaturedPostsSectionProps> = ({ posts }) => {
  return (
    <section className="max-w-7xl mx-auto px-2 md:px-8 my-8">
      <h2 className="text-2xl font-bold mb-4">Featured Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pb-6">
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <BlogCard
          key={posts[2].sys.id}
          blog={posts[2]}
          isFeatured={true}
          hasImage={true}
        />
        <div className="md:col-span-1 flex flex-col gap-4">
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
