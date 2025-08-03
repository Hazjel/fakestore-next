import Image from 'next/image';

// Optional: pre-render semua product
export async function generateStaticParams() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  return products.map(product => ({
    id: product.id.toString(),
  }));
}

export async function generateMetadata({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = await res.json();

  return {
    title: `${product.title} - FakeStore`,
    description: product.description.slice(0, 150),
  };
}

export default async function ProductDetail({ params }) {
  const { id } = params;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <Image
        src={product.image}
        alt={product.title}
        width={200}
        height={200}
        className="mx-auto my-4"
      />
      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="font-semibold">Price: ${product.price}</p>
    </div>
  );
}
