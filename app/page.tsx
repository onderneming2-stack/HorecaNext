import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import Steps from "@/components/Steps";
import VacaturesPreview from "@/components/VacaturesPreview";
import Employers from "@/components/Employers";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <hr className="section-divider" />
        {/* WhyUs hoger in de pagina — boven vacatures */}
        <WhyUs />
        <hr className="section-divider" />
        <Steps />
        <hr className="section-divider" />
        <VacaturesPreview />
        <hr className="section-divider" />
        <Employers />
        <hr className="section-divider" />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
