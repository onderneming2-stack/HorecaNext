import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import WhyUs from "@/components/WhyUs";
import Steps from "@/components/Steps";
import VacaturesPreview from "@/components/VacaturesPreview";
import Employers from "@/components/Employers";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CTABanner from "@/components/CTABanner";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LogoBar />
      <hr className="section-divider" />
      <WhyUs />
      <hr className="section-divider" />
      <Steps />
      <hr className="section-divider" />
      <VacaturesPreview />
      <hr className="section-divider" />
      <Employers />
      <hr className="section-divider" />
      <Testimonials />
      <hr className="section-divider" />
      <Pricing />
      <CTABanner />
      <hr className="section-divider" />
      <ContactForm />
      <Footer />
    </main>
  );
}
