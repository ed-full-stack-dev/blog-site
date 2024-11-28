import React from 'react';
import Header from './components/header';
import BlogCategories from './components/blog-categories';
import FeaturedPostsSection from './components/featured-posts-section';
import { posts } from './components/data';
import AllBlogsSection from './components/all-blogs-section';



function App() {
  return (
    <div className="min-h-screen mx-auto max-w-[1600px] bg-gray-50">
      <Header />
      <main>
        <BlogCategories />
        <FeaturedPostsSection posts={posts.slice(0, 7)} />
        <AllBlogsSection posts={posts} />
      </main>
    </div>
  );
}

export default App;
