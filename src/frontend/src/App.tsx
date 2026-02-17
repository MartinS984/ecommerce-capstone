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
  const [cartCount, setCartCount] = useState(0); // Track items in cart

  // Fetch Products on Load
  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        const productList = Array.isArray(data) ? data : (data.products || []);
        setProducts(productList);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
        setLoading(false);
      });
  }, []);

  // Function to Add Item to Cart
  const addToCart = async (productId: string) => {
    try {
      // 1. Send data to the Go Cart Service
      // We use a hardcoded user_id "1" for this demo
      const res = await fetch('/api/cart/1', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product_id: productId, quantity: 1 })
      });

      if (res.ok) {
        // 2. If successful, update the UI counter
        setCartCount(cartCount + 1);
        alert("Added to backend cart!");
      } else {
        alert("Failed to add to cart");
      }
    } catch (error) {
      console.error("Cart error:", error);
    }
  };

  return (
    <Layout>
      <div className="text-center mb-12">
         <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome to the DevOps Store</h2>
         {/* Show Cart Count */}
         <p className="text-xl text-blue-600 font-semibold">Items in Cart: {cartCount}</p>
      </div>

      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
              <div className="h-40 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
                <span className="text-4xl">📦</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 flex-grow">{product.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-blue-600 font-bold text-lg">${product.price}</span>
                
                {/* Connect the button to the function */}
                <button 
                  onClick={() => addToCart(product.id)}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
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