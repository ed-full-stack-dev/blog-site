import { useState, useEffect } from "react";
import { ProductList } from "./product-list";

export const ProductListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      async function fetchProducts() {
        setLoading(true);
        try {
          const response = await fetch('https://fakestoreapi.com/products');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.error('Error fetching products:', error);
        } finally {
          setLoading(false);
        }
      }
      fetchProducts();
    }, []);
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">Product List</h1>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-500"></div>
            <span className="ml-4 text-xl text-gray-700">Loading products...</span>
          </div>
        ) : (
          <ProductList products={products.slice(0,5)} loading={loading} />
        )}
      </div>
    );
  };
  