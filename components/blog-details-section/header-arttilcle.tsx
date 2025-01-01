import Image from "next/image";
export const BlogHeader = ({ title, author, authorImage, date, readTime }: {
    title: string;
    author: string;
    authorImage: string;
    date: string;
    readTime: number;
}) => (
    <header className="mb-8 mt-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{title}</h1>
        <div className="flex items-center space-x-4">
            <Image
                src={authorImage}
                alt="Author"
                width={40}
                height={40}
            />
            <div>
                <p className="text-sm font-medium text-gray-700">By {author}</p>
                <p className="text-xs text-gray-500">Published on {
                    new Date(date).toLocaleDateString()
                } • {readTime} min read</p>
            </div>
        </div>
    </header>
);