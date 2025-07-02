'use client';

import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { ApplyDialogForm } from './apply-dialog-form';

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
            'l wasn\'t very confident that I would pass on the first attempt, but thanks to the amazing faculty at triple i and the study material they provided, I was able to clear the exam on the first attempt. All credit goes to the amazing faculty at Triple l.',
    image: '/images/Frame1.png',
  },
  {
    id: 2,
    name: 'Athulya V Nair',
    qualification: 'CA Inter group I qualified',
    testimonial:
            'l tried learning on my own and wasn\'t able to crack the exam, and it was only after I joined triple i that I understood where the problem was. My fundamentals were not strong, and the tutors at triple i helped me realize what my weaknesses were which is why I was able to crack the exam on the next attempt.',
    image: '/images/Frame2.png',
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
        <div className="mb-6 flex flex-col items-start space-y-2 text-left md:items-center lg:mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-4xl">
            Testimonials
          </h2>
          <p className="max-w-[800px] text-gray-500 md:text-lg">
            The journey of Westmount's study abroad
          </p>
        </div>

        <div className="relative mx-auto flex max-w-4xl flex-col gap-2">
          <div className="flex flex-col items-center gap-8  md:h-[60vh] md:flex-row md:justify-center  md:gap-6">
            <div className="relative aspect-square w-full overflow-hidden md:h-[90%] md:w-[37%]">
              <Image
                width={350}
                height={350}
                src={story.image || '/placeholder.svg'}
                alt={story.name}
                title={story.name}
                className="size-full rounded-[2rem] object-cover transition-opacity duration-300 ease-in-out lg:rounded-[2.5rem]"
              />
            </div>
            <div className="relative flex  flex-col justify-between rounded-3xl bg-[#006969] p-8 text-white md:h-[100%] md:w-[45%] md:justify-around md:rounded-[3rem] md:p-6 lg:p-8">
              <blockquote className="mb-6 text-lg md:text-[16px] lg:text-lg">
                &quot;
                {story.testimonial}
                &quot;
              </blockquote>
              <footer>
                <cite className="not-italic">
                  <div className="text-2xl font-bold">
                    {story.name}
                  </div>
                  {/* <div className="text-sm mt-2">
                                        {story.qualification}
                                    </div> */}
                </cite>
              </footer>
            </div>
          </div>
          <Button
            onClick={handleNext}
            className="absolute -bottom-24 left-1/2 size-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#006969]/20 p-0 hover:bg-[#006969]/30 md:-right-1 md:bottom-auto md:left-auto md:top-1/2 md:translate-x-0"
            aria-label="Next success story"
          >
            <ChevronRight className="size-6 text-white" />
          </Button>
        </div>
      </div>

      <section>
        <div className="mt-24 flex justify-center gap-4 md:mt-10">
          <ApplyDialogForm>
            <Button
              variant="outline"
              className="h-12 bg-white px-5 text-teal-700 "
            >
              Contact us
            </Button>
          </ApplyDialogForm>
          <ApplyDialogForm>
            <Button
              className="flex h-12 items-center"
              variant="default"
            >
              Download Brochure
              <img
                src="/icons/plane-icon.svg"
                alt=""
                className=" size-5"
              />
            </Button>
          </ApplyDialogForm>
        </div>
      </section>
    </section>
  );
}
