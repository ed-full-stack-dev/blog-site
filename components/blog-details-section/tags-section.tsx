
export const TagsSection = ({ tags }: { tags: string[] }) => (
    <section className="mb-8">
        <h4 className="font-semibold text-gray-800 mb-2">Tags:</h4>
        <div className="flex space-x-2">
            {tags.map((tag) => (
                <span
                    key={tag}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                    {tag}
                </span>
            ))}
        </div>
    </section>
);