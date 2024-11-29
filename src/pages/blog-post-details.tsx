import React from 'react';
import { CodeBlock } from '../utils/code-blocks';

function BlogPostDetails() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            {/* Blog Header Section */}
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Understanding React Hooks in Depth</h1>
                <div className="flex items-center space-x-4">
                    <img
                        src="https://via.placeholder.com/40"
                        alt="Author"
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <p className="text-sm font-medium text-gray-700">By John Doe</p>
                        <p className="text-xs text-gray-500">Published on July 14, 2024 • 5 min read</p>
                    </div>
                </div>
            </header>

            {/* Blog Image */}
            <div className="mb-8">
                <img
                    src="https://via.placeholder.com/800x400"
                    alt="Blog visual"
                    className="w-full rounded-md shadow-md"
                />
            </div>

            {/* Blog Content */}
            <article className="prose lg:prose-lg max-w-none mb-8">
                <p>
                    React Hooks provide a way to use state and lifecycle features in function components.
                    Introduced in React 16.8, Hooks allow developers to write components that are more
                    concise and easier to understand.
                </p>

                <h2>What are React Hooks?</h2>
                <p>
                    Hooks are functions that let developers "hook into" React's state and lifecycle features.
                    Examples of hooks include <code>useState</code>, <code>useEffect</code>, and <code>useContext</code>.
                </p>

                <blockquote>
                    “Hooks let you use state and other React features without writing a class.” - React Documentation
                </blockquote>

                <p>
                    In this blog, we'll explore how Hooks work, why they're useful, and some common use cases. We'll also
                    dive into examples of the most frequently used Hooks.
                </p>

                <h3>Why Use Hooks?</h3>
                <ul>
                    <li>Hooks simplify stateful logic.</li>
                    <li>They promote better code reuse.</li>
                    <li>They eliminate the need to use lifecycle methods in class components.</li>
                </ul>
                <CodeBlock codeString={`/* jsx */\nconst hello = "world";`}  />
                <br />
                <CodeBlock
                    codeString={`/* css */\nbody { background: #000; }`}
                    language="css"
                    customStyle={{ backgroundColor: "#333", color: "#fff" }}
                />

            </article>

            {/* Tags Section */}
            <section className="mb-8">
                <h4 className="font-semibold text-gray-800 mb-2">Tags:</h4>
                <div className="flex space-x-2">
                    {['React', 'JavaScript', 'Web Development', 'Hooks'].map((tag) => (
                        <span
                            key={tag}
                            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </section>

            {/* Related Articles Section */}
            <section>
                <h4 className="text-xl font-bold text-gray-800 mb-4">Related Articles</h4>
                <ul className="list-none space-y-4">
                    {['Introduction to React', 'Advanced State Management with Hooks', 'Handling Side Effects in React'].map((title, index) => (
                        <li key={index} className="border-b pb-2">
                            <a href="#" className="text-blue-500 hover:underline">{title}</a>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}

export default BlogPostDetails;
