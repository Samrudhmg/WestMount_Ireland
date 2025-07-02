import Footer from '@/components/main/footer';
import Hero from '@/components/main/hero';
import Navbar from '@/components/main/navbar';
import StudyIrelandSection from '@/components/main/studies-ireland';
import { SuccessStories } from '@/components/main/success-stories';
import Universities from '@/components/main/universities';
import ContactForm from './_components/contact-us';
import StudyAbroadPage from './_components/dreaming-study';
import IntakesPage from './_components/intakes';

export default function Home() {
  return (
    <main className="min-h-screen font-inter">
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <StudyIrelandSection />
      </div>
      <IntakesPage />
      <Universities />
      <SuccessStories />
      <StudyAbroadPage />
      {/* <ApplyForm /> */}
      <div id="contact">
        <ContactForm />
      </div>
      {/* <StickyFooterWrapper /> */}
      <Footer />
    </main>
  );
}
