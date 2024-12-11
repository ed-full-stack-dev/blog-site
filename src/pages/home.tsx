import React from 'react';
import Header from '../components/header';
import AllBlogsSection from '../components/all-blogs-section';
import BlogCategories from '../components/blog-categories';
import FeaturedPostsSection from '../components/featured-posts-section';
import Footer from '../components/footer';
import HelmetComponent from '../components/helmet'; // Import the reusable HelmetComponent
import { useBlogPosts } from '../hooks/blog';

function Home() {
  const { data, loading, error, uniqueTags } = useBlogPosts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error! ${error.message}</div>;

  const { items } = data.blogCollection;

  return (
    <div className="min-h-screen mx-auto max-w-[1600px] bg-gray-50">
      <HelmetComponent
        title="E-Rojas Blog | Explore Web Development, React, and More"
        description="Discover articles and tutorials on web development, React, JavaScript, MongoDB, HTML, CSS, and design patterns. Stay updated with E-Rojas."
        keywords="Web Development, React, JavaScript, MongoDB, HTML, CSS, Design Patterns, Blog"
        image="/images/homepage-banner.png" // Ensure the image exists in your public folder
        url="https://e-rojas.io"
      />
      <Header />
      <main>
        <BlogCategories uniqueTags={uniqueTags} />
        <FeaturedPostsSection posts={items.slice(0, 7)} />
        <AllBlogsSection posts={items} />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
