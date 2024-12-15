import React from 'react';
import Header from '../components/header';
import AllBlogsSection from '../components/all-blogs-section';
import BlogCategories from '../components/blog-categories';
import FeaturedPostsSection from '../components/featured-posts-section';
import Footer from '../components/footer';
import { useBlogPosts } from '../hooks/blog';


function Home() {
  const { data, loading, error, uniqueTags, seo } = useBlogPosts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error! {error.message}</div>;

  const { items } = data.blogCollection;

  return (
    <>
      {seo}
      <div className="min-h-screen mx-auto max-w-[1600px] bg-gray-50">
        <Header />
        <main>
          <BlogCategories uniqueTags={uniqueTags} />
          <FeaturedPostsSection posts={items.slice(0, 7)} />
          <AllBlogsSection posts={items} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Home;
