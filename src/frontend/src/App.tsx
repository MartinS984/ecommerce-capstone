import { useEffect, useState } from 'react';
import Layout from './components/Layout';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/products') // This goes through the Vite proxy -> Minikube
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || []); // Adjust based on your API response structure
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
        setLoading(false);
      });
  }, []);

  return (
    <Layout>
      <div className="text-center mb-12">
         <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome to the DevOps Store</h2>
      </div>

      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
              <div className="h-40 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
                 {/* Placeholder for now since we don't have real images */}
                <span className="text-gray-400 text-4xl">📦</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 flex-grow">{product.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-blue-600 font-bold text-lg">${product.price}</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
}

export default App;