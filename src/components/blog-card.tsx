import React from 'react';
import Blog from '../types/blog';
import { truncate } from '../utils/truncate';



interface BlogCardProps {
    blog: Blog;
    imgHeight?: 'none' | 'h-48' | 'h-74' | 'h-96';
    isFeatured?: boolean;
    hasImage?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({
    blog,
    imgHeight = 'h-48',
    isFeatured = false,
    hasImage = true,
}) => {
    const { sys, author, date, title, blogImage: image, summary, authorImage } = blog;

    return (
        <div
            key={sys.id}
            className={`rounded-lg shadow overflow-hidden flex flex-col h-full ${isFeatured ? ' bg-blue-50 hover:bg-white' : ' bg-white'}`}
        >
            {hasImage && image.url && (
                <img
                    src={image.url}
                    alt={title}
                    className={`w-full ${imgHeight} object-cover`}
                />
            )}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                    <h3 className=" font-semibold mb-2">{title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{truncate(summary, 100)}</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center">
                        <img
                            src={authorImage.url}
                            alt={author}
                            className="w-8 h-8 rounded-full mr-2"
                        />
                        <span className="text-sm text-gray-500">{author}</span>
                    </div>
                    <span className="text-sm text-gray-400">{new Date(date).toLocaleDateString()}</span>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
