//import Image from "next/image";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import IconGrid from "./components/IconGrid";

export default function Home() {
  return (
    <div className="">
      <header>
      <Header />
      </header>
  
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
       <Hero />
       <IconGrid />
      </main>
      <Footer />
    </div>
  );
}
