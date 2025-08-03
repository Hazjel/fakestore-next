export const dynamic = 'force-static'; // SSG mode

export default async function SSGPage() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">SSG - Static Site Generation</h1>
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
