//import Image from "next/image";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="">
      <Header />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
       <Hero />
      </main>
      <Footer />
    </div>
  );
}
