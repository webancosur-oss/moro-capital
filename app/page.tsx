import About from "@/components/sections/About/About";
import FAQ from "@/components/sections/FAQ/FAQ";
import FeaturedProject from "@/components/sections/FeaturedProject/FeaturedProject";
import Group from "@/components/sections/Group/Group";
import Hero from "@/components/sections/Hero/Hero";
import Market from "@/components/sections/Market/Market";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Group />
      <Market />
      <FeaturedProject />
      <FAQ />
    </main>
  );
}