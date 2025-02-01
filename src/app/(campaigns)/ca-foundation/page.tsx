import Counter from '@/components/main/counter';
import { Faq } from '@/components/main/faq';
import Footer from '@/components/main/footer';
import Hero from '@/components/main/hero';
import Navbar from '@/components/main/navbar';
import Questions from '@/components/main/questions';
import { StickyFooter } from '@/components/main/sticky-footer';
import Stories from '@/components/main/stories';
import { SuccessStories } from '@/components/main/success-stories';
import CASyllabus from './_componets/ca-syllabus';
import CareerSectionCaFoundation from './_componets/career-section';
import { CoursePromoCAFoundation } from './_componets/course-promo';
import CoursesSectionCaFoundation from './_componets/courses-section';
import StudySectionCaFoundation from './_componets/study-section';

export default function CAFoundationPage() {
  const NavItems = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: 'https://www.tripleica.com/' },
  ];
  const heroProps = {
    title: 'Ace the CA Foundation Exam Right After Class 12',
    highlightText: ['Class 12'],
    highlightColor: '#f15b29',
    subtitle: 'Start Early with Expert Tuition for 11th, 12th Commerce + CA Foundation Prep in One Place.',
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
    videoUrl: 'https://www.youtube.com/embed/sxA86Q2PZ_4?list=PLD-eXWo5HonV4McH5vI9QvOETdMocXO73',
  };

  const faqProps = {
    faqs: [
      {
        question: 'Why should students start the CA Foundation course immediately after completing their 10th grade?',
        answer:
          'These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.',
      },
      {
        question: 'What are the eligibility criteria for CA Foundation after 10th grade?',
        answer:
          'These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.',
      },
      {
        question: 'How long does it take to complete the CA Foundation course',
        answer:
          'These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.',
      },
      {
        question: 'What subjects are included in the CA Foundation course?',
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
        alt: 'WhatsApp Now',
        className: 'bg-[#18CE5D] hover:bg-[#18CE5D]/90 font-medium',
      },
      {
        text: 'Call Us',
        link: 'tel:+919745123466',
        icon: '/icons/call-fill.svg',
        alt: 'Call Now',
        className: 'bg-iii-black hover:bg-iii-black/90 font-medium',
      },
    ],
  };

  const cmaUsaCourse = {
    batchName: '24-25 CA Foundation',
    benefits: [
      {
        text: 'Lay the Foundation for Success',
      },
      {
        text: 'Get ahead with CA Foundation - save 6 to 12 months by starting now!',
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
      <CoursesSectionCaFoundation />
      <CareerSectionCaFoundation />
      {/* <ExamWindowSectionCaFoundation /> */}
      <CASyllabus />
      <StudySectionCaFoundation />
      <CoursePromoCAFoundation {...cmaUsaCourse} />
      <SuccessStories />
      <Stories {...storiesProps} />
      <Faq {...faqProps} />
      <Questions {...questionsProps} />
      <StickyFooter />
      <Footer />
    </main>
  );
}
