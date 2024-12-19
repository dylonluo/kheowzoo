import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#8b4513] text-white py-4 px-6 text-center">
      <p>&copy; {new Date().getFullYear()} Kheowzoo. All rights reserved.</p>
      <p>
        Follow us on{" "}
        <Link href="https://x.com/kheowzooFROMSOL" className="underline">
          X
        </Link>
        .
      </p>
    </footer>
  );
}
