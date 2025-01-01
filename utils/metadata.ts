import type { Metadata, ResolvingMetadata } from 'next';
import { fetchBlogPost } from "@/hooks/blog";

type Params = {
  slug: string;
};

type Props = {
  params: Promise<Params>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateBlogPostMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const parameters = await params;
  const { slug } = parameters;

  // fetch data
  const blog = await fetchBlogPost(slug);
  console.log('blog slug', `/blogs/${slug}`);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];
  if (!blog) {
    return {
      title: "Blog Not Found - My Blog",
      description: "This blog post could not be found.",
    };
  }

  return {
    title: blog.title,
    description: blog.summary,
    openGraph: {
      type: "article",
      siteName: "e-rojas.io",
      authors: [blog.author],
      title: blog.title,
      description: blog.summary,
      url: `/blogs/${slug}`,
      images: [
        {
          url: blog.blogImage.url,
          width: 800,
          height: 600,
        },
        ...previousImages,
      ],
      publishedTime: new Date(blog.date).toISOString(),
    },
  };
}


export const blogsPageMetadata: Metadata = {
  metadataBase: new URL("https://www.e-rojas.io"),
  title: "e-rojas",
  description: "My personal blog and portfolio.",
  openGraph: {
    type: "website",
    siteName: "e-rojas.io",
    title: "e-rojas",
    description: "My personal blog and portfolio.",
    url: "https://www.e-rojas.io/blogs",
    images: [
      {
        url: "/images/blog-page-card.png",
        width: 800,
        height: 600,
      },
    ],
  },
};

export const homePageMetaData: Metadata = {
  metadataBase: new URL("https://www.e-rojas.io"),
  title: "e-rojas | Home",
  description:
    "Welcome to e-rojas.io – a platform where I share my personal blog, portfolio, and insights on technology, coding, and more. Explore engaging articles and projects!",
  openGraph: {
    type: "website",
    siteName: "e-rojas.io",
    title: "e-rojas | Home",
    description:
      "Welcome to e-rojas.io – a platform where I share my personal blog, portfolio, and insights on technology, coding, and more. Explore engaging articles and projects!",
    url: "https://www.e-rojas.io",
    images: [
      {
        url: "/images/home-page-banner.png",
        width: 1200,
        height: 630,
        alt: "e-rojas homepage banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "e-rojas | Home",
    description:
      "Discover e-rojas.io – your destination for tech blogs, personal insights, and professional projects.",
    images: [
      {
        url: "/images/home-page-banner.png",
        width: 1200,
        height: 630,
        alt: "e-rojas homepage banner",
      },
    ],
  },
};