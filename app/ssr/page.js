export async function generateMetadata() {
  return { title: 'SSR Page' };
}

export default async function SSRPage() {
  const res = await fetch('https://fakestoreapi.com/products', {cache: 'no-store'});
  const products = await res.json();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">SSR - Server Side Rendering</h1>
      <div className="grid grid-cols-2 gap-4">
        {products.map(product => (
          <div key={product.id} className="p-4 border rounded">
            <h2 className="font-semibold">{product.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
