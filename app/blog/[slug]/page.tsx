import BlogContent from "@/components/BlogContent";
import {generateBlogPostMetadata} from "@/utils/metadata";

export type PageProps = {
  params: Promise<{ slug: string }>;
}
export { generateBlogPostMetadata as generateMetadata };
export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <BlogContent slug={slug} />
    </main>
  );
}