import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-secondary-color text-white py-4 px-6 text-center">
      <p>&copy; {new Date().getFullYear()} KheowZoo. All rights reserved.</p>
      <p>
        Follow us on{" "}
        <Link href="https://twitter.com/KheowZoo" className="underline">
          Twitter
        </Link>
        .
      </p>
    </footer>
  );
}
