import React from 'react';
import BlogCard from './blog-card';


export interface FeaturedPostsSectionProps {
  posts: Array<{
    id: number;
    title: string;
    summary: string;
    category: string;
    author: string;
    date: string;
    imageUrl: string;
    authorProfileUrl?: string;
  }>;
}

const FeaturedPostsSection: React.FC<FeaturedPostsSectionProps> = ({ posts }) => {
  return (
    <section className="max-w-7xl mx-auto px-2 md:px-8 my-8">
      <h2 className="text-2xl font-bold mb-4">Featured Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pb-6">
        {posts.slice(0,2).map((post) => (
          <BlogCard
            key={post.id}
            id={post.id.toString()}
            imageUrl={post.imageUrl}
            title={post.title}
            summary={post.summary}
            author={post.author}
            date={post.date}
            authorProfileUrl={post.authorProfileUrl || ''}
            imgHeight="h-74"
            hasImage={true}
            isFeatured={true}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <BlogCard
          key={posts[2].id}
          id={posts[2].id.toString()}
          imageUrl={posts[2].imageUrl}
          title={posts[2].title}
          summary={posts[2].summary}
          author={posts[2].author}
          date={posts[2].date}
          authorProfileUrl={posts[2].authorProfileUrl || ''}
          isFeatured={true}
          hasImage={true}
        />

       
        <div className="md:col-span-1 flex flex-col gap-4">
          {posts.slice(3,5).map((post) => (
            <BlogCard
              key={post.id}
              id={post.id.toString()}
              title={post.title}
              summary={post.summary}
              author={post.author}
              date={post.date}
              imageUrl={post.imageUrl}
              authorProfileUrl={post.authorProfileUrl || ''}
              hasImage={false}
              isFeatured={true}
            />
          ))}
        </div>

      
        <BlogCard
          key={posts[6].id}
          id={posts[6].id.toString()}
          imageUrl={posts[6].imageUrl}
          title={posts[6].title}
          summary={posts[6].summary}
          author={posts[6].author}
          date={posts[6].date}
          authorProfileUrl={posts[6].authorProfileUrl || ''}
          imgHeight="h-48"
          hasImage={true}
          isFeatured={true}
        />
      </div>

      {/* Fifth and Sixth posts - Regular cards */}
      
    </section>
  );
};

export default FeaturedPostsSection;
