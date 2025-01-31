'use client';

import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

import { useState } from 'react';

interface SuccessStory {
  id: number;
  name: string;
  qualification: string;
  testimonial: string;
  image: string;
}

const successStories: SuccessStory[] = [
  {
    id: 1,
    name: 'Fathima Neha P.V',
    qualification: 'CA Inter both group qualified',
    testimonial:
            'l wasn\'t very confident that I would pass on the first attempt, but thanks to the amazing faculty at triple i and the study material they provided, I was able to clear the exam on the first attempt. All credit goes to the amazing faculty at Triple l',
    image: '/images/neha.png',
  },
  {
    id: 2,
    name: 'Athulya V Nair',
    qualification: 'CA Inter group I qualified',
    testimonial:
            'l tried learning on my own and wasn\'t able to crack the exam, and it was only after I joined triple i that I understood where the problem was. My fundamentals were not strong, and the tutors at triple i helped me realize what my weaknesses were which is why I was able to crack the exam on the next attempt.',
    image: '/images/athulya.png',
  },
];

export function SuccessStories() {
  const [currentStory, setCurrentStory] = useState(0);

  const handleNext = () => {
    setCurrentStory(previous => (previous + 1) % successStories.length);
  };

  const story = successStories[currentStory];

  return (
    <section className="bg-white py-24 font-inter">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Student Success Stories
          </h2>
          <p className="max-w-[800px] text-gray-500 md:text-lg">
            Discover how our courses have helped students achieve their academic and professional goals
            through real success stories.
          </p>
        </div>

        <div className="relative mx-auto flex max-w-4xl flex-col gap-2">

          <div className="flex flex-col gap-8 md:flex-row">
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl md:w-1/2 md:rounded-2xl">
              <Image width={500} height={500} src={story.image} alt={story.name} title={story.name} className="size-full object-cover transition-opacity duration-300 ease-in-out" />
            </div>
            <div className="relative rounded-3xl bg-iii-primary p-8 text-white md:w-1/2 md:rounded-2xl">
              <blockquote className="mb-6 text-lg">
                &quot;
                {story.testimonial}
                &quot;
              </blockquote>
              <footer>
                <cite className="not-italic">
                  <div className="text-xl font-bold">{story.name}</div>
                  <div className="mt-1 text-orange-100">{story.qualification}</div>
                </cite>
              </footer>
            </div>
          </div>
          <Button
            onClick={handleNext}
            className="absolute -bottom-20 left-1/2 size-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-iii-accent/20 p-0 hover:bg-iii-accent/30 md:-right-14 md:bottom-auto md:left-auto md:top-1/2 md:translate-x-0"
            aria-label="Next success story"
          >
            <ChevronRight className="size-6 text-iii-accent" />
          </Button>
        </div>
      </div>
    </section>
  );
}
