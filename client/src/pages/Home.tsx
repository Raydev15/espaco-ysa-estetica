import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProceduresSection from '@/components/ProceduresSection';
import BeforeAfterSection from '@/components/BeforeAfterSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProceduresSection />
        <BeforeAfterSection />
        <TestimonialsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
