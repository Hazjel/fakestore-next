import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="font-bold text-xl">FakeStore</Link>
        <div className="space-x-4">
          <Link href="/csr">CSR</Link>
          <Link href="/ssr">SSR</Link>
          <Link href="/ssg">SSG</Link>
        </div>
      </div>
    </nav>
  );
}
