
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import HowItWorks from "./components/HowItWorks";
import Categories from "./components/Categories";
import Marketplace from "./components/Marketplace";
import Blog from "./components/Blog";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <HowItWorks />
      <Categories />
      <Marketplace />
      <Blog />
      <Reviews />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
