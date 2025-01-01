import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Blog from '@/types/blog'; // Adjust the path as needed
import { truncate } from '@/utils/truncate'; // Adjust the path as needed

interface BlogCardProps {
  blog: Blog;
  imgHeight?: 'none' | 'h-48' | 'h-74' | 'h-96';
  isFeatured?: boolean;
  hasImage?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({
  blog,
  imgHeight = 'h-48',
  isFeatured = true,
  hasImage = true,
}) => {
  const { sys, author, date, title, blogImage: image, summary, authorImage, slug } = blog;
  return (
    <Link
      href={`/blog/${slug}`}
      key={sys.id}
      className={`rounded-lg shadow overflow-hidden flex flex-col h-full ${
        isFeatured ? 'bg-blue-50 hover:bg-white' : 'bg-white'
      }`}
    >
      {/* Image Section */}
      {hasImage && image?.url && (
        <div className={`relative w-full ${imgHeight}`}>
          <Image
            src={image.url}
            alt={title}
            priority={isFeatured}
            className={`w-full ${imgHeight} object-cover`}
            width={500}
            height={500}
          />
        </div>
      )}

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-4">{truncate(summary, 100)}</p>
        </div>

        {/* Footer Section */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            {authorImage?.url && (
              <Image
                src={authorImage.url}
                alt={author}
                width={32}
                height={32}
                className="rounded-full"
              />
            )}
            <span className="text-sm text-gray-500">{author}</span>
          </div>
          <span className="text-sm text-gray-400">
            {new Date(date).toLocaleDateString()}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
