import Link from "next/link";

export default function Navigation() {
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Blog Title */}
        <h1 className="text-2xl font-bold">
          <Link href="/" className="hover:opacity-90">
            My Blog
          </Link>
        </h1>

        {/* Navigation Menu */}
        <nav aria-label="Main Navigation">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:underline" aria-label="Home">
                Home
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline" aria-label="Blogs">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
