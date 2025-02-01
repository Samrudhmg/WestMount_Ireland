import { Carousel } from '@/components/main/custom-carousel';
import { FeatureCard } from '@/components/main/feature-card';
import { Button } from '@/components/ui/button';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <img src="/icons/bx-ico1.svg" alt="book" title="Workbook" />,
    title: 'Triple i Workbook',
    description:
        'Packed with easy-to-understand practice questions from ICAI, this workbook is your ultimate toolkit to master every topic effortlessly.',
  },
  {
    icon: <img src="/icons/bx-ico2.svg" alt="assistance" title="Assistance" />,
    title: 'Strategic Revision Assistance',
    description: 'Stay exam-ready with focused, timed revision sessions that make learning faster and smarter.',
  },
  {
    icon: <img src="/icons/bx-ico3.svg" alt="Resources" title="Resources" />,
    title: 'Expert Resources',
    description:
        'A professional qualification for those aspiring to excel in management accounting, financial analysis, and strategic decision-making.',
  },
  {
    icon: <img src="/icons/bx-ico4.svg" alt="Mentorship" title="Mentorship" />,
    title: 'Dedicated Mentorship',
    description:
        'Get one-on-one guidance from expert mentors who\'ll walk with you every step of the way to build your confidence.',
  },
  {
    icon: <img src="/icons/bx-ico5.svg" alt="Concept" title="Concept" />,
    title: 'Concept Clarity',
    description:
        'Learn from materials crafted by our top researchers, ensuring you stay ahead with the latest and most effective learning tools.',
  },
];

const images = [
  {
    src: '/images/slider-img1.jpg',
    alt: 'Students studying together',
  },
  {
    src: '/images/slider-img2.jpg',
    alt: 'Dedicated Mentorship',
  },
  {
    src: '/images/slider-img3.jpg',
    alt: 'study environment',
  },
  {
    src: '/images/slider-img4.jpg',
    alt: 'success stories',
  },
  {
    src: '/images/slider-img5.jpg',
    alt: 'study environment',
  },
];
export default function CoursesSection() {
  return (
    <section className="mx-auto bg-white">
      <div className="container mx-auto max-w-5xl px-4 py-8 text-center">
        <h2 className="text-3xl font-bold leading-tight md:text-4xl">
          Why choose CMA USA Course at Triple i as a
          {' '}
          <span className="text-iii-accent">working professional</span>
          {' '}
          ?
        </h2>
        <p className="mt-6 font-inter text-lg leading-relaxed text-gray-600 md:text-lg xl:text-xl">
          Join the best institute for CMA USA in Kerala, where we empower professionals to excel in finance, achieve leadership roles, and unlock global opportunities.
        </p>
      </div>
      <div className="mx-auto flex h-full flex-col gap-3 lg:container lg:flex-row ">
        <div className="flex items-start justify-center lg:w-2/5">
          <div className="px-4">
            <Carousel images={images} autoPlayInterval={5000} dotsPosition={{ bottom: 24 }} className="mx-auto aspect-[10/16] w-[300px] md:aspect-[10/10] md:w-[450px] lg:aspect-[10/16] lg:w-[420px]" />
          </div>
        </div>
        <div className="mx-auto px-4  md:container lg:w-3/5">
          <div className="mb-6 grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 lg:gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
            ))}
            <Button asChild className="text-md w-full min-w-[150px] rounded-xl bg-iii-primary p-6 text-white hover:bg-iii-accent md:w-1/2">
              <a href="tel:+919745123466">Call now</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
