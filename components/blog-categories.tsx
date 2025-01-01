import React from 'react';
interface BlogCategoriesProps {
  uniqueTags: string[]
}
function BlogCategories({ uniqueTags }: BlogCategoriesProps) {
  return (
    <div className="max-w-7xl mx-auto my-4 px-2 md:px-8 flex flex-wrap gap-2">
      {Array.from(uniqueTags).map((category) => (
        <button
          key={category}
          className="text-sm bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300"
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default BlogCategories;