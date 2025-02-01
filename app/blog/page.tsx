import BlogOverview from "@/app/blog/BlogOverview";
import { blogsPageMetadata } from "@/utils/metadata";
export const metadata = blogsPageMetadata;
export default function BlogsPage() {
  return (
    <BlogOverview />
  );
}
