import type { Metadata, ResolvingMetadata } from 'next';
import { fetchBlogPost, fetchProject } from "@/hooks/blog";

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
    },
  };
}

export async function generateProjectMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // Read route params
  const parameters = await params;
  const { slug } = parameters;

  // Fetch project data
  const project = await fetchProject(slug);

  // Optionally extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  if (!project) {
    return {
      title: "Project Not Found - e-rojas.io",
      description: "This project could not be found.",
    };
  }

  return {
    title: `${project.title} - e-rojas.io`,
    description: project.description || "Discover details about this project.",
    openGraph: {
      type: "website",
      siteName: "e-rojas.io",
      title: `${project.title} - e-rojas.io`,
      description: project.description || "Explore this project and its details.",
      url: `/projects/${slug}`,
      images: [
        {
          url: project.imagesCollection.items[0].url || "/images/default-project.png", // Fallback image
          width: 1200, // Recommended OG size
          height: 630,
          alt: `Preview of the project ${project.title}`,
        },
        ...previousImages,
      ],
    },
  };
}


export const blogsPageMetadata: Metadata = {
  metadataBase: new URL("https://www.e-rojas.io"),
  title: "e-rojas | Tech Insights & Development Blog",
  description: "Explore in-depth articles on software development, web technologies, coding best practices, and industry insights.",
  keywords: [
    "Software Development Blog",
    "Web Technologies",
    "Full-Stack Development",
    "JavaScript",
    "React",
    "Node.js",
    "Tech Articles",
    "Programming Tutorials",
    "Coding Best Practices",
  ],
  openGraph: {
    type: "website",
    siteName: "e-rojas.io",
    title: "e-rojas | Tech Insights & Development Blog",
    description: "Read articles on web development, programming best practices, and software engineering trends.",
    url: "https://www.e-rojas.io/blogs",
    images: [
      {
        url: "https://www.e-rojas.io/images/blog-page-card.png", // Absolute URL for better sharing
        width: 1200,
        height: 630,
        alt: "e-rojas blog page preview with articles on web development and software engineering",
      },
    ],
    locale: "en_US",
  },
};


export const portfolioPageMetadata: Metadata = {
  metadataBase: new URL("https://www.e-rojas.io"),
  title: "e-rojas | Full-Stack Developer Portfolio",
  description: "Explore my portfolio featuring innovative web and software development projects, technical case studies, and open-source contributions.",
  keywords: [
    "Full-Stack Developer",
    "Software Engineer",
    "Web Development",
    "JavaScript",
    "React",
    "Node.js",
    "Portfolio",
    "Open Source",
    "Tech Projects",
  ],
  openGraph: {
    type: "website",
    siteName: "e-rojas.io",
    title: "e-rojas | Full-Stack Developer Portfolio",
    description: "Showcasing my expertise in web development, technical projects, and engineering solutions.",
    url: "https://www.e-rojas.io/portfolio",
    images: [
      {
        url: "https://www.e-rojas.io/images/portfolio-page-card.png",
        width: 1200, 
        height: 630,  
        alt: "Preview of my portfolio showcasing web development projects",
      },
    ],
    locale: "en_US",
  },
};


export const homePageMetaData: Metadata = {
  metadataBase: new URL("https://www.e-rojas.io"),
  title: "e-rojas | Full-Stack Developer & Tech Enthusiast",
  description:
    "Explore my portfolio, blog, and insights on software development, web technologies, and coding best practices. Stay up-to-date with the latest in tech!",
  keywords: [
    "Full-Stack Developer",
    "Software Engineer",
    "Web Development",
    "JavaScript",
    "React",
    "Node.js",
    "Tech Blog",
    "Programming",
    "Portfolio",
    "Software Engineering",
  ],
  openGraph: {
    type: "website",
    siteName: "e-rojas.io",
    title: "e-rojas | Full-Stack Developer & Tech Enthusiast",
    description:
      "Discover articles, projects, and insights on software development, web technologies, and coding best practices.",
    url: "https://www.e-rojas.io",
    images: [
      {
        url: "https://www.e-rojas.io/images/home-page-banner.png", // Absolute URL for better sharing
        width: 1200,
        height: 630,
        alt: "e-rojas homepage showcasing tech blog and portfolio",
      },
    ],
    locale: "en_US",
  },
};
