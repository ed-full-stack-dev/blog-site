
export const ProductList = ({ products, loading }:{products:any, loading:boolean}) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product:any) => (
          <div key={product.id} className="border rounded-md p-4 shadow-md">
            <img
              src={product.image}
              alt={product.title}
              className="h-40 w-full object-contain mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-700 mb-4">${product.price.toFixed(2)}</p>
            <button className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600">
              View Details
            </button>
          </div>
        ))}
      </div>
    );
  };
  