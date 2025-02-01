'use client';

import { Button } from '@/components/ui/button';

import { CustomCarousel } from '../ui/extended/carousel-custom';
import { ApplyDialogForm } from './apply-dialog-form';

interface HeroProps {
  title: string;
  highlightText: string[];
  highlightColor: string;
  subtitle: string;
  ctaWhatsApp: {
    text: string;
    link: string;
  };
  ctaCall?: {
    text: string;
    link: string;
  };
  carouselImages: {
    src: string;
    alt: string;
    title?: string;
    caption?: string;
  }[];
}

export default function Hero({
  title,
  highlightText,
  highlightColor,
  subtitle,
  ctaWhatsApp,
  // ctaCall,
  carouselImages,
}: HeroProps) {
  const renderHighlightedTitle = () => {
    let processedTitle = title;
    highlightText.forEach((text) => {
      processedTitle = processedTitle.replace(text, `<span style="color: ${highlightColor}">${text}</span>`);
    });
    return processedTitle;
  };

  return (
    <section className="rounded-none bg-white py-14 md:rounded-b-[80px]">
      <div className="mx-auto max-w-5xl px-4 2xl:max-w-7xl">
        <div className="flex flex-col-reverse items-center gap-3 md:flex-row">
          <div className="mb-8 w-full md:mb-0 md:w-1/2 lg:px-7">
            <h1
              className="mb-4 text-3xl font-bold md:text-4xl 2xl:text-5xl"
              dangerouslySetInnerHTML={{ __html: renderHighlightedTitle() }}
            />
            <h3 className="mb-6 text-lg 2xl:text-xl">{subtitle}</h3>
            <div className="space-x-4 space-y-2">
              <Button asChild className="2xl:text-md rounded-xl bg-[#18CE5D] p-6 text-sm hover:bg-green-600">
                <a href={ctaWhatsApp.link} className="inline-flex items-center">
                  {ctaWhatsApp.text}
                  {/* <Image src="/icons/whatsapp-fill.svg" title="WhatsApp" alt="WhatsApp" width={24} height={24} className="ml-2" /> */}
                </a>
              </Button>
              <ApplyDialogForm>
                <Button variant="secondary" className="2xl:text-md rounded-xl bg-gray-800 p-6 text-sm text-white hover:bg-gray-900">
                  Download Brochure
                </Button>
              </ApplyDialogForm>
            </div>
          </div>
          <div className="flex w-full items-center md:w-1/2">
            <CustomCarousel
              images={carouselImages}
              autoPlayInterval={5000}
              className="size-full overflow-hidden rounded-tl-[100px]"
              captionPosition={{ top: '10%' }}
              captionClassName="text-left text-4xl font-bold text-white p-2 rounded mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
