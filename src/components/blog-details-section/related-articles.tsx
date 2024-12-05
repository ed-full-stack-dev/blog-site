
export const RelatedArticlesSection = () => (
    <section>
        <h4 className="text-xl font-bold text-gray-800 mb-4">Related Articles</h4>
        <ul className="list-none space-y-4">
            {['Introduction to React', 'Advanced State Management with Hooks', 'Handling Side Effects in React'].map((title, index) => (
                <li key={index} className="border-b pb-2">
                    <a href="#d" className="text-blue-500 hover:underline">{title}</a>
                </li>
            ))}
        </ul>
    </section>
);