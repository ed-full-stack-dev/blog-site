import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { truncate } from '@/utils/truncate'; // Adjust the path as needed

interface SharedCardProps {
    title: string;
    slug: string;
    summary?: string;
    description?: React.ReactNode;
    image?: { url: string; description?: string };
    author?: string;
    authorImage?: { url: string };
    date?: Date;
    extras?: string[]; // For additional metadata like tags or languages
    imgHeight?: 'none' | 'h-48' | 'h-74' | 'h-96';
    isFeatured?: boolean;
    hasImage?: boolean;
    linkPrefix: 'blog' | 'project'; // Determines the URL prefix
}

const SharedCard: React.FC<SharedCardProps> = ({
    title,
    slug,
    summary,
    description,
    image,
    author,
    authorImage,
    date,
    extras = [],
    imgHeight = 'h-48',
    isFeatured = true,
    hasImage = true,
    linkPrefix,
}) => {
    return (
        <Link
            href={`/${linkPrefix}/${slug}`}
            className={`rounded-lg shadow overflow-hidden flex flex-col h-full ${isFeatured ? 'bg-blue-50 hover:bg-white' : 'bg-white'
                }`}
        >
            {/* Image Section */}
            {hasImage && image?.url && (
                <div className={`relative w-full ${imgHeight}`}>
                    <Image
                        src={image.url}
                        alt={image.description || title}
                        priority={isFeatured}
                        className={`w-full ${imgHeight} object-cover transition-transform duration-300 ease-in-out transform hover:scale-105`}
                        width={500}
                        height={500}
                    />
                </div>
            )}

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                    <h3 className="font-semibold mb-2">{title}</h3>
                    {summary && <p className="text-gray-600 text-sm mb-4">{truncate(summary, 100)}</p>}
                    {description && <div className="text-gray-600 text-sm mb-4">{description}</div>}
                </div>

                {/* Footer Section */}
                <div className="flex items-center justify-between mt-4">
                    {
                        author && (
                            <div className="flex items-center">
                                {authorImage?.url && (
                                    <Image
                                        src={authorImage.url}
                                        alt={author || 'Author'}
                                        width={32}
                                        height={32}
                                        className="user--avatar"
                                    />
                                )}
                                <span className="text-sm text-gray-500">{author}</span>
                            </div>
                        )
                    }
                    {
                        extras.length > 0 &&
                        (
                            extras
                                .map((extra, index) => (
                                    <span
                                        key={index}
                                        className={`font-bold ${index % 3 === 0 ? 'text-teal-500' : index % 3 === 1 ? 'text-blue-500' : 'text-pink-500'
                                            }`}
                                    >
                                        {extra}
                                    </span>
                                ))
                        )
                    }

                    {date && (
                        <span className="text-sm text-gray-400">
                            {new Date(date).toLocaleDateString()}
                        </span>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default SharedCard;
