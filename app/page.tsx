import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Examples from "@/components/Examples";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <Examples />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
