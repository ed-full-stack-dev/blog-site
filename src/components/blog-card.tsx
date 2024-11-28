// src/components/BlogCard.tsx
import React from 'react';

interface BlogCardProps {
    id: string;
    imageUrl: string;
    title: string;
    summary: string;
    author: string;
    date: string;
    authorProfileUrl: string;
    imgHeight?: 'none' | 'h-48' | 'h-74' | 'h-96';
    isFeatured?: boolean;
    hasImage?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({
    id,
    imageUrl,
    title,
    summary,
    author,
    date,
    authorProfileUrl,
    imgHeight = 'h-48',
    isFeatured = false,
    hasImage = true,
}) => {
    return (
        <div
            key={id}
            className={`rounded-lg shadow overflow-hidden flex flex-col h-full ${isFeatured ? ' bg-blue-50 hover:bg-white' : ' bg-white'}`}
        >
            {/* Render the image if available */}
            {hasImage && imageUrl && (
                <img
                    src={imageUrl}
                    alt={title}
                    className={`w-full ${imgHeight} object-cover`}
                />
            )}
            {/* Content section with flexible height */}
            <div className="p-6 flex flex-col flex-grow">
                {/* Title and summary section */}
                <div className="flex-grow">
                    <h3 className=" font-semibold mb-2">{title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{summary}</p>
                </div>
                {/* Author section aligned at the bottom */}
                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center">
                        <img
                            src={authorProfileUrl}
                            alt={author}
                            className="w-8 h-8 rounded-full mr-2"
                        />
                        <span className="text-sm text-gray-500">{author}</span>
                    </div>
                    <span className="text-sm text-gray-400">{date}</span>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
