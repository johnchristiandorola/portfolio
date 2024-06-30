import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Image from "next/image";
import About from "@/components/About";

export default function Home() {
  return (
   <main>
    <Nav/>
    <Hero/>
    <About/>
   </main>
  );
}
