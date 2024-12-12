import React from 'react';
import Header from '../components/header';
import AllBlogsSection from '../components/all-blogs-section';
import BlogCategories from '../components/blog-categories';
import FeaturedPostsSection from '../components/featured-posts-section';
import Footer from '../components/footer';
// import HelmetComponent from '../components/helmet'; // Import the reusable HelmetComponent
import { useBlogPosts } from '../hooks/blog';
import SEO from '../components/SEO';

function Home() {
  const { data, loading, error, uniqueTags } = useBlogPosts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error! ${error.message}</div>;

  const { items } = data.blogCollection;

  return (
    <div className="min-h-screen mx-auto max-w-[1600px] bg-gray-50">
      <SEO
        title="E-Rojas Blog"
        description="A blog about web development, software engineering, and more."
        keywords="web development, software engineering, react, javascript"
        image="https://images.ctfassets.net/d502s68us4nn/3kmYZyqYM6yWqNmV7yXba4/8451e85360d6a1d735773daf25a0d3a1/Screenshot_2024-12-11_at_9.32.24_PM.png"
        url="https://e-rojas.io"
        datePublished={new Date().toISOString().split('T')[0]}
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
