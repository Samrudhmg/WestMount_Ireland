import Counter from '@/components/main/counter';
import { CoursePromo } from '@/components/main/course-promo';
import { Faq } from '@/components/main/faq';
import Footer from '@/components/main/footer';
import Hero from '@/components/main/hero';
import Navbar from '@/components/main/navbar';
import Questions from '@/components/main/questions';
import { StickyFooter } from '@/components/main/sticky-footer';
import Stories from '@/components/main/stories';
import { SuccessStories } from '@/components/main/success-stories';
import CareerSection from './_components/career-section';
import CoursesSection from './_components/courses-section';
import ExamWindowSection from './_components/exam-windows-section';
import StudySection from './_components/study-section';

export default function WorkingProfessionalPage() {
  const NavItems = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: 'https://www.tripleica.com/' },
  ];
  const heroProps = {
    title: 'Achieve Leadership Roles in Finance with CMA USA',
    highlightText: ['CMA USA'],
    highlightColor: '#f15b29',
    subtitle: 'At Triple i CA, learn in-demand skills from seasoned professionals to achieve your dream job.',
    ctaWhatsApp: {
      text: 'WhatsApp Now',
      link: 'https://wa.me/+919745123466',
    },
    ctaCall: {
      text: 'Call now',
      link: 'tel:+919745123466',
    },
    carouselImages: [
      {
        src: '/images/slider-1.png',
        alt: 'Winners of Triple i',
        caption: 'Learn From India\'s\nNo.1 Academic Experts',
        title: 'Learn From India No.1 Academic Experts',
      },
      {
        src: '/images/slider-2.png',
        alt: 'Celebrations at Triple i',
        caption: 'Celebrations\n@ Triple i',
        title: 'Celebrations at Triple i Commerce Academy',
      },
      {
        src: '/images/slider-3.png',
        alt: 'CMA USA Program',
        caption: 'Winners of\nTriple i',
        title: 'Winners of Triple i Commerce Academy',
      },
    ],
  };

  const counterProps = {
    stats: [
      { count: 47, label: 'Countries' },
      { count: 160, label: 'Indian Chapters' },
      { count: 390000, label: 'Qualified Professionals' },
      { count: 850000, label: 'Students' },
    ],
  };

  const storiesProps = {
    title: '<span class=\'text-iii-accent\'>Inspiring</span> Stories',
    subtitle: 'Watch videos of people sharing their journeys and how our programs helped shape their success.',
    videoUrl: 'https://www.youtube.com/embed/fgkUe92_8sw?list=PLQkguFimsN4gEDy3_PyqPS1_00O7jrhlE',
  };

  const faqProps = {
    faqs: [
      {
        question: 'What are the eligibility requirements for the CMA USA certification?',
        answer:
          'To be eligible for the CMA USA certification, you need to have a bachelor\'s degree from an accredited college or university, or a related professional certification. You also need to have two continuous years of professional experience in management accounting or financial management.',
      },
      {
        question: 'How long does it typically take to complete the CMA USA certification?',
        answer:
          'The time to complete the CMA USA certification varies, but most candidates take 12-18 months to finish the program. This includes studying for and passing both exam parts, as well as fulfilling the experience requirement.',
      },
      {
        question: 'Can I take the CMA USA exams while pursuing my degree?',
        answer:
          'Yes, you can take the CMA USA exams while pursuing your degree. However, you will need to complete your bachelor\'s degree and fulfill the experience requirement before you can be certified.',
      },
      {
        question: 'How many questions are on each CMA exam, and how are they structured?',
        answer:
          'These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.',
      },
    ],
  };

  const questionsProps = {
    title: 'Still have questions?',
    subtitle: 'Our team is ready to assist!',
    ctaButtons: [
      {
        text: 'WhatsApp Now',
        link: 'https://wa.me/+919745123466',
        icon: '/icons/whatsapp-fill.svg',
        alt: 'WhatsApp',
        className: 'bg-[#18CE5D] hover:bg-[#18CE5D]/90 font-medium',
      },
      {
        text: 'Call Us',
        link: 'tel:+919745123466',
        icon: '/icons/call-fill.svg',
        className: 'bg-iii-black hover:bg-iii-black/90 font-medium',
        alt: 'Call',
      },
    ],
  };

  const cmaUsaCourse = {
    batchName: '24-25 CMA USA',
    benefits: [
      {
        text: 'Complete the CMA USA certification within one year.',
      },
      {
        text: 'Get a salary package of over 10 lakhs as a fresher.',
      },
    ],
    originalPrice: 15000,
    discountedPrice: 10000,
  };

  return (
    <main className="min-h-screen bg-iii-black">
      <Navbar navItems={NavItems} />
      <Hero {...heroProps} />
      <Counter {...counterProps} />
      <CoursesSection />
      <CareerSection />
      <ExamWindowSection />
      <StudySection />
      <CoursePromo {...cmaUsaCourse} />
      <SuccessStories />
      <Stories {...storiesProps} />
      <Faq {...faqProps} />
      <Questions {...questionsProps} />
      <StickyFooter />
      <Footer />
    </main>
  );
}
