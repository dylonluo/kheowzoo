import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-accent-color text-white py-4 px-6 flex justify-between items-center">
      <div className="text-2xl font-bold">
        <Link href="/" className="hover:opacity-80">
          KheowZoo
        </Link>
      </div>
      <nav className="flex space-x-4">
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/gallery" className="hover:underline">
          Gallery
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
      </nav>
    </header>
  );
}
