'use client';
import { useEffect, useState } from 'react';

export default function CSRPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">CSR - Client Side Rendering</h1>
      <div className="grid grid-cols-2 gap-4">
        {products.map(product => (
          <div key={product.id} className="p-4 border rounded">
            <a
              href={`/product/${product.id}`}
            >
              <h2 className="font-semibold">{product.title}</h2>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
